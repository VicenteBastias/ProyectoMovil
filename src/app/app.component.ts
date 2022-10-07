import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/bienvenida', icon: 'home' },
    { title: 'About', url: '/about', icon: 'people-circle' },
    { title: 'Conversor', url: '/conversor', icon: 'archive' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Log Out', url:'/login', icon: 'log-out'}

  ];
  
  constructor() {}
}
