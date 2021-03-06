import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaURL: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private documents ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );

      this.aplicarTema( this.ajustes.tema );
    } else {
      this.aplicarTema( this.ajustes.tema );
    }
  }

  aplicarTema( tema: string ) {
    const url = `assets/css/colors/${tema}.css`;

    this.documents.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaURL = url;
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaURL: string;
  tema: string;
}
