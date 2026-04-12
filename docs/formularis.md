# Documentació de Formularis - CookLab

S'han implementat formularis reactius mitjançant `ReactiveFormsModule` per gestionar tant la cerca de receptes com la personalització de notes, garantint una experiència d'usuari robusta i validada.

## 1. Formulari de Cerca (Cerca de Receptes)

S'ha implementat un formulari reactiu per a la cerca d'elements amb una gestió optimitzada de peticions.

### Validadors Implementats

| Tipus | Validador | Descripció |
| :--- | :--- | :--- |
| **Síncron** | `minLength(2)` | Evita cerques massa curtes que generin resultats poc rellevants. |
| **Síncron** | `maxLength(50)` | Limita l'entrada de text per seguretat i coherència de dades. |
| **Asíncron** | `codiDisponibleValidator` | Simula una consulta a l'API amb un retard de 500ms per verificar la disponibilitat del terme. |

### Comportament del Debounce

Per optimitzar el rendiment, s'ha utilitzat l'operador `debounceTime(400)` sobre l'observable `valueChanges`. 

- **Funcionament**: L'aplicació espera 400ms des de l'última pulsació de tecla abans d'executar la lògica de cerca.
- **Objectiu**: Reduir el nombre de crides HTTP innecessàries i millorar la fluïdesa de la interfície.


## 2. Formulari Dinàmic (PreferitsPanelComponent)

### Funcionalitat
Component que utilitza un **FormArray dinàmic** per gestionar notes personalitzades per a cada recepta guardada als preferits.

### FormArray dinàmic

```typescript
// Creació del formulari reactiu amb un array dinàmic per a cada preferit
this.formularisNotes[id] = this.fb.group({
  notesArray: this.fb.array(
    notes.map(n => this.fb.control(n, [Validators.required, Validators.minLength(3)]))
  )
});
