import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}
  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }
  doarAlimentos() {
    this.abrirUrl(
      'https://www.google.com/maps/search/Ponto+de+doacao+de+alimento/@-24.1640484,-46.4385131,7z/data=!3m1!4b1'
    );
  }
  doarRoupas() {
    this.abrirUrl(
      'https://www.google.com/maps/search/Doar+roupas/@-22.8850087,-43.2433222,12z/data=!3m1!4b1'
    );
  }
  doarSangue() {
    this.abrirUrl(
      'https://www.google.com/maps/search/Doar+sangue/@-22.8704434,-43.1799168,12z/data=!3m1!4b1'
    );
  }
}
