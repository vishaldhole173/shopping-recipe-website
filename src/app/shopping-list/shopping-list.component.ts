import { Component, OnChanges, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnChanges {
  ingredients: Ingredient[] = [
    new Ingredient('Potato', 10),
    new Ingredient('Tomato', 20)
  ];
  constructor() { }
  
  ngOnChanges() {
  }

  ngOnInit(): void {
  }

}
