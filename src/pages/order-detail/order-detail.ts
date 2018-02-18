import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';

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
  total;
  date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    events.subscribe('shareObject', (item, quantity) => {
      this.name = item.name;
      this.price = item.price;
      this.category = item.category;
      this.photo = item.photo;
      this.description = item.description;
      this.quantity = quantity;
      var a = Number(item.price);
      var b = Number(quantity);
      var yes = a * b;
      this.total = yes;
      this.date = new Date();
  });
  }
  
  ionViewDidLoad() {
  }

  viewItem(item) {
    let newItem = {
      name: this.name,
      price: this.price,
      category: this.category,
      photo: this.photo,
      description: this.description
    };
    this.navCtrl.push(ItemDetailPage, {
      item: newItem
    });
  }

}
