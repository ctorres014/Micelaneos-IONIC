import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";

@Injectable()
export class AjustesProvider {
  ajustes = {
    mostrar_tutorial: true
  }

  constructor(public _platform: Platform,
              private storage: Storage) {
    console.log('Hello AjustesProvider Provider');


  }

  cargar_storage() {
    let promesa = new Promise((resolve, reject) => {
      if(this._platform.is("cordova")) {
        // Dispositivo
        this.storage.ready()
                    .then(() => {
                      console.log("Inicializando Storage");
                      this.storage.get('Ajustes')
                                  .then((ajustes) => {
                                    console.log("Storage Listo");
                                    if(ajustes) {
                                      this.ajustes = ajustes;
                                    }
                                    resolve();
                                  })
                    })

      }
      else {
          // Escritorio
          if(localStorage.getItem("Ajustes")) {
            this.ajustes = JSON.parse(localStorage.getItem("Ajustes")) ;
          }
          resolve();
      }

    })

    return promesa;
  }

  guardar_storage() {
    if(this._platform.is("cordova")) {
      // Dispositivo
      this.storage.ready()
                  .then(() => {
                    this.storage.set('Ajustes', this.ajustes);
                  })
    }
    else {
        // Escritorio
        localStorage.setItem("Ajustes", JSON.stringify(this.ajustes));
    }

  }


}
