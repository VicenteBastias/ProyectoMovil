import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.page.html',
  styleUrls: ['./menu-inicial.page.scss'],
})
export class MenuInicialPage implements OnInit {
  loading:HTMLIonLoadingElement;

  

  constructor(private loadingCtrl:LoadingController) { }

  ngOnInit() {
    this.cargarLoading("Iniciando aplicacion")
  }

  cargarLoading(message:string){
    this.presentLoading(message);
    setTimeout(() =>{
      this.loading.dismiss();
    },2000);
  }
  async presentLoading(message:string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
    
  }

}
