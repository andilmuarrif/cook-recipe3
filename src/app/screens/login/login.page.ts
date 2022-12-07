import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alert: AlertController, public router: Router) { }

  ngOnInit() {
  }

  async login() {
    this.showAlert('Login Berhasil', 'selamat datang');
    console.log('login berhasil');
    this.router.navigate(['/home']);
  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
