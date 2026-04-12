import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PreferitsService } from '../../services/preferits.service';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html',
  styleUrl: './preferits-panel.component.scss'
})
export class PreferitsPanelComponent {
  public preferitsService = inject(PreferitsService);
  private fb = inject(FormBuilder);

  // Creem un diccionari de formularis, un per a cada element preferit
  formularisNotes: { [key: string]: FormGroup } = {};

  constructor() {
    // Inicialitzem els formularis per a cada preferit existent
    this.preferitsService.preferits().forEach(p => {
      this.inicialitzarFormulari(p.id, p.notes || []);
    });
  }

  inicialitzarFormulari(id: string, notes: string[]) {
    const arrayNotes = this.fb.array(
      notes.map(n => this.fb.control(n, [Validators.required, Validators.minLength(3)]))
    );

    this.formularisNotes[id] = this.fb.group({
      notesArray: arrayNotes
    });

    // Cada vegada que canvia el formulari, guardem les notes al servei
    arrayNotes.valueChanges.subscribe(valors => {
      // NOMÉS si tot el FormArray és vàlid (totes les notes > 2 caràcters i no buides)
    if (this.formularisNotes[id].valid) {
      const valorsSegurs: string[] = valors.map((v: any) => v?.toString() ?? '');
      this.preferitsService.actualitzarNotes(id, valorsSegurs);
      console.log('Notes guardades correctament');
    } else {
      console.log('Notes invàlides: No es guarda res al servei');
      }
    });
  }

  getNotesArray(id: string): FormArray {
    return this.formularisNotes[id].get('notesArray') as FormArray;
  }

  afegirNota(id: string) {
    if (!this.formularisNotes[id]) {
      this.inicialitzarFormulari(id, []);
    }
    this.getNotesArray(id).push(this.fb.control('', [Validators.required, Validators.minLength(3)]));
  }

  eliminarNota(id: string, index: number) {
    this.getNotesArray(id).removeAt(index);
  }
}
