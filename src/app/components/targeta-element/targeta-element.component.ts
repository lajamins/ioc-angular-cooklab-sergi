import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="targeta" (click)="seleccionarElement()">
      <h3>{{ element.titol }}</h3>
      <p>{{ element.descripcio }}</p>
      <p class="valoracio">{{ element.valoracio }}/5</p>
    </article>
  `,
  styles: [`
    .targeta {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      cursor: pointer;
      transition: box-shadow 0.2s;
    }
    .targeta:hover {
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    .valoracio {
      font-weight: bold;
      color: #ff9900;
    }
  `]
})
export class TargetaElementComponent {
  @Input({ required: true }) element!: Element;
  @Output() elementSeleccionat = new EventEmitter<Element>();

  seleccionarElement() {
    this.elementSeleccionat.emit(this.element);
  }
}