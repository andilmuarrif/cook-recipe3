import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public alert: AlertController, public router: Router) { }

  ngOnInit() {
  }

  async register() {
    this.showAlert('Register Berhasil', 'selamat datang');
    console.log('register berhasil');
    this.router.navigate(['/login']);
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
