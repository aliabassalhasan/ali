import { Component } from '@angular/core';
import set = Reflect.set;
import {forEach} from '@angular/router/src/utils/collection';
import {card} from './card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total: number;
  k: number;
  j: number;
  c: card[]= [];
  constructor() {
    this.total = 0;
  }
  calc() {
    this.total = 0;
    for (this.j = 0; this.j < this.c.length; this.j++) {
      this.total += parseInt(this.c[this.j].price, 0) * parseInt(this.c[this.j].count, 0);
    }
  }
  additem(i: string, p: string, n: string ) {
    this.c.push(new card(i, p, n));
    this.calc();
      }

  removeitem(i: string ) {
    for (this.k = 0; this.k < this.c.length; this.k++) {
      if (this.c[this.k].item === i) {
        this.c = this.c.filter(r => r !== this.c[this.k]);
      }
      this.calc();
    }

  }
}
