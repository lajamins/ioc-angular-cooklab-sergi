import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { PreferitsService } from '../../services/preferits.service'; // Injecció nova
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { ElementCataleg } from '../../models/element.model';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [
    CommonModule, 
    FormulariCercaComponent
  ],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})
export class CatalegPageComponent implements OnInit {
  public elementService = inject(ElementService);
  // Injectem el servei de preferits per usar-lo al template
  public preferitsService = inject(PreferitsService);

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }

  // Mètode per gestionar el clic a l'estrella
  togglePreferit(item: ElementCataleg): void {
    if (this.preferitsService.esPreferit(item.id)) {
      this.preferitsService.eliminarPreferit(item.id);
    } else {
      this.preferitsService.afegirPreferit(item);
    }
  }
}
