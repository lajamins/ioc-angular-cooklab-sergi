# Documentació de Formularis - Exercici 3

S'ha implementat un formulari reactiu per a la cerca d'elements amb les següents característiques:

### Validadors Implementats
1. **Síncrons**: 
   - `Validators.minLength(2)`: Evita cerques massa curtes.
   - `Validators.maxLength(50)`: Limita l'entrada de text.
2. **Asíncron (`codiDisponibleValidator`)**: 
   - Simula una crida a l'API amb un `delay` de 500ms.
   - Retorna l'error `{ senseResultats: true }` si el terme no és vàlid.

### Comportament del Debounce
S'ha utilitzat l'operador `debounceTime(400)` sobre l'observable `valueChanges`. Això assegura que l'aplicació no executi la lògica de cerca fins que l'usuari hagi deixat d'escriure durant 400ms, optimitzant així el rendiment i reduint crides innecessàries a l'API.