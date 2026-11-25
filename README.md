# ORBITAL DEFENSE

Current playable build: **Version 5.0 — Hangar & Upgrade Bay**.

## Play
https://birincimustafa34-wq.github.io/Orbital-Defense/

The game is a self-contained browser build and uses no third-party game libraries.

## Version 5.0 — Hangar & Upgrade Bay

### Individual pilot saves
- Three local pilot slots, each with separate coins, permanent upgrades, run totals, and best score.
- Each slot is saved in the current browser profile using localStorage and survives reloads and browser restarts.
- The service worker caches the launcher and all game-package parts after the first successful online visit. The game can then launch offline on that same browser/device.
- **Save codes** export all three pilot profiles for manual transfer to another browser/device. Keep a code private: anyone who has it can import that save.
- This GitHub Pages release is static and does not provide online accounts or cloud synchronization. Automatic sharing across browsers/devices requires an authenticated backend; local pilot slots remain isolated by browser profile.

### Coin economy
- Every new pilot starts with 3 coins.
- Coins are awarded once at the end of a run: `max(1, floor(kills / 2) + floor(survival seconds / 40) + floor(score / 2500))`.
- The balance and purchases are saved automatically for the active pilot.
- Prices for levels 1–5 in each upgrade line: **3, 7, 15, 26, 42 coins**.

### Four permanent upgrade paths
1. **Pulse Core:** Pulse Blaster damage increases by 8% per level, up to +40%.
2. **Triple Array:** collected Triple Shot lasts longer and deals more damage.
3. **Turret AI:** collected Auto Turret gains damage, firing speed, and active duration.
4. **Hull & Shield:** increases maximum hull by 10 per level, extends Shield Burst by 0.08 seconds per level, and reduces its cooldown by 0.5 seconds per level (down to a 6-second floor).

Permanent upgrades belong to the selected pilot. Temporary Triple Shot and Auto Turret capsules remain run-only effects.

## Existing combat systems
- Endless space survival with escalating enemy pressure.
- Carrier, Phantom, Destroyer, and boss enemy types.
- Pulse Blaster, Plasma Cannon, and limited Homing Missiles.
- Shield Burst (X key / mobile button).
- Temporary Triple Shot and Auto Turret power-up capsules.

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

## Performance
- Capped enemies, player shots, enemy shots, particles, missiles, and power-up capsules.
- Static nebula backdrop, capped device pixel ratio, throttled HUD updates, and no real-time blur/shadow filters.
- Canvas rendering, no external game libraries.

## Project files
- `index.html` — V5.0 game launcher and gzip-package assembler.
- `sw.js` — offline cache for the launcher and all eight package parts.
- `orbital-defense-v5-0-0.b64` through `orbital-defense-v5-0-7.b64` — verified base64 sections of the gzip game package.
- `orbital-defense-v4-2-power-up-expansion.html.gz` — retained V4.2 archive.
- `orbital-defense-v4-combat-expansion.html.gz` — retained V4.0 archive.

## Save compatibility
The local save format uses the `orbital-defense-pilot-profiles-v1` key. Save codes begin with `ODP1.`. Clearing browser data may remove local saves; export a save code periodically as a backup. This build has no cloud account or automatic cross-device sync.
