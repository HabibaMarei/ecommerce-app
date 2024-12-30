import { Component } from '@angular/core';
import { NavbarMainComponent } from "../../components/navbar-main/navbar-main.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-router-main',
  standalone: true,
  imports: [NavbarMainComponent, RouterOutlet, FooterComponent],
  templateUrl: './router-main.component.html',
  styleUrl: './router-main.component.scss'
})
export class RouterMainComponent {

}
