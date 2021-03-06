import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

import { HomePage } from "../home/home";

import { AjustesProvider }  from "../../providers/ajustes/ajustes";



@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class Introduccion {

  slides:any[] = [
    {
      title: "Bienvenido!!!",
      description: "Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "¿Qué es ionic?",
      description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "¿Que hace esta app?",
      description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];


  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController,
              private _ajustes: AjustesProvider) {
                this.menuCtrl.enable(false);
  }


  saltar_tutorial(){

    this._ajustes.ajustes.mostrar_tutorial = false;
    this._ajustes.guardar_storage();


    this.navCtrl.setRoot( HomePage );

  }




}
