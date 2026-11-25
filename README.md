# ORBITAL DEFENSE

Current playable build: **Version 4.2 — Power-Up Expansion**.

## Play online
Open the GitHub Pages site: https://birincimustafa34-wq.github.io/Orbital-Defense/

The root launcher loads the versioned, compressed, self-contained game in the browser. No installation or third-party game libraries are required. A modern browser with the `DecompressionStream` API is recommended.

## Version 4.2 — Power-Up Expansion

### Temporary power-ups
- **Triple Shot (9 seconds):** affects the Pulse Blaster. Replaces its normal two 1-damage bolts (2 total damage per volley) with one forward 3-damage bolt and two smaller rear 0.5-damage bolts (4 total damage per volley).
- **Auto Turret (12 seconds):** mounts a small auxiliary turret above the ship. It fires independently every 0.51 seconds (one third of the Pulse Blaster's normal 0.17-second volley cadence). Each support shot deals 0.5 damage and gently steers toward the nearest visible enemy.
- Capsules appear periodically during a run and can also drop from destroyed enemies. Move into a capsule to collect it; no extra button is required.
- The two effects have independent timers and can be active at the same time. Re-collecting an active type extends its remaining duration, up to a safety cap.

### Existing combat systems
- Endless wave-based survival with escalating enemy pressure.
- Carriers deploy support drones; Phantoms periodically cloak; Destroyers absorb more damage; boss ships use heavier attack patterns.
- Pulse Blaster, Plasma Cannon, and limited Homing Missiles.
- **Shield Burst:** press X or tap SHIELD to absorb incoming projectiles and prevent hull-collision damage for 1.25 seconds. Cooldown: 8.5 seconds.
- Personal best score is stored locally in the player's browser.
- The game pauses when the browser tab is hidden or loses focus; held movement/fire inputs are cleared.

### Performance safeguards
- Capped enemies (32), player shots (90), enemy shots (100), particles (180), missiles (12), and power-up capsules (3).
- Static nebula backdrop generation, a device-pixel-ratio cap, no per-frame blur/shadow filters, and HUD refresh throttled to approximately 8–9 times per second.
- Canvas-based rendering with no external game libraries.

## Controls

| Action | Input |
|---|---|
| Move | WASD or Arrow keys; mobile virtual joystick |
| Fire | Space or click / hold; mobile FIRE button |
| Switch weapon | 1 / 2 / 3; mobile weapon buttons |
| Shield Burst | X; mobile SHIELD button |
| Collect power-ups | Move the ship into a drifting capsule |
| Pause / resume | P or Escape |
| Restart after game over | R |

## Run locally
Download `orbital-defense-v4-2-power-up-expansion.html.gz`, extract it with a gzip-compatible utility (for example, 7-Zip), and open the extracted HTML file in a modern browser.

## Project structure
- `index.html` — GitHub Pages launcher for the compressed game build.
- `orbital-defense-v4-2-power-up-expansion.html.gz` — compressed, standalone Version 4.2 game HTML.
- `orbital-defense-v4-combat-expansion.html.gz` — retained Version 4.0 archive from the initial reconstruction.

## Upgrade-system roadmap
The temporary power-up system is intentionally separate from permanent progression. A future **Hangar / Upgrade Bay** can add persistent credits, upgrade tiers, costs, and unlockable ship improvements without conflating run-only bonuses with permanent upgrades. That permanent upgrade menu is planned but is not active in this release.
