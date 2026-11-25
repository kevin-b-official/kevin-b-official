import fs from "node:fs/promises";
import path from "node:path";

const files = {
    "sakura-scene.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 380" width="100%" height="380" shape-rendering="crispEdges">
  <defs>
    <linearGradient id="night-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#090510" />
      <stop offset="50%" stop-color="#1e0d2e" />
      <stop offset="100%" stop-color="#3d1542" />
    </linearGradient>

    <linearGradient id="water-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a0b26" />
      <stop offset="100%" stop-color="#090510" />
    </linearGradient>

    <g id="pixel-petal">
      <rect x="12" y="0" width="12" height="6" fill="#fce7f3" />
      <rect x="6" y="6" width="24" height="6" fill="#f9a8d4" />
      <rect x="0" y="12" width="36" height="6" fill="#f472b6" />
      <rect x="6" y="18" width="24" height="6" fill="#ec4899" />
      <rect x="12" y="24" width="12" height="6" fill="#db2777" />
      <rect x="15" y="12" width="6" height="6" fill="#ffffff" />
    </g>

    <g id="sakura-cluster">
      <rect x="8" y="0" width="8" height="8" fill="#fbcfe8" />
      <rect x="0" y="8" width="8" height="8" fill="#f9a8d4" />
      <rect x="16" y="8" width="8" height="8" fill="#f472b6" />
      <rect x="8" y="8" width="8" height="8" fill="#ffffff" />
      <rect x="4" y="16" width="8" height="8" fill="#ec4899" />
      <rect x="12" y="16" width="8" height="8" fill="#db2777" />
    </g>

    <g id="pixel-lantern">
      <rect x="0" y="28" width="24" height="6" fill="#3b1548" />
      <rect x="8" y="14" width="8" height="14" fill="#2a0e36" />
      <rect x="4" y="6" width="16" height="8" fill="#f9a8d4" fill-opacity="0.3" />
      <rect x="8" y="8" width="8" height="4" fill="#fde047" />
      <rect x="0" y="2" width="24" height="4" fill="#581c6b" />
      <rect x="6" y="0" width="12" height="2" fill="#581c6b" />
    </g>

    <g id="pixel-horizon">
      <rect x="284" y="114" width="8" height="56" fill="#ffffff" />
      <rect x="308" y="114" width="8" height="56" fill="#ffffff" />
      <rect x="292" y="138" width="16" height="8" fill="#f9a8d4" />
      <rect x="348" y="114" width="16" height="8" fill="#ffffff" />
      <rect x="348" y="162" width="16" height="8" fill="#ffffff" />
      <rect x="340" y="122" width="8" height="40" fill="#ffffff" />
      <rect x="364" y="122" width="8" height="40" fill="#ffffff" />
      <rect x="396" y="114" width="8" height="56" fill="#ffffff" />
      <rect x="404" y="114" width="16" height="8" fill="#ffffff" />
      <rect x="420" y="122" width="8" height="16" fill="#ffffff" />
      <rect x="404" y="138" width="16" height="8" fill="#f9a8d4" />
      <rect x="412" y="146" width="8" height="8" fill="#ffffff" />
      <rect x="420" y="154" width="8" height="16" fill="#ffffff" />
      <rect x="452" y="114" width="24" height="8" fill="#ffffff" />
      <rect x="460" y="122" width="8" height="40" fill="#ffffff" />
      <rect x="452" y="162" width="24" height="8" fill="#ffffff" />
      <rect x="500" y="114" width="32" height="8" fill="#ffffff" />
      <rect x="524" y="122" width="8" height="8" fill="#ffffff" />
      <rect x="516" y="130" width="8" height="8" fill="#f9a8d4" />
      <rect x="508" y="138" width="8" height="16" fill="#ffffff" />
      <rect x="500" y="154" width="8" height="8" fill="#ffffff" />
      <rect x="500" y="162" width="32" height="8" fill="#ffffff" />
      <rect x="564" y="114" width="16" height="8" fill="#ffffff" />
      <rect x="564" y="162" width="16" height="8" fill="#ffffff" />
      <rect x="556" y="122" width="8" height="40" fill="#ffffff" />
      <rect x="580" y="122" width="8" height="40" fill="#ffffff" />
      <rect x="612" y="114" width="8" height="56" fill="#ffffff" />
      <rect x="636" y="114" width="8" height="56" fill="#ffffff" />
      <rect x="620" y="122" width="8" height="16" fill="#f9a8d4" />
      <rect x="628" y="138" width="8" height="16" fill="#f9a8d4" />
    </g>

    <style>
      .scene-petal {
        animation-name: scenePetalFall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      .sp1 { animation-duration: 7.5s; animation-delay: 0s; }
      .sp2 { animation-duration: 9.2s; animation-delay: -1.4s; }
      .sp3 { animation-duration: 6.8s; animation-delay: -2.7s; }
      .sp4 { animation-duration: 8.6s; animation-delay: -4.1s; }
      .sp5 { animation-duration: 10.0s; animation-delay: -2.2s; }
      .sp6 { animation-duration: 7.9s; animation-delay: -5.3s; }
      .sp7 { animation-duration: 8.9s; animation-delay: -1.1s; }
      .sp8 { animation-duration: 6.5s; animation-delay: -3.6s; }
      .sp9 { animation-duration: 9.5s; animation-delay: -4.8s; }
      .sp10 { animation-duration: 7.3s; animation-delay: -2.5s; }
      .sp11 { animation-duration: 8.4s; animation-delay: -1.8s; }
      .sp12 { animation-duration: 6.9s; animation-delay: -4.5s; }
      .sp13 { animation-duration: 9.1s; animation-delay: -3.1s; }
      .sp14 { animation-duration: 7.7s; animation-delay: -5.7s; }

      @keyframes scenePetalFall {
        0% { transform: translate(0px, -40px); opacity: 0; }
        10% { opacity: 0.95; }
        50% { transform: translate(-58px, 175px); opacity: 0.9; }
        90% { opacity: 0.85; }
        100% { transform: translate(-116px, 395px); opacity: 0; }
      }
    </style>
  </defs>

  <rect width="1200" height="285" fill="url(#night-sky)" />

  <rect x="210" y="34" width="6" height="6" fill="#fbcfe8" />
  <rect x="330" y="54" width="4" height="4" fill="#ffffff" />
  <rect x="520" y="26" width="6" height="6" fill="#f9a8d4" />
  <rect x="740" y="42" width="4" height="4" fill="#ffffff" />
  <rect x="850" y="22" width="6" height="6" fill="#fbcfe8" />
  <rect x="1080" y="56" width="6" height="6" fill="#ffffff" />

  <rect x="944" y="34" width="64" height="64" fill="#fff1f2" />
  <rect x="936" y="42" width="8" height="48" fill="#ffe4e6" />
  <rect x="1008" y="42" width="8" height="48" fill="#ffe4e6" />
  <rect x="952" y="26" width="48" height="8" fill="#ffe4e6" />
  <rect x="952" y="98" width="48" height="8" fill="#ffe4e6" />

  <rect x="0" y="220" width="1200" height="65" fill="#170a24" />
  <rect x="80" y="190" width="180" height="30" fill="#170a24" />
  <rect x="120" y="166" width="100" height="24" fill="#170a24" />
  <rect x="460" y="182" width="240" height="38" fill="#1d0d2c" />
  <rect x="510" y="156" width="140" height="26" fill="#1d0d2c" />

  <g fill="#2a1038">
    <rect x="1010" y="225" width="90" height="60" />
    <rect x="990" y="215" width="130" height="10" />
    <rect x="1020" y="185" width="70" height="30" />
    <rect x="1000" y="175" width="110" height="10" />
    <rect x="1030" y="149" width="50" height="26" />
    <rect x="1012" y="139" width="86" height="10" />
    <rect x="1051" y="113" width="8" height="26" />
  </g>

  <g fill="#581858">
    <rect x="64" y="178" width="96" height="10" />
    <rect x="72" y="192" width="80" height="8" />
    <rect x="86" y="200" width="10" height="85" />
    <rect x="128" y="200" width="10" height="85" />
    <rect x="107" y="216" width="10" height="8" />
  </g>

  <g fill="#2b112f">
    <rect x="1050" y="0" width="150" height="14" />
    <rect x="940" y="14" width="130" height="12" />
    <rect x="850" y="26" width="100" height="10" />
    <rect x="1015" y="26" width="18" height="38" />
  </g>
  <use href="#sakura-cluster" x="845" y="18" />
  <use href="#sakura-cluster" x="915" y="6" />
  <use href="#sakura-cluster" x="980" y="14" />
  <use href="#sakura-cluster" x="1004" y="46" />
  <use href="#sakura-cluster" x="1085" y="8" />
  <use href="#sakura-cluster" x="1145" y="22" />

  <g fill="#2b112f">
    <rect x="0" y="0" width="140" height="14" />
    <rect x="110" y="14" width="110" height="10" />
    <rect x="76" y="24" width="16" height="28" />
  </g>
  <use href="#sakura-cluster" x="18" y="12" />
  <use href="#sakura-cluster" x="68" y="38" />
  <use href="#sakura-cluster" x="135" y="8" />
  <use href="#sakura-cluster" x="195" y="16" />

  <use href="#pixel-lantern" x="210" y="251" />
  <use href="#pixel-lantern" x="955" y="251" />

  <rect x="0" y="285" width="1200" height="95" fill="url(#water-grad)" />
  <rect x="0" y="285" width="1200" height="4" fill="#f472b6" fill-opacity="0.4" />
  <rect x="948" y="304" width="56" height="6" fill="#fce7f3" fill-opacity="0.20" />
  <rect x="958" y="320" width="36" height="6" fill="#f9a8d4" fill-opacity="0.15" />
  <rect x="214" y="306" width="16" height="4" fill="#fde047" fill-opacity="0.22" />
  <rect x="959" y="306" width="16" height="4" fill="#fde047" fill-opacity="0.22" />

  <g>
    <rect x="440" y="282" width="320" height="8" fill="#6b1d5c" />
    <rect x="470" y="274" width="260" height="8" fill="#83246e" />
    <rect x="510" y="268" width="180" height="6" fill="#9d2b82" />
    <rect x="456" y="258" width="6" height="24" fill="#be185d" />
    <rect x="520" y="250" width="6" height="24" fill="#be185d" />
    <rect x="597" y="246" width="6" height="24" fill="#be185d" />
    <rect x="674" y="250" width="6" height="24" fill="#be185d" />
    <rect x="738" y="258" width="6" height="24" fill="#be185d" />
    <rect x="456" y="258" width="68" height="4" fill="#f472b6" />
    <rect x="520" y="250" width="83" height="4" fill="#f472b6" />
    <rect x="597" y="246" width="83" height="4" fill="#f472b6" />
    <rect x="674" y="250" width="70" height="4" fill="#f472b6" />
    <rect x="480" y="290" width="10" height="20" fill="#3b1038" />
    <rect x="710" y="290" width="10" height="20" fill="#3b1038" />
  </g>

  <text x="464" y="90" text-anchor="middle" fill="#f9a8d4" font-size="18" font-family="'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'Meiryo', monospace" letter-spacing="8">
    地平線 · ホライズン
  </text>
  <use href="#pixel-horizon" />
  <text x="464" y="198" text-anchor="middle" fill="#fbcfe8" font-size="14" font-family="'Courier New', Courier, monospace" letter-spacing="3">
    PIXEL REALM // SAKURA &amp; CODE
  </text>

  <g class="scene-petal sp1"><use href="#pixel-petal" x="110" y="0" transform="scale(0.75)" /></g>
  <g class="scene-petal sp2"><use href="#pixel-petal" x="320" y="0" transform="scale(0.65)" /></g>
  <g class="scene-petal sp3"><use href="#pixel-petal" x="540" y="0" transform="scale(0.80)" /></g>
  <g class="scene-petal sp4"><use href="#pixel-petal" x="780" y="0" transform="scale(0.60)" /></g>
  <g class="scene-petal sp5"><use href="#pixel-petal" x="1020" y="0" transform="scale(0.70)" /></g>
  <g class="scene-petal sp6"><use href="#pixel-petal" x="1280" y="0" transform="scale(0.65)" /></g>
  <g class="scene-petal sp7"><use href="#pixel-petal" x="1520" y="0" transform="scale(0.75)" /></g>
  <g class="scene-petal sp8"><use href="#pixel-petal" x="1760" y="0" transform="scale(0.60)" /></g>
  <g class="scene-petal sp9"><use href="#pixel-petal" x="450" y="0" transform="scale(0.70)" /></g>
  <g class="scene-petal sp10"><use href="#pixel-petal" x="920" y="0" transform="scale(0.65)" /></g>
  <g class="scene-petal sp11"><use href="#pixel-petal" x="1420" y="0" transform="scale(0.70)" /></g>
  <g class="scene-petal sp12"><use href="#pixel-petal" x="1680" y="0" transform="scale(0.65)" /></g>
  <g class="scene-petal sp13"><use href="#pixel-petal" x="680" y="0" transform="scale(0.75)" /></g>
  <g class="scene-petal sp14"><use href="#pixel-petal" x="1180" y="0" transform="scale(0.60)" /></g>
</svg>
`,

    "sakura-section.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 64" width="100%" height="64" shape-rendering="crispEdges">
  <defs>
    <linearGradient id="sec-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0d0414" />
      <stop offset="50%" stop-color="#260c36" />
      <stop offset="100%" stop-color="#0d0414" />
    </linearGradient>
    <style>
      .sp-dot {
        animation: driftX 5.5s linear infinite;
      }
      .d2 { animation-delay: -1.8s; animation-duration: 6.4s; }
      .d3 { animation-delay: -3.4s; animation-duration: 4.9s; }
      @keyframes driftX {
        0% { transform: translate(0px, -10px); opacity: 0; }
        20% { opacity: 0.9; }
        80% { opacity: 0.85; }
        100% { transform: translate(-45px, 68px); opacity: 0; }
      }
    </style>
  </defs>

  <rect width="1200" height="64" fill="url(#sec-grad)" />
  <rect x="0" y="0" width="1200" height="3" fill="#ec4899" />
  <rect x="0" y="61" width="1200" height="3" fill="#831843" />

  <rect x="24" y="24" width="16" height="8" fill="#f472b6" />
  <rect x="28" y="20" width="8" height="16" fill="#fbcfe8" />
  <rect x="52" y="34" width="12" height="6" fill="#ec4899" />

  <rect x="1160" y="24" width="16" height="8" fill="#f472b6" />
  <rect x="1164" y="20" width="8" height="16" fill="#fbcfe8" />
  <rect x="1136" y="34" width="12" height="6" fill="#ec4899" />

  <rect x="84" y="31" width="420" height="2" fill="#f472b6" />
  <rect x="696" y="31" width="420" height="2" fill="#f472b6" />

  <g class="sp-dot">
    <rect x="320" y="4" width="10" height="6" fill="#f9a8d4" />
    <rect x="323" y="2" width="4" height="10" fill="#ffffff" />
  </g>
  <g class="sp-dot d2">
    <rect x="610" y="4" width="10" height="6" fill="#f472b6" />
    <rect x="613" y="2" width="4" height="10" fill="#fbcfe8" />
  </g>
  <g class="sp-dot d3">
    <rect x="910" y="4" width="10" height="6" fill="#ec4899" />
    <rect x="913" y="2" width="4" height="10" fill="#ffffff" />
  </g>
</svg>
`,

    "footer-sakura.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 180" width="100%" height="180" shape-rendering="crispEdges">
  <defs>
    <linearGradient id="footer-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2c0e3d" />
      <stop offset="100%" stop-color="#09040f" />
    </linearGradient>
    <style>
      .petal {
        animation: fall 6.5s linear infinite;
      }
      .p2 { animation-delay: -1.8s; animation-duration: 7.4s; }
      .p3 { animation-delay: -3.2s; animation-duration: 5.9s; }
      .p4 { animation-delay: -4.5s; animation-duration: 7.0s; }
      @keyframes fall {
        0% { transform: translateY(-20px); opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translateY(190px); opacity: 0; }
      }
    </style>
  </defs>

  <rect width="1200" height="180" fill="url(#footer-grad)" />
  <rect x="0" y="0" width="1200" height="4" fill="#f472b6" />
  <rect x="0" y="140" width="1200" height="40" fill="#0d0517" />

  <rect x="130" y="130" width="36" height="10" fill="#3b1548" />
  <rect x="142" y="102" width="12" height="28" fill="#2b0f36" />
  <rect x="136" y="86" width="24" height="16" fill="#fde047" />
  <rect x="124" y="78" width="48" height="8" fill="#4c195c" />

  <rect x="1034" y="130" width="36" height="10" fill="#3b1548" />
  <rect x="1046" y="102" width="12" height="28" fill="#2b0f36" />
  <rect x="1040" y="86" width="24" height="16" fill="#fde047" />
  <rect x="1028" y="78" width="48" height="8" fill="#4c195c" />

  <text x="600" y="68" text-anchor="middle" fill="#f9a8d4" font-size="16" font-family="monospace" letter-spacing="4">
    桜の夜 · HORIZON
  </text>
  <text x="600" y="96" text-anchor="middle" fill="#fbcfe8" font-size="13" font-family="monospace" letter-spacing="2">
    PIXEL AND SAKURA EDITION
  </text>

  <g class="petal">
    <rect x="240" y="10" width="14" height="8" fill="#f472b6" />
    <rect x="244" y="6" width="6" height="16" fill="#fbcfe8" />
  </g>
  <g class="petal p2">
    <rect x="480" y="10" width="14" height="8" fill="#f9a8d4" />
    <rect x="484" y="6" width="6" height="16" fill="#ffffff" />
  </g>
  <g class="petal p3">
    <rect x="720" y="10" width="14" height="8" fill="#ec4899" />
    <rect x="724" y="6" width="6" height="16" fill="#fbcfe8" />
  </g>
  <g class="petal p4">
    <rect x="920" y="10" width="14" height="8" fill="#f472b6" />
    <rect x="924" y="6" width="6" height="16" fill="#ffffff" />
  </g>
</svg>
`,

    "discord-sakura-card.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 170" width="100%" height="170" shape-rendering="crispEdges">
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
    <rect x="128" y="118" width="12" height="12" fill="#f472b6" />
  </g>

  <text x="168" y="64" fill="#f9a8d4" font-size="14" font-family="monospace" letter-spacing="3">
    DISCORD PRESENCE // HORIZON&apos;S DEV LOUNGE
  </text>
  <text x="168" y="96" fill="#ffffff" font-size="24" font-weight="bold" font-family="monospace" letter-spacing="2">
    BUILDING &amp; CODING IN SAKURA NIGHT
  </text>
  <text x="168" y="124" fill="#fbcfe8" font-size="14" font-family="monospace" letter-spacing="1">
    STATUS: ONLINE  |  TYPE: CODE &amp; LOFI  |  THEME: PIXEL SAKURA
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
`,

    "scripts/update-discord-card.mjs": `import fs from "node:fs/promises";
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
  return \`\${clean.slice(0, maxLength - 1)}…\`;
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
      title: truncate(\`\${data.spotify.song} — \${artist}\`, 44),
      meta: truncate(\`ALBUM: \${data.spotify.album || "Unknown"}\`, 58),
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
      kicker: \`\${kickerPrefix} // HORIZON'S DEV LOUNGE\`,
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
    \`https://api.lanyard.rest/v1/users/\${encodeURIComponent(userId)}\`
  );
  if (!response.ok) {
    throw new Error(\`Lanyard API failed with HTTP \${response.status}\`);
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

  return \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 170" width="100%" height="170" shape-rendering="crispEdges">
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
    <rect x="128" y="118" width="12" height="12" fill="\${statusCfg.color}" />
  </g>

  <text x="168" y="62" fill="\${activity.accent}" font-size="14" font-family="monospace" letter-spacing="2">
    \${escapeXml(activity.kicker)}
  </text>
  <text x="168" y="96" fill="#ffffff" font-size="24" font-weight="bold" font-family="monospace" letter-spacing="2">
    \${escapeXml(activity.title)}
  </text>
  <text x="168" y="124" fill="#fbcfe8" font-size="14" font-family="monospace" letter-spacing="1">
    \${escapeXml(\`\${username.toUpperCase()} · \${statusCfg.label} · \${activity.meta}\`)}
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
\`;
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
`,

    ".github/workflows/discord-activity.yml": `name: Update Discord Sakura Card

on:
  schedule:
    - cron: "*/15 * * * *"
  workflow_dispatch:

permissions:
  contents: write

jobs:
  update-card:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Fetch Lanyard presence and render SVG
        env:
          DISCORD_USER_ID: \${{ secrets.DISCORD_USER_ID }}
        run: node scripts/update-discord-card.mjs

      - name: Commit and push if SVG changed
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add discord-sakura-card.svg
          if git diff --staged --quiet; then
            echo "No changes to discord-sakura-card.svg."
          else
            git commit -m "chore: update discord sakura activity card"
            git push
          fi
`,

    "README.md": `![Pixel Sakura Scene](./sakura-scene.svg)

<div align="center">
  <a href="https://horizov.site">
    <img src="https://img.shields.io/badge/PORTFOLIO-horizov.site-1a0924?style=flat-square&logo=vercel&logoColor=f472b6&labelColor=1a0924" alt="Website" />
  </a>
  <a href="https://discord.com">
    <img src="https://img.shields.io/badge/DISCORD-Horizon%27s%20Dev%20Lounge-1a0924?style=flat-square&logo=discord&logoColor=f472b6&labelColor=1a0924" alt="Discord" />
  </a>
  <a href="https://x.com">
    <img src="https://img.shields.io/badge/X-@horizon-1a0924?style=flat-square&logo=x&logoColor=f472b6&labelColor=1a0924" alt="X" />
  </a>
  <a href="mailto:contact@horizov.site">
    <img src="https://img.shields.io/badge/EMAIL-contact@horizov.site-1a0924?style=flat-square&logo=gmail&logoColor=f472b6&labelColor=1a0924" alt="Email" />
  </a>
  <br />
  <img src="https://img.shields.io/badge/LOCATION-Germany-1a0924?style=flat-square&logo=googlemaps&logoColor=f472b6&labelColor=1a0924" alt="Location" />
  <img src="https://komarev.com/ghpvc/?username=kevin-b-official&style=flat-square&color=ec4899&label=PROFILE+VIEWS" alt="Profile Views" />
</div>

![Sakura Drift](./sakura-rain.svg)

<!-- 2-COLUMN PIXEL INTRO & CURRENT FOCUS -->
<table>
  <tr>
    <td width="55%" valign="top">
      <h3>
        <img src="https://api.iconify.design/pixelarticons/terminal.svg?color=%23f472b6" width="22" height="22" align="absmiddle" />
        &nbsp;<code>whoami</code> &nbsp;·&nbsp; <sub>自己紹介</sub>
      </h3>
      <p>
        Hey, I'm <b>Horizon</b> — a developer from Germany focused on crafting fast, clean, and user-centric software.
      </p>
      <p>
        From browser extensions and desktop clients to full-stack web applications, I enjoy turning ideas into polished products with modern tooling and sharp UI design.
      </p>
      <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=15&duration=2800&pause=1000&color=F472B6&vCenter=true&width=420&height=30&lines=%3E+TypeScript+%26+React+enthusiast;%3E+Obsessed+with+clean+UI+%26+performance;%3E+Always+shipping+something+new..." alt="Typing Terminal" />
    </td>
    <td width="45%" valign="top">
      <h3>
        <img src="https://api.iconify.design/pixelarticons/zap.svg?color=%23f472b6" width="22" height="22" align="absmiddle" />
        &nbsp;Current Focus &nbsp;·&nbsp; <sub>現在の目標</sub>
      </h3>
      <p>
        <img src="https://api.iconify.design/pixelarticons/volume-3.svg?color=%23ec4899" width="18" height="18" align="absmiddle" />&nbsp;&nbsp;Building &amp; refining <b>LofiHaven</b> ecosystem<br />
        <img src="https://api.iconify.design/pixelarticons/sliders.svg?color=%23ec4899" width="18" height="18" align="absmiddle" />&nbsp;&nbsp;Maintaining <b>Blobgame.io</b> browser tools<br />
        <img src="https://api.iconify.design/pixelarticons/layers.svg?color=%23ec4899" width="18" height="18" align="absmiddle" />&nbsp;&nbsp;Full-stack architectures with <b>Next.js &amp; Supabase</b><br />
        <img src="https://api.iconify.design/pixelarticons/sparkles.svg?color=%23ec4899" width="18" height="18" align="absmiddle" />&nbsp;&nbsp;Designing minimalist, high-speed interfaces
      </p>
    </td>
  </tr>
</table>

![Discord Sakura Activity](./discord-sakura-card.svg)

![Sakura Section](./sakura-section.svg)

<!-- FEATURED REPOSITORIES -->
<h3>
  <img src="https://api.iconify.design/pixelarticons/folder.svg?color=%23f472b6" width="22" height="22" align="absmiddle" />
  &nbsp;Featured Repositories &nbsp;·&nbsp; <sub>プロジェクト</sub>
</h3>

<div align="center">
  <a href="https://github.com/kevin-b-official/Blobgame.io-Official-Web-Extension">
    <img width="48%" src="https://github-readme-stats.vercel.app/api/pin/?username=kevin-b-official&repo=Blobgame.io-Official-Web-Extension&bg_color=1a0924&border_color=f472b6&title_color=f9a8d4&icon_color=f472b6&text_color=fbcfe8" alt="Blobgame Extension" />
  </a>
  <a href="https://github.com/kevin-b-official/lofihaven-desktop-app">
    <img width="48%" src="https://github-readme-stats.vercel.app/api/pin/?username=kevin-b-official&repo=lofihaven-desktop-app&bg_color=1a0924&border_color=f472b6&title_color=f9a8d4&icon_color=f472b6&text_color=fbcfe8" alt="LofiHaven Desktop" />
  </a>
  <br />
  <a href="https://github.com/kevin-b-official/lofihaven-translations">
    <img width="48%" src="https://github-readme-stats.vercel.app/api/pin/?username=kevin-b-official&repo=lofihaven-translations&bg_color=1a0924&border_color=f472b6&title_color=f9a8d4&icon_color=f472b6&text_color=fbcfe8" alt="LofiHaven Translations" />
  </a>
  <a href="https://github.com/kevin-b-official/-JIN2-ASCII">
    <img width="48%" src="https://github-readme-stats.vercel.app/api/pin/?username=kevin-b-official&repo=-JIN2-ASCII&bg_color=1a0924&border_color=f472b6&title_color=f9a8d4&icon_color=f472b6&text_color=fbcfe8" alt="-JIN2-ASCII" />
  </a>
</div>

![Sakura Drift](./sakura-rain.svg)

![Sakura Section](./sakura-section.svg)

<!-- TECH STACK -->
<h3>
  <img src="https://api.iconify.design/pixelarticons/cpu.svg?color=%23f472b6" width="22" height="22" align="absmiddle" />
  &nbsp;Tech Stack &amp; Tools &nbsp;·&nbsp; <sub>技術スタック</sub>
</h3>

<div align="center">

| Category | Technologies |
| :--- | :--- |
| **Languages** | ![TypeScript](https://img.shields.io/badge/TypeScript-1a0924?style=flat-square&logo=typescript&logoColor=3178C6) ![JavaScript](https://img.shields.io/badge/JavaScript-1a0924?style=flat-square&logo=javascript&logoColor=F7DF1E) |
| **Frontend** | ![React](https://img.shields.io/badge/React-1a0924?style=flat-square&logo=react&logoColor=61DAFB) ![Next.js](https://img.shields.io/badge/Next.js-1a0924?style=flat-square&logo=nextdotjs&logoColor=white) ![Vue.js](https://img.shields.io/badge/Vue.js-1a0924?style=flat-square&logo=vuedotjs&logoColor=4FC08D) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-1a0924?style=flat-square&logo=tailwindcss&logoColor=06B6D4) ![Vite](https://img.shields.io/badge/Vite-1a0924?style=flat-square&logo=vite&logoColor=646CFF) |
| **Backend & DB** | ![Node.js](https://img.shields.io/badge/Node.js-1a0924?style=flat-square&logo=nodedotjs&logoColor=339933) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-1a0924?style=flat-square&logo=postgresql&logoColor=4169E1) ![MongoDB](https://img.shields.io/badge/MongoDB-1a0924?style=flat-square&logo=mongodb&logoColor=47A248) ![Supabase](https://img.shields.io/badge/Supabase-1a0924?style=flat-square&logo=supabase&logoColor=3FCF8E) |
| **DevOps & Cloud** | ![Vercel](https://img.shields.io/badge/Vercel-1a0924?style=flat-square&logo=vercel&logoColor=white) ![Git](https://img.shields.io/badge/Git-1a0924?style=flat-square&logo=git&logoColor=F05032) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-1a0924?style=flat-square&logo=githubactions&logoColor=2088FF) |

</div>

![Sakura Section](./sakura-section.svg)

<!-- ANALYTICS DASHBOARD -->
<h3>
  <img src="https://api.iconify.design/pixelarticons/chart.svg?color=%23f472b6" width="22" height="22" align="absmiddle" />
  &nbsp;GitHub Telemetry &nbsp;·&nbsp; <sub>アクティビティ</sub>
</h3>

<div align="center">
  <img height="170" src="https://github-readme-stats.vercel.app/api?username=kevin-b-official&show_icons=true&bg_color=1a0924&border_color=f472b6&title_color=f9a8d4&icon_color=f472b6&text_color=fbcfe8" alt="GitHub Stats" />
  <img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=kevin-b-official&layout=compact&bg_color=1a0924&border_color=f472b6&title_color=f9a8d4&text_color=fbcfe8" alt="Top Languages" />
  <br />
  <img src="https://streak-stats.demolab.com?user=kevin-b-official&background=1a0924&border=f472b6&ring=ec4899&fire=f472b6&currStreakLabel=f9a8d4&sideLabels=f5d0fe&currStreakNum=ffffff&sideNums=ffffff&dates=f472b6" alt="GitHub Streak" />
</div>

![Sakura Drift](./sakura-rain.svg)

<!-- CONTRIBUTION SNAKE -->
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kevin-b-official/kevin-b-official/output/github-contribution-grid-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/kevin-b-official/kevin-b-official/output/github-contribution-grid-snake.svg" />
    <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/kevin-b-official/kevin-b-official/output/github-contribution-grid-snake-dark.svg" />
  </picture>
</div>

![Pixel Sakura Footer](./footer-sakura.svg)
`
};

async function run() {
    const cwd = process.cwd();
    for (const [relativePath, content] of Object.entries(files)) {
        const fullPath = path.join(cwd, relativePath);
        await fs.mkdir(path.dirname(fullPath), { recursive: true });
        await fs.writeFile(fullPath, content.trimStart(), "utf8");
        console.log(`Created: ${relativePath}`);
    }
    console.log("\nAll Sakura profile files are ready!");
}

run().catch((err) => {
    console.error("Failed to create files:", err);
    process.exit(1);
});