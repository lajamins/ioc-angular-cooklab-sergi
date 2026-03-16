import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { ELEMENTS_MOCK } from './mocks/dades-mock';
import { Element } from './models/element.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LlistaElementsComponent],
  template: `
    <h1>CookLab - Elements</h1>
    <app-llista-elements 
      [elements]="elements"
      (elementSeleccionat)="rebreElement($event)">
    </app-llista-elements>
  `,
})
export class AppComponent {
  elements: Element[] = ELEMENTS_MOCK;

  rebreElement(element: Element) {
    console.log('Element seleccionat:', element);
  }
}