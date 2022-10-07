import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  user : string = "";

  constructor(private activatedRoute: ActivatedRoute) { 
    this.obtenerUsuario();
  }

  ngOnInit() {
    console.log(this.user);
  }

  obtenerUsuario():void{
    this.activatedRoute.queryParams.subscribe(params => {
    this.user = JSON.parse(params.user);
    
  })
}

}
