# Documentació de navegació

## Mapa de rutes
| Path | Component | Accés |
| :--- | :--- | :--- |
| `/cataleg` | `CatalegPageComponent` | Públic |
| `/cerca` | `SearchComponent` | Públic |
| `/detall/:id` | `DetailComponent` | Públic |
| `/login` | `LoginComponent` | Públic |
| `/preferits` | `FavoritesModule` | Privat (Guàrdia activa) |

## Configuració del sistema
- **provideRouter**: S'ha configurat a `app.config.ts` per injectar la configuració de rutes de forma global.
- **RouterOutlet**: Ubicat a `app.component.html`, actua com a contenidor on es carreguen els components segons la ruta.
- **RouterLink / RouterLinkActive**: S'utilitzen al Header per navegar sense recarregar la pàgina i destacar visualment la secció on es troba l'usuari.