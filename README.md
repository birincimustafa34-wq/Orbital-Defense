# ORBITAL DEFENSE

Current playable build: **Version 4.1 — Nebula Defense Update**.

## Play online
Open the GitHub Pages site: https://birincimustafa34-wq.github.io/Orbital-Defense/

The root launcher loads the compressed, self-contained game in the browser. No installation or third-party game libraries are required. A modern browser with the `DecompressionStream` API is recommended.

## Version 4.1 — Nebula Defense Update
- **Shield Burst:** press X or tap SHIELD to absorb enemy projectiles and prevent hull-collision damage for 1.25 seconds. Cooldown: 8.5 seconds.
- **Mobile controls:** virtual movement joystick, hold-to-fire button, weapon selector, and dedicated shield button.
- **Personal best:** best score is saved locally in the browser and shown on the HUD.
- **Safer focus handling:** the game pauses when the browser tab is hidden or loses focus; stuck movement/fire inputs are cleared.
- **Lighter HUD work:** stats refresh at 8–9 updates per second rather than every animation frame.
- **Performance safeguards:** capped entity/particle counts, static nebula generation, and a device-pixel-ratio cap remain in place.

## Version 4.0 — Combat Expansion
- Endless wave-based survival with escalating enemy pressure.
- Carriers deploy support drones; Phantoms periodically cloak; Destroyers absorb more damage.
- Pulse Blaster, Plasma Cannon, and limited Homing Missiles.
- Boss ships, score, wave, kills, hull integrity, pause, restart, and game-over flow.

## Controls
| Action | Input |
|---|---|
| Move | WASD or Arrow keys; mobile virtual joystick |
| Fire | Space or click / hold; mobile FIRE button |
| Switch weapon | 1 / 2 / 3; mobile weapon buttons |
| Shield Burst | X; mobile SHIELD button |
| Pause / resume | P or Escape |
| Restart after game over | R |

## Run locally
Download `orbital-defense-v4-combat-expansion.html.gz`, extract it with a gzip-compatible utility (for example, 7-Zip), and open the extracted HTML file in a modern browser.

## Project structure
- `index.html` — GitHub Pages launcher for the compressed game build.
- `orbital-defense-v4-combat-expansion.html.gz` — compressed, standalone Version 4.1 game HTML.

The original Version 4.0 build has been superseded in the public launcher; the repository history retains earlier revisions.
