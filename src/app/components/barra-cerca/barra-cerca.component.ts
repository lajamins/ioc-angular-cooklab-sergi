import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="cercar()" #formCerca="ngForm" class="formulari" aria-label="Formulari de cerca">

      <label for="cerca">Cercar elements</label>

      <input
        id="cerca"
        type="text"
        name="cerca"
        [(ngModel)]="textCerca"
        #cercaInput="ngModel"
        required
        minlength="3"
        placeholder="Cerca elements..."
        class="input"
        aria-required="true"
        [attr.aria-invalid]="cercaInput.invalid"
      />

      <!-- Errors -->
      <div *ngIf="cercaInput.invalid && cercaInput.touched" class="error" aria-live="assertive">
        <span *ngIf="cercaInput.errors?.['required']">
          El camp és obligatori
        </span>
        <span *ngIf="cercaInput.errors?.['minlength']">
          Mínim 3 caràcters
        </span>
      </div>

      <button type="submit" [disabled]="formCerca.invalid">
        Cercar
      </button>

    </form>
  `,
  styles: [`
    .formulari {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 24px;
    }

    label {
      font-weight: 600;
    }

    .input {
      padding: 10px;
      border: 2px solid #ccc;
      border-radius: 6px;
    }

    .input.ng-invalid.ng-touched {
      border-color: red;
    }

    .input.ng-valid.ng-touched {
      border-color: green;
    }

    .error {
      color: red;
      font-size: 0.9rem;
    }

    button {
      width: fit-content;
      padding: 8px 16px;
      cursor: pointer;
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  `]
})
export class BarraCercaComponent {

  textCerca = '';

  @Output() cercaCanviada = new EventEmitter<string>();

  cercar(): void {
    if (this.textCerca.length >= 3) {
      this.cercaCanviada.emit(this.textCerca);
    }
  }
}