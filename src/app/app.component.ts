import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';
import { ELEMENTS_MOCK } from './mocks/dades-mock';
import { Element } from './models/element.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LlistaElementsComponent, BarraCercaComponent],
  template: `
    <main aria-labelledby="titol-app">

      <h1 id="titol-app">CookLab</h1>

      <app-barra-cerca
        (cercaCanviada)="filtrarElements($event)">
      </app-barra-cerca>

      <!-- Estat: Sense resultats -->
      <div 
        *ngIf="elementsFiltrats.length === 0 && textCercaActual"
        role="alert"
        aria-live="polite"
      >
        <p>🔍 No s'han trobat elements per "<strong>{{ textCercaActual }}</strong>"</p>
      </div>

      <!-- Llista -->
      <app-llista-elements
        *ngIf="elementsFiltrats.length > 0"
        [elements]="elementsFiltrats">
      </app-llista-elements>

    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementsComplets: Element[] = ELEMENTS_MOCK;
  elementsFiltrats: Element[] = ELEMENTS_MOCK;
  textCercaActual = '';

  filtrarElements(textCerca: string): void {
    this.textCercaActual = textCerca;

    if (!textCerca) {
      this.elementsFiltrats = this.elementsComplets;
    } else {
      const textMinuscules = textCerca.toLowerCase();
      this.elementsFiltrats = this.elementsComplets.filter(element =>
        element.titol.toLowerCase().includes(textMinuscules) ||
        element.descripcio.toLowerCase().includes(textMinuscules) ||
        element.categoria?.toLowerCase().includes(textMinuscules)
      );
    }
  }
}