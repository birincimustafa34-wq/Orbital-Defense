# ORBITAL DEFENSE

A standalone, browser-based space arcade shooter. The current repository build is **Version 4.0 — Combat Expansion**.

## Play

The repository includes an `index.html` launcher and the compressed standalone game build.

To publish a playable web version with GitHub Pages:
1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch** and select **main** / **/(root)**, or configure GitHub Actions if preferred.
3. Save the settings. Once GitHub Pages finishes publishing, open the site URL shown on that page.

The launcher loads and decompresses the game archive in the browser. It requires a modern browser with the `DecompressionStream` API.

## Run locally

Download `orbital-defense-v4-combat-expansion.html.gz`, extract the gzip file with a compatible utility (for example, 7-Zip), and open the resulting HTML file in a modern browser. No installation or external game libraries are required.

## Version 4.0 — Combat Expansion

- Endless wave-based survival with escalating enemy pressure.
- Enemy classes include Carriers, Phantoms, Destroyers, drones, and boss ships.
- Carriers deploy support drones; Phantoms periodically cloak; Destroyers absorb more damage.
- Weapon options: Pulse Blaster, Plasma Cannon, and limited Homing Missiles.
- Score, wave, kill count, hull integrity, pause, restart, and game-over flow.
- Canvas rendering with capped enemy, projectile, missile, and particle counts; static nebula backdrop generation.

## Controls

| Action | Input |
|---|---|
| Move | WASD or Arrow keys |
| Fire | Space or click / hold |
| Switch weapon | 1 / 2 / 3 |
| Pause / resume | P or Escape |
| Restart after game over | R |

## Project structure

- `index.html` — browser launcher for the compressed game build.
- `orbital-defense-v4-combat-expansion.html.gz` — compressed, standalone Version 4.0 game HTML.

## Development notes

This is a reconstructed Version 4.0 build based on the remembered Combat Expansion specification, not a bit-for-bit recovery of an earlier lost build. The embedded JavaScript passes a Node.js syntax check. Full browser gameplay and device-specific performance testing have not yet been completed.
