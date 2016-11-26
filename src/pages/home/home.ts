import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//servicios
import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public authData: AuthData) {}

  logOut(){
    this.authData.logoutUser();
  }

}
