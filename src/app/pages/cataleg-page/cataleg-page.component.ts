import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})
export class CatalegPageComponent implements OnInit {
  public elementService = inject(ElementService);

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }
}
