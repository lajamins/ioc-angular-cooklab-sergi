import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="targeta" tabindex="0" aria-label="Element del catàleg">
      <h2>{{ element.titol | uppercase }}</h2>
      <p>{{ element.descripcio }}</p>
      <p>Valoració: {{ element.valoracio | number:'1.1-1' }}</p>
    </article>
  `,
  styles: [`
    .targeta {
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #ddd;
      background: #fff;
      transition: transform 0.2s;
    }

    .targeta:hover {
      transform: scale(1.02);
    }
  `]
})
export class TargetaElementComponent {
  @Input() element!: Element;
}