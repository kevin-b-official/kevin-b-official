import fs from "node:fs/promises";
import path from "node:path";

const DISCORD_USER_ID = process.env.DISCORD_USER_ID;
const OUTPUT_PATH = path.resolve("discord-sakura-card.svg");

if (!DISCORD_USER_ID) {
  console.error("Missing DISCORD_USER_ID environment variable.");
  process.exit(1);
}

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function truncate(text = "", maxLength = 46) {
  const clean = String(text).trim();
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength - 1)}…`;
}

function getStatusConfig(status) {
  switch (status) {
    case "online":
      return { color: "#4ade80", label: "ONLINE" };
    case "idle":
      return { color: "#facc15", label: "IDLE" };
    case "dnd":
      return { color: "#f43f5e", label: "DO NOT DISTURB" };
    default:
      return { color: "#a855f7", label: "OFFLINE" };
  }
}

function pickPrimaryActivity(data) {
  if (data.listening_to_spotify && data.spotify) {
    const artist = Array.isArray(data.spotify.artist)
      ? data.spotify.artist.join(", ")
      : data.spotify.artist;
    return {
      kicker: "LISTENING ON SPOTIFY // LOFI & VIBES",
      title: truncate(`${data.spotify.song} — ${artist}`, 44),
      meta: truncate(`ALBUM: ${data.spotify.album || "Unknown"}`, 58),
      accent: "#f472b6",
    };
  }

  const activities = Array.isArray(data.activities) ? data.activities : [];
  const activeApp =
    activities.find((act) => act.type !== 4) ||
    activities.find((act) => act.type === 4);

  if (activeApp) {
    const kickerMap = {
      0: "PLAYING / ACTIVE",
      1: "STREAMING",
      2: "LISTENING",
      3: "WATCHING",
      4: "CUSTOM STATUS",
      5: "COMPETING",
    };
    const kickerPrefix = kickerMap[activeApp.type] || "ACTIVITY";
    const mainTitle =
      activeApp.type === 4
        ? activeApp.state || activeApp.name
        : activeApp.name;
    const subParts = [];
    if (activeApp.type !== 4 && activeApp.details) subParts.push(activeApp.details);
    if (activeApp.type !== 4 && activeApp.state) subParts.push(activeApp.state);

    return {
      kicker: `${kickerPrefix} // HORIZON'S DEV LOUNGE`,
      title: truncate(mainTitle || "IN SESSION", 44),
      meta: truncate(
        subParts.join(" · ") || "SAKURA NIGHT TERMINAL",
        58
      ),
      accent: "#f9a8d4",
    };
  }

  return {
    kicker: "DISCORD PRESENCE // HORIZON'S DEV LOUNGE",
    title: "IDLE IN SAKURA NIGHT",
    meta: "NO ACTIVE APP RIGHT NOW · THEME: PIXEL SAKURA",
    accent: "#f472b6",
  };
}

async function fetchLanyardPresence(userId) {
  const response = await fetch(
    `https://api.lanyard.rest/v1/users/${encodeURIComponent(userId)}`
  );
  if (!response.ok) {
    throw new Error(`Lanyard API failed with HTTP ${response.status}`);
  }
  const payload = await response.json();
  if (!payload.success || !payload.data) {
    throw new Error("Lanyard returned an unsuccessful response.");
  }
  return payload.data;
}

function buildSvg(data) {
  const statusCfg = getStatusConfig(data.discord_status);
  const activity = pickPrimaryActivity(data);
  const username = truncate(
    data.discord_user?.global_name || data.discord_user?.username || "Horizon",
    24
  );

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 170" width="100%" height="170" shape-rendering="crispEdges">
  <defs>
    <linearGradient id="dc-bg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#12061c" />
      <stop offset="50%" stop-color="#240b33" />
      <stop offset="100%" stop-color="#12061c" />
    </linearGradient>
    <style>
      .pulse {
        animation: statusPulse 2.4s steps(2, end) infinite;
      }
      .petal {
        animation: dcPetal 5.8s linear infinite;
      }
      .p2 { animation-delay: -1.6s; animation-duration: 6.7s; }
      .p3 { animation-delay: -3.1s; animation-duration: 5.2s; }
      @keyframes statusPulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.35; }
      }
      @keyframes dcPetal {
        0% { transform: translate(0px, -18px); opacity: 0; }
        15% { opacity: 0.9; }
        85% { opacity: 0.85; }
        100% { transform: translate(-36px, 180px); opacity: 0; }
      }
    </style>
  </defs>

  <rect width="1200" height="170" fill="url(#dc-bg)" />
  <rect x="16" y="12" width="1168" height="146" fill="#180826" stroke="#ec4899" stroke-width="4" />
  <rect x="24" y="20" width="1152" height="130" fill="#12051d" stroke="#831843" stroke-width="2" />

  <rect x="52" y="42" width="86" height="86" fill="#2b0e3d" stroke="#f472b6" stroke-width="4" />
  <rect x="68" y="58" width="54" height="54" fill="#3b1254" />
  <rect x="87" y="68" width="16" height="8" fill="#fbcfe8" />
  <rect x="91" y="64" width="8" height="16" fill="#f472b6" />
  <rect x="79" y="84" width="32" height="12" fill="#ec4899" />
  <rect x="87" y="80" width="16" height="20" fill="#f9a8d4" />

  <g class="pulse">
    <rect x="124" y="114" width="20" height="20" fill="#12051d" />
    <rect x="128" y="118" width="12" height="12" fill="${statusCfg.color}" />
  </g>

  <text x="168" y="62" fill="${activity.accent}" font-size="14" font-family="monospace" letter-spacing="2">
    ${escapeXml(activity.kicker)}
  </text>
  <text x="168" y="96" fill="#ffffff" font-size="24" font-weight="bold" font-family="monospace" letter-spacing="2">
    ${escapeXml(activity.title)}
  </text>
  <text x="168" y="124" fill="#fbcfe8" font-size="14" font-family="monospace" letter-spacing="1">
    ${escapeXml(`${username.toUpperCase()} · ${statusCfg.label} · ${activity.meta}`)}
  </text>

  <rect x="1020" y="34" width="130" height="8" fill="#3b1254" />
  <rect x="1060" y="42" width="80" height="6" fill="#2b0e3d" />
  <rect x="1028" y="28" width="14" height="8" fill="#fbcfe8" />
  <rect x="1032" y="24" width="6" height="16" fill="#f472b6" />
  <rect x="1084" y="36" width="14" height="8" fill="#f9a8d4" />
  <rect x="1088" y="32" width="6" height="16" fill="#ec4899" />
  <rect x="1128" y="28" width="14" height="8" fill="#fbcfe8" />
  <rect x="1132" y="24" width="6" height="16" fill="#ffffff" />

  <g class="petal">
    <rect x="780" y="12" width="12" height="6" fill="#f9a8d4" />
    <rect x="783" y="10" width="6" height="10" fill="#ffffff" />
  </g>
  <g class="petal p2">
    <rect x="920" y="12" width="12" height="6" fill="#f472b6" />
    <rect x="923" y="10" width="6" height="10" fill="#fbcfe8" />
  </g>
  <g class="petal p3">
    <rect x="1060" y="12" width="12" height="6" fill="#ec4899" />
    <rect x="1063" y="10" width="6" height="10" fill="#ffffff" />
  </g>
</svg>
`;
}

async function main() {
  const data = await fetchLanyardPresence(DISCORD_USER_ID);
  const svgContent = buildSvg(data);
  await fs.writeFile(OUTPUT_PATH, svgContent, "utf8");
  console.log("Updated discord-sakura-card.svg successfully.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
