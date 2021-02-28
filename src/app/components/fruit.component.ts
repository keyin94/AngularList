import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

const IMAGE_BASE = 'assets/fruits';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css'],
})
export class FruitComponent implements OnInit {
  @Input()
  fruit = 'apple';

  @Output()
  fruitClicked = new Subject<string>();

  constructor() {}

  image = 'assets/fruits/fruit';

  ngOnInit(): void {
    this.image = `${IMAGE_BASE}/${this.fruit}.png`;
  }

  handleClick() {
    console.info('Pressed: ', this.fruit);

    this.fruitClicked.next(this.fruit);
  }
}
