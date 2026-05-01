import { Component, OnInit, inject } from '@angular/core'; // Afegim inject
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Injectem el servei
  private elementService = inject(ElementService);

  // Exposem els signals del servei al template
  readonly elements = this.elementService.elements;
  readonly carregant = this.elementService.carregant;
  readonly error = this.elementService.error;

  ngOnInit(): void {
    // Cridem al mètode del teu servei
    this.elementService.obtenirPopulars();
  }
}
