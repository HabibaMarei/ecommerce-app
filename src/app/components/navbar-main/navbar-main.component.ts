import { AuthService } from './../../core/services/auth.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';

@Component({
  selector: 'app-navbar-main',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.scss'
})
export class NavbarMainComponent {
  readonly _AuthService = inject(AuthService)
  readonly _MytranslateService = inject(MytranslateService)
  readonly _TranslateService = inject(TranslateService)

  change(lang: string): void{
    this._MytranslateService.changeLang(lang)
  }
}
