import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ElementService } from '../../services/element.service';
import { PreferitsService } from '../../services/preferits.service';
import { ElementCataleg } from '../../models/element.model';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
  ],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})
export class CatalegPageComponent implements OnInit {
  public elementService = inject(ElementService);
  public preferitsService = inject(PreferitsService);

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }

  togglePreferit(item: ElementCataleg): void {
    if (this.preferitsService.esPreferit(item.id)) {
      this.preferitsService.eliminarPreferit(item.id);
    } else {
      this.preferitsService.afegirPreferit(item);
    }
  }
}