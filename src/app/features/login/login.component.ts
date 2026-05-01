import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // Injecció de serveis amb l'API moderna d'Angular
  private authService = inject(AuthService);
  private router = inject(Router);

  // Propietats per al lligam (binding) amb el formulari
  public email = '';
  public password = '';
  
  // Signal per gestionar l'estat de l'error de forma reactiva
  public errorVisible = signal(false);

  /**
   * Gestiona l'enviament del formulari
   */
  onSubmit(): void {
    // Intentem fer login a través del servei
    const loginExitos = this.authService.login(this.email, this.password);

    if (loginExitos) {
      this.errorVisible.set(false);
      
      // Si el login és correcte, naveguem a la pàgina de preferits
      this.router.navigate(['/preferits']);
    } else {
      // Si les credencials són errònies, activem el missatge d'error
      this.errorVisible.set(true);
      
      // Opcional: netegem la contrasenya per seguretat
      this.password = '';
    }
  }
}