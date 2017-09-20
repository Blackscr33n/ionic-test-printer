import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Printer } from '@ionic-native/printer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private printer: Printer
  ) {

  }

  print() {
    this.printer.print("Hello World");
  }

}
