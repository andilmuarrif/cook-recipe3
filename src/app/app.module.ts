import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import firebase from '@firebase/app';

// var firebaseConfig = {
//   apiKey: "AIzaSyA19f1AC0MExILBcBhsQn5kuozAMtU-wAo",
//   authDomain: "cookrecipe-5ced8.firebaseapp.com",
//   projectId: "cookrecipe-5ced8",
//   storageBucket: "cookrecipe-5ced8.appspot.com",
//   messagingSenderId: "527545887427",
//   appId: "1:527545887427:web:583e4a86bdb2caab5cd076",
//   measurementId: "G-L9KL612J1K"
// };

// firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
