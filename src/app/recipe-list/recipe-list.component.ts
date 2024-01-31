import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {

  recipes: recipe[];
  query:string;
  constructor(private router:Router) {
    const storedRecipes = localStorage.getItem("recipes");
    this.query = '';
    if (storedRecipes == null) {
      this.recipes = [];
      localStorage.setItem("recipes", JSON.stringify(this.recipes));
    } else {
      this.recipes = JSON.parse(storedRecipes as string);
    }
    console.log("Loaded First:");
    console.log(this.recipes);

   }

   addRecipe() {
    this.router.navigate([`/add`]);
   }

   onClick(id:string) {
    this.router.navigate(["/recipe/",id]);
   }
}
