import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { ElementCataleg } from '../../models/element.model';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html', // Usarem el fitxer HTML per neteja
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private elementService = inject(ElementService);

  // Signal per guardar l'objecte complet del producte
  public item = signal<ElementCataleg | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      // Busquem el producte a la llista del servei
      const trobat = this.elementService.elements().find(e => e.id === id);
      
      if (trobat) {
        this.item.set(trobat);
      }
    }
  }
}