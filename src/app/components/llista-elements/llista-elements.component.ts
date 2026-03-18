import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  template: `
    <section class="llistat" aria-label="Llistat d'elements">
      <div *ngIf="elements.length === 0" class="missatge-buit">
        <p>No hi ha elements disponibles</p>
      </div>

      <div *ngIf="elements.length > 0" class="graella">
        <app-targeta-element
          *ngFor="let element of elements; trackBy: trackById"
          [element]="element">
        </app-targeta-element>
      </div>
    </section>
  `,
  styles: [`
    .llistat {
      width: 100%;
    }
    .graella {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
      padding: 24px 0;
    }
    .missatge-buit {
      text-align: center;
      padding: 60px 20px;
      color: #666;
    }
    .missatge-buit p {
      font-size: 1.1rem;
      margin: 0;
    }

    @media (max-width: 768px) {
      .graella {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
  `]
})
export class LlistaElementsComponent {
  @Input({ required: true }) elements: Element[] = [];

  trackById(index: number, element: Element): number {
    return element.id;
  }
}