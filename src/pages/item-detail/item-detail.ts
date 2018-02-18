import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { OrderDetailPage } from '../order-detail/order-detail';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  name;
  price;
  category;
  photo;
  description;

  constructor(public navParams: NavParams, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.name = this.navParams.get('item').name;
    this.price = this.navParams.get('item').price;
    this.category = this.navParams.get('item').category;
    this.photo = this.navParams.get('item').photo;
    this.description = this.navParams.get('item').description;
  }

  sendOrder(quantity) {
    this.navCtrl.push(OrderDetailPage, {
      name: this.name,
      price: this.price,
      category: this.category,
      photo: this.photo,
      description: this.description,
      quantity: quantity
    });
  }

}