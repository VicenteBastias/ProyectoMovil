import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //Model

  user:any = {
    user:'',
    password:''
  }

  field: string = '';

  constructor(private toastCtrl: ToastController,private router:Router,private navCtrl:NavController) { }

  ngOnInit() {
  }

  login(){
  if(this.validateModel(this.user)){
    if (this.user.user.toLowerCase()==="admin"){
      this.goToBienvenida(this.user);


    }else if (this.user.user.toLowerCase() ==="user"){
      this.router.navigate(['/bienvenida']);
      this.goToBienvenida(this.user);
    }
    else{
      this.presentToast('Debes ingresar un usuario valido')
    }
  }
  else{
    this.presentToast('Debes ingresar: ' + this.field);
  }
}

  validateModel (model: any) {
    for(var[key,value] of Object.entries(model)){
      if(value == ''){
        this.field = key;
        return false;
      }
    }
    return true;
  }
  async presentToast(messaje:string, duration?:number){
    const toast = await this.toastCtrl.create({
      message: messaje,
      duration: duration?duration:2000
    });
    toast.present();
  }

  goToBienvenida(user:any): void{
    const NavigationExtras: NavigationExtras ={
      queryParams: {
        user : JSON.stringify(user)
      }
    };
    this.navCtrl.navigateForward(['bienvenida'],NavigationExtras);
  }

}

