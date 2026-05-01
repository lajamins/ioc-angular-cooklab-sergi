import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormulariCercaComponent], 
  templateUrl: './search.component.html', 
  styleUrl: './search.component.scss'
})
export class SearchComponent {}
