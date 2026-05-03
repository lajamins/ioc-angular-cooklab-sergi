import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ElementService } from '../../services/element.service';
import { PreferitsService } from '../../services/preferits.service';
import { ElementCataleg } from '../../models/element.model';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ScrollingModule 
  ],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})
export class CatalegPageComponent implements OnInit {
  public elementService = inject(ElementService);
  public preferitsService = inject(PreferitsService);

  public elementsVirtuals: ElementCataleg[] = [];

  ngOnInit() {
    this.elementService.obtenirPopulars();

    setTimeout(() => {
      const dadesOriginals = this.elementService.elements();
      if (dadesOriginals && dadesOriginals.length > 0) {
        // Multipliquem per 10 per assegurar-nos de tenir > 50 elements per a la captura
        this.elementsVirtuals = Array(10).fill(dadesOriginals).flat();
      }
    }, 800); 
  }

  togglePreferit(item: ElementCataleg): void {
    if (this.preferitsService.esPreferit(item.id)) {
      this.preferitsService.eliminarPreferit(item.id);
    } else {
      this.preferitsService.afegirPreferit(item);
    }
  }
}