import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { recipe } from '../recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {
  form: FormGroup;
  recipes: recipe[];
  constructor(private router:Router) {
    this.recipes = [];
    let formControls = {
      name: new FormControl('',[ Validators.required, Validators.nullValidator]),
      directions: new FormControl('',[ Validators.required, Validators.nullValidator]),
      ingredients: new FormControl('',[ Validators.required, Validators.nullValidator]),
      photo: new FormControl('',[]),
    }
    this.form = new FormGroup(formControls);

    const storedReports = localStorage.getItem("recipes");

    if (storedReports == null) {
      this.recipes = [];
      localStorage.setItem("reports", JSON.stringify(this.recipes));
    } else {
      this.recipes = JSON.parse(storedReports as string);
    }
   }

    onSubmit(newRecipe: recipe) {
      newRecipe = new recipe(newRecipe.name, newRecipe.directions, newRecipe.ingredients, newRecipe.photo);
      this.recipes.push(newRecipe);
      console.log("Adding new recipe:");
      console.log(this.recipes)
      localStorage.setItem("reports",JSON.stringify(this.recipes));
      this.router.navigate([`/main`]);
    }

  

}
