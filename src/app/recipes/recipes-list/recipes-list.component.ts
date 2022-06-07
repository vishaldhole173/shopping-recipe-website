import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public recipes: Recipe[] = [
    new Recipe('Pav Bhaji', 'Test Recipe', 'https://5.imimg.com/data5/FI/EL/MY-25797810/pav-bhaji-masala-500x500.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
