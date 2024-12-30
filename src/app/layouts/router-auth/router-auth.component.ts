import { Component } from '@angular/core';
import { NavbarAuthComponent } from "../../components//navbar-auth/navbar-auth.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-router-auth',
  standalone: true,
  imports: [NavbarAuthComponent, RouterOutlet, FooterComponent],
  templateUrl: './router-auth.component.html',
  styleUrl: './router-auth.component.scss'
})
export class RouterAuthComponent {

}
