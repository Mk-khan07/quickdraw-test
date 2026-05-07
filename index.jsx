function abcd () {
  console.log("hello");
}


/* ═══════════════════════════════════════════════════════════════════
   Footer.module.css  —  Fully isolated CSS Module
   Premium 3D footer with marquee, ring animation, 3D name
   ═══════════════════════════════════════════════════════════════════ */

.footer {
  --f-accent:  #22d3ee;
  --f-purple:  #a78bfa;
  --f-bg:      #04080f;
  --f-surface: rgba(255, 255, 255, 0.028);
  --f-border:  rgba(255, 255, 255, 0.06);
  --f-text:    #e8e4ef;
  --f-muted:   rgba(232, 228, 239, 0.38);

  /* position: relative; */
  width: 100%;
  overflow: hidden;
  background: var(--f-bg);
  padding-top: 0;
  margin:auto;
}

/* ── Background grid ────────────────────────────────────────────── */
.bgGrid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
  mask-image: linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%);
}

/* ── Glow orbs ──────────────────────────────────────────────────── */
.bgGlow1 {
  position: absolute;
  top: -100px;
  left: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}

.bgGlow2 {
  position: absolute;
  bottom: 0;
  right: -80px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}

/* ── Marquee strip ──────────────────────────────────────────────── */
.marqueeSection {
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 20px 0;
  border-top: 1px solid var(--f-border);
  border-bottom: 1px solid var(--f-border);
}

.marqueeTrack {
  overflow: hidden;
  margin: 4px 0;
}

.marqueeInner {
  display: flex;
  gap: 0;
  width: max-content;
  animation: marqueeScroll 28s linear infinite;
}

.marqueeReverse .marqueeInner {
  animation-direction: reverse;
}

@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marqueeItem {
  font-family: "Syne", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.07);
  padding: 0 40px;
  white-space: nowrap;
  flex-shrink: 0;
}

/* ── Divider ────────────────────────────────────────────────────── */
.divider {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 5%;
  position: relative;
  z-index: 1;
}

.dividerLine {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--f-border), transparent);
}

.dividerDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--f-accent);
  box-shadow: 0 0 8px 2px rgba(34,211,238,0.4);
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { box-shadow: 0 0 6px 2px rgba(34,211,238,0.3); }
  50%       { box-shadow: 0 0 16px 4px rgba(34,211,238,0.6); }
}

/* ── Body ───────────────────────────────────────────────────────── */
.body {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.6fr 1fr;
  gap: 48px;
  padding: 64px 5% 48px;
  align-items: start;
}

/* ── Left column ────────────────────────────────────────────────── */
.leftCol {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* 3D Ring */
.ringWrap {
  position: relative;
  width: 140px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ringCanvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 240px;
  pointer-events: none;
  opacity: 0.85;
}

.ringCenter {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ringInitials {
  font-family: "Syne", sans-serif;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(135deg, #fff 30%, var(--f-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.75;
  color: var(--f-muted);
  margin: 0;
}

.socialRow {
  display: flex;
  gap: 10px;
}

.socialBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid var(--f-border);
  border-radius: 4px;
  color: var(--f-muted);
  font-size: 17px;
  text-decoration: none;
  background: var(--f-surface);
  transition: border-color 0.3s, color 0.3s, transform 0.2s, background 0.3s;
}

.socialBtn:hover {
  border-color: rgba(34,211,238,0.4);
  color: var(--f-accent);
  transform: translateY(-3px);
  background: rgba(34,211,238,0.05);
}

.availBadge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid rgba(52, 211, 153, 0.2);
  border-radius: 100px;
  background: rgba(52, 211, 153, 0.06);
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #34d399;
  letter-spacing: 0.5px;
  text-decoration: none;
  width: fit-content;
  transition: border-color 0.3s, background 0.3s;
}

.availBadge:hover {
  border-color: rgba(52,211,153,0.45);
  background: rgba(52,211,153,0.1);
}

.availDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
  animation: availPulse 1.5s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes availPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.7); }
}

/* ── Center column: 3D Big Name ─────────────────────────────────── */
.centerCol {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.bigName {
  text-align: center;
  cursor: default;
  will-change: transform;
  transform-style: preserve-3d;
}

.bigNameTop,
.bigNameBot {
  display: block;
  font-family: "Syne", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -2px;
  line-height: 0.9;
  user-select: none;
}

.bigNameTop {
  font-size: clamp(44px, 6vw, 80px);
  background: linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.25) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Subtle text stroke for depth */
  -webkit-text-stroke: 1px rgba(255,255,255,0.06);
}

.bigNameBot {
  font-size: clamp(44px, 6vw, 80px);
  background: linear-gradient(135deg, var(--f-accent) 0%, var(--f-purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 24px rgba(34,211,238,0.25));
}

/* ── Right column ───────────────────────────────────────────────── */
.rightCol {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.colTitle {
  font-family: "DM Sans", sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.2);
  margin: 0 0 16px;
}

.navLinks {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.navLink {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 0;
  font-family: "Syne", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: var(--f-muted);
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: color 0.3s, padding-left 0.3s;
  letter-spacing: 0.5px;
}

.navLink:last-child { border-bottom: none; }

.navLink:hover {
  color: var(--f-accent);
  padding-left: 8px;
}

.navArrow {
  font-size: 13px;
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: opacity 0.3s, transform 0.3s;
}

.navLink:hover .navArrow {
  opacity: 1;
  transform: translate(0, 0);
}

/* Stack tags */
.stackWrap {}

.stackTags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.stackTag {
  font-family: "DM Sans", sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(34,211,238,0.6);
  border: 1px solid rgba(34,211,238,0.12);
  padding: 4px 10px;
  border-radius: 2px;
  background: rgba(34,211,238,0.03);
  transition: border-color 0.3s, color 0.3s;
}

.stackTag:hover {
  border-color: rgba(34,211,238,0.35);
  color: #fff;
}

/* ── Bottom bar ─────────────────────────────────────────────────── */
.bottom {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 5%;
  border-top: 1px solid var(--f-border);
  gap: 20px;
  flex-wrap: wrap;
}

.bottomLeft,
.bottomCenter,
.bottomRight {
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: rgba(255,255,255,0.2);
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.bottomCenter {
  font-size: 12px;
}

.bottomCenter strong {
  color: rgba(255,255,255,0.4);
  font-weight: 500;
}

.bottomRight {
  opacity: 0.6;
}

/* ── RESPONSIVE ─────────────────────────────────────────────────── */
@media (max-width: 1100px) {
  .body {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
  .centerCol {
    grid-column: 1 / -1;
    order: -1;
    padding: 32px 0 0;
  }
}

@media (max-width: 768px) {
  .body {
    grid-template-columns: 1fr;
    padding: 48px 5% 36px;
    gap: 36px;
  }
  .centerCol { padding: 0; }
  .bigNameTop,
  .bigNameBot { font-size: 52px; letter-spacing: -1px; }
  .bottom {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
  .bottomLeft, .bottomCenter, .bottomRight {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .bigNameTop,
  .bigNameBot { font-size: 38px; }
  .ringCanvas  { width: 180px; height: 180px; }
}


