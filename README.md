# CookLab - Gestió de Receptes

Aplicació Angular desenvolupada per a la gestió de receptes i productes culinaris, posant èmfasi en l'optimització del rendiment i l'experiència d'usuari.

## 🗺️ Mapa de Rutes

| Path | Component | Accés |
| :--- | :--- | :--- |
| `/login` | `LoginComponent` | Públic |
| `/cataleg` | `CatalegPageComponent` | Públic |
| `/cerca` | `SearchComponent` | Públic |
| `/detall/:id` | `DetailComponent` | Públic |
| `/preferits` | `PreferitsPanelComponent` | **Privat (authGuard)** |
| `**` | (Redirigeix a `/cataleg`) | Públic |

## 🚀 Execució en Local
```bash
# 1. Clonar el repositori
git clone [https://github.com/lajamins/ioc-angular-cooklab-sergi]

# 2. Accedir a la carpeta
cd ioc-angular-cooklab-sergi

# 3. Instal·lar dependències
npm install

# 4. Aixecar el servidor de desenvolupament
ng serve

# 5. Accés a l'aplicació
Accedir a http://localhost:4200

## Build de producció

Per generar el build de producció de l'aplicació, s'ha utilitzat la següent comanda:
ng build --configuration production

Mida aproximada del bundle obtinguda:

Mida total (Initial total): 391.42 kB
Mida de transferència estimada: 102.53 kB

## 🔐 Credencials de Prova

Per accedir a la secció protegida de l'aplicació, s'han d'utilitzar les següents credencials (que ja apareixen per defecte en els camps corresponents):

- **Usuari:** `xef@cooklab.com`
- **Contrasenya:** `1234`