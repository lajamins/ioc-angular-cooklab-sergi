import { Injectable, signal, computed, effect } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {
  private readonly STORAGE_KEY = 'preferits-cataleg';
  
  // Signal privat per gestionar la llista
  private _preferits = signal<ElementCataleg[]>([]);

  // Signal de lectura pública
  public preferits = this._preferits.asReadonly();

  // Signal computat per al total
  public totalPreferits = computed(() => this._preferits().length);

  constructor() {
    this.carregarDeLocalStorage();
  }

  private carregarDeLocalStorage(): void {
    try {
      const dades = localStorage.getItem(this.STORAGE_KEY);
      if (dades) {
        this._preferits.set(JSON.parse(dades));
      }
    } catch (error) {
      console.error('Error carregant preferits de localStorage', error);
      this._preferits.set([]);
    }
  }

  private guardarALocalStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._preferits()));
    } catch (error) {
      console.error('Error guardant a localStorage', error);
    }
  }

  afegirPreferit(element: ElementCataleg): void {
    if (!this.esPreferit(element.id)) {
      this._preferits.update(list => [...list, element]);
      this.guardarALocalStorage();
    }
  }

  eliminarPreferit(id: string): void {
    this._preferits.update(list => list.filter(item => item.id !== id));
    this.guardarALocalStorage();
  }

  esPreferit(id: string): boolean {
    return this._preferits().some(item => item.id === id);
  }
  actualitzarNotes(id: string, notes: string[]) {
  this._preferits.update(list => 
    list.map(item => item.id === id ? { ...item, notes } : item)
  );
  this.guardarALocalStorage(); // La funció que ja tenies de l'Ex 4
  }
}