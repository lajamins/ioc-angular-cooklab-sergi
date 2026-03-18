import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="barra-cerca">
      <input
        type="text"
        [(ngModel)]="textCerca"
        (input)="emitirCerca()"
        placeholder="Cerca elements..."
      />
    </div>
  `,
  styles: [`
    .barra-cerca {
      margin-bottom: 24px;
    }
    input {
      width: 100%;
      padding: 12px;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }
  `]
})
export class BarraCercaComponent {
  textCerca = '';
  @Output() cercaCanviada = new EventEmitter<string>();

  emitirCerca(): void {
    this.cercaCanviada.emit(this.textCerca);
  }
}