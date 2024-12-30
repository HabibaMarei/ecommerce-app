import { AuthService } from './../../core/services/auth.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-main',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.scss'
})
export class NavbarMainComponent {
  readonly _AuthService = inject(AuthService)
}
