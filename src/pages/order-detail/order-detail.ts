import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  name;
  price;
  category;
  photo;
  description;
  quantity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    this.name = this.navParams.get('name');
    this.price = this.navParams.get('price');
    this.category = this.navParams.get('category');
    this.photo = this.navParams.get('photo');
    this.description = this.navParams.get('description');
    this.quantity = this.navParams.get('quantity');
  }

}
