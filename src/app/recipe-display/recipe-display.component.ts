import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipe } from '../recipe';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent {
  recipeId:string;
  currentRecipe:recipe;
  recipes:recipe[];
  constructor(private ActivatedRouter:ActivatedRoute) {
    const storedRecipes = localStorage.getItem("recipes");
    this.recipes = storedRecipes ? JSON.parse(storedRecipes) : [];
    this.recipeId = this.ActivatedRouter.snapshot.params['id'];
    this.currentRecipe = this.recipes.find(recipe => recipe.id === this.recipeId)|| new recipe("Unknown","Unknown","Unknown","Unknown");
   }

  

}
