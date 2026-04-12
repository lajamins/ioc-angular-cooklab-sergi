# Documentació de Serveis

L'aplicació utilitza serveis centralitzats per a la gestió de dades HTTP i la persistència de l'estat de l'usuari mitjançant Signals.

## 1. ElementService (Servei HTTP)

### Responsabilitats

- Comunicació amb l'API externa per a la recuperació del catàleg.
- Gestió d'estats de càrrega i control d'errors de xarxa.
- Transformació de dades mitjançant adaptadors abans d'exposar-les als components.

### Mètodes públics

#### `obtenirPopulars(): void`

Carrega els elements destacats de l'API.

- **Endpoint**: `GET /populars` (simulat).
- **Flux**:
  1. Activa l'estat `carregant`.
  2. Realitza la petició i aplica l'adaptador `adaptarElementsApi`.
  3. Actualitza el Signal `elements` i finalitza la càrrega.

#### `cercar(terme: string): void`

Realitza una cerca filtrada al servidor.

- **Endpoint**: `GET /elements?q={terme}`.
- **Comportament**: si el terme és buit, torna a carregar els populars.

#### `codiDisponibleValidator(codi: string)`

Validador asíncron per a formularis.

- **Simulació**: retorna un observable amb un retard de 500ms per simular latència de xarxa.

### Signals exposats (Read-only)

- `elements()`: llista actual d'elements del catàleg.
- `carregant()`: booleà que indica si hi ha una petició en curs.
- `error()`: conté el missatge d'error si la petició falla.

### Gestió d'errors

Els errors HTTP es capturen amb `catchError` i es transformen en missatges amigables:

| Codi HTTP | Missatge d'usuari                        |
| :-------- | :--------------------------------------- |
| 0         | No s'ha pogut connectar amb el servidor. |
| 404       | El recurs sol·licitat no existeix.       |
| 500       | Error intern del servidor.               |
| Altres    | S'ha produït un error inesperat.         |

## 2. PreferitsService (Gestió d'Estat i Persistència)

### Responsabilitats

- Mantenir la llista de preferits de l'usuari sincronitzada entre components.
- Persistència en el navegador mitjançant `localStorage`.

### Mètodes públics

- **`afegirPreferit(item)`**: afegeix un element a la llista i el desa al `localStorage`.
- **`eliminarPreferit(id)`**: filtra la llista per extreure l'element i actualitza la persistència.
- **`esPreferit(id)`**: comprova si un element ja està marcat com a favorit.
- **`actualitzarNotes(id, notes)`**: mètode clau per al formulari dinàmic. Actualitza l'array de notes d'una recepta específica.

### Estat i Persistència

- **Clau LocalStorage**: `preferits-cataleg`
- **Signals**:
  - `preferits()`: estat global de la llista.
  - `totalPreferits()`: signal computat (`computed`) que retorna el recompte en temps real.

### Exemple d'ús

```typescript
// Exemple de subscripció al total de preferits des d'un component
this.total = this.preferitsService.totalPreferits();
```
