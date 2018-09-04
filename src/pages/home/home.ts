import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { Pagina2Page } from "../pagina2/pagina2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pagina2 = Pagina2Page;

  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController) {
      this.menuCtrl.enable(true);
  }

  mostrarMenu() {
    this.menuCtrl.toggle();
  }
}
