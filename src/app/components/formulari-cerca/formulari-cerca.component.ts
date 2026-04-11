import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, of, delay, map } from 'rxjs';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrls: ['./formulari-cerca.component.scss']
})
export class FormulariCercaComponent implements OnInit {
  private fb = inject(FormBuilder);
  public elementService = inject(ElementService);

  searchForm: FormGroup = this.fb.group({
    termeCerca: [
      '', 
      [Validators.minLength(2), Validators.maxLength(50)], // Validadors síncrons
      [this.codiDisponibleValidator.bind(this)]           // Validador asíncron
    ]
  });

  ngOnInit(): void {
    // Escolta canvis amb debounce de 400ms
    this.searchForm.get('termeCerca')?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(valor => {
      if (this.searchForm.valid && valor) {
        console.log('Cercant:', valor);
      }
    });
  }

  // Validador Asíncron (Simula consulta API)
  codiDisponibleValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    if (!control.value) return of(null);
    
    return of(control.value).pipe(
      delay(500), // Retard de 500ms simulant l'API
      map(valor => {
        // Simulació: si escriu "error", retornem que no hi ha resultats
        const existeixenResultats = valor.length > 0 && valor.toLowerCase() !== 'buit';
        return existeixenResultats ? null : { senseResultats: true };
      })
    );
  }

  netejar(): void {
    this.searchForm.reset();
  }
}
