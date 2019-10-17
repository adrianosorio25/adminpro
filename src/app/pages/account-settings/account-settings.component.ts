import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public ajustesS: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ) {

    this.aplicarCheck( link );

    this.ajustesS.aplicarTema( tema );

  }

  aplicarCheck( link: HTMLTextAreaElement ) {
      const selectores = document.getElementsByClassName('selector');

      // tslint:disable-next-line: prefer-for-of
      for ( let i = 0; i < selectores.length; i++ ) {
        selectores[i].classList.remove('working');
      }

      link.classList.add('working');
  }

  colocarCheck() {
    const selectores = document.getElementsByClassName('selector');

    const tema = this.ajustesS.ajustes.tema;

    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < selectores.length; i++ ) {
      if (selectores[i].getAttribute('data-theme') === tema) {
        selectores[i].classList.add('working');
      }
    }

  }

}
