# Informe d'Optimització RA4

## ChangeDetectionStrategy.OnPush
S'ha aplicat l'estratègia **OnPush** als següents components per optimitzar el rendiment de l'aplicació, reduint la càrrega del cicle de detecció de canvis d'Angular:

1. **DetailComponent**: s'ha triat aquesta estratègia ja que el component només depèn de dades d'entrada i no necessita comprovar canvis en l'estat global de forma constant.
2. **PreferitsPanelComponent**: gestiona la llista de favorits mitjançant Signals. L'estratègia OnPush evita re-renderitzacions innecessàries si no hi ha hagut una modificació directa en la llista de preferits.

## Virtualització de llista
Per tal de garantir una navegació fluida i evitar la degradació del rendiment del DOM amb llistes extenses, s'ha implementat:

*   **Component**: `CatalegPageComponent`.
*   **Eina**: `ScrollingModule` del CDK d'Angular (fent ús de `cdk-virtual-scroll-viewport` i `*cdkVirtualFor`).
*   **itemSize**: **300px** (calculat segons l'alçada de les cards de 280px més el marge de separació, garantint la precisió de l'scroll).
*   **Volum de dades**: s'han generat **60 elements** (multiplicant la llista original per 10)