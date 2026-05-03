# Informe d'Optimització RA4

## ChangeDetectionStrategy.OnPush
S'ha aplicat l'estratègia OnPush als següents components:
1. **DetailComponent**: s'ha triat perquè és un component de detall que només s'ha d'actualitzar quan canvia l'element seleccionat.
2. **PreferitsPanelComponent**: gestiona una llista que només canvia quan l'usuari afegeix o treu elements, evitant comprovacions innecessàries.

## Virtualització de llista
- **Component**: CatalegPageComponent.
- **Eina**: ScrollingModule del CDK d'Angular.
- **itemSize**: 120px (alçada de cada fila).
- **Elements**: 60 elements (llista original multiplicada per 10 per testejar el rendiment).