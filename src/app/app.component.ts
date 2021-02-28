import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'feb28-prac';
  mart = 'assets/kwik-e-mart.png';

  fruits = [
    'acorn_squash',
    'apple',
    'bell_pepper',
    'blueberries',
    'broccoli',
    'carrot',
    'celery',
    'chili_pepper',
    'corn',
    'eggplant',
    'lettuce',
    'mushroom',
    'onion',
    'potato',
    'pumpkin',
    'radish',
    'squash',
    'strawberry',
    'sugar_snap',
    'tomato',
    'zucchini',
  ];

  fruitSelected = '';

  form: FormGroup;
  cart: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cart = this.fb.array([]);
    this.form = this.fb.group({
      name: this.fb.control('Ke Yin', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: this.fb.control('keyint94@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      fruit: this.fb.control(''),
      quantity: this.fb.control(''),
      cart: this.cart,
    });
  }

  addCart(f) {
    console.info('received: ', f);
    this.fruitSelected = f;

    let exist = false;
    let quantity = 0;
    let index = 0;

    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart.at(i).value.fruit === this.fruitSelected) {
        exist = true;
        quantity = this.cart.at(i).value.quantity;
        console.log(quantity);
        index = i;
        break;
      }
    }

    const newFruit = this.fb.group({
      fruit: this.fruitSelected,
      quantity: quantity + 1,
    });

    console.log(newFruit.value.quantity);

    if (exist === false) {
      this.cart.push(newFruit);
    } else {
      console.log(newFruit);
      this.cart.setControl(index, newFruit);
    }
  }

  checkOut() {
    console.log('Email to: ', this.form.value.email);
    console.log('Order completed by ', this.form.value.name);
  }
}
