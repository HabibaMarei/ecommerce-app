import { AuthService } from './../../core/services/auth.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
<<<<<<< HEAD
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';
=======
>>>>>>> 9d13b8ac56d9f3f0fb3a3f8341744574c982ca5a

@Component({
  selector: 'app-navbar-main',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink, RouterLinkActive, TranslateModule],
=======
  imports: [RouterLink, RouterLinkActive],
>>>>>>> 9d13b8ac56d9f3f0fb3a3f8341744574c982ca5a
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.scss'
})
export class NavbarMainComponent {
  readonly _AuthService = inject(AuthService)
<<<<<<< HEAD
  readonly _MytranslateService = inject(MytranslateService)
  readonly _TranslateService = inject(TranslateService)

  change(lang: string): void{
    this._MytranslateService.changeLang(lang)
  }
=======
>>>>>>> 9d13b8ac56d9f3f0fb3a3f8341744574c982ca5a
}
