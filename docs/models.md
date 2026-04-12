# Documentació de Models i Mapeig

Aquest document descriu l'estructura de dades de l'aplicació i la transformació de la resposta de l'API externa cap al nostre model intern.

## 1. Mapeig de camps (API → Model Intern)

Aquesta taula és la referència obligatòria per a la transformació de dades realitzada en l'adaptador:

| Camp API (Original) | Camp Intern (App) | Tipus TypeScript | Transformació |
| :--- | :--- | :--- | :--- |
| `id` | `id` | `string` | Cap |
| `nom` | `titol` | `string` | Renombrat |
| `descripcio` | `descripcio` | `string` | Cap |
| `categoria` | `categoria` | `string` | Cap |
| `preu` | `preu` | `number` | Cap |
| `imatge` | `imatgeUrl` | `string` | Renombrat |
| `popular` | `esPopular` | `boolean` | Renombrat |
| `stock` | `unitats` | `number` | Renombrat |
| (N/A) | `notes` | `string[]` | Afegit (Camp dinàmic) |

---

## 2. Interfícies TypeScript

### ElementApiResponse (Resposta de l'API)
Representa el format "brut" que rebem del servidor:

```typescript
export interface ElementApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge: string;
  popular: boolean;
  stock: number;
}