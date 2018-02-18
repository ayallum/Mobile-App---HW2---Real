import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { OrderDetailPage } from '../order-detail/order-detail';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OrderDetailPage;
  constructor() {

  }
}
