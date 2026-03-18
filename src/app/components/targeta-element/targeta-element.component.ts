import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="targeta">
      <h2>{{ element.titol | uppercase }}</h2>
      <p>{{ element.descripcio }}</p>
      <p>Valoració: {{ element.valoracio | number:'1.1-1' }}</p>
    </article>
  `
})
export class TargetaElementComponent {
  @Input() element!: Element;
}