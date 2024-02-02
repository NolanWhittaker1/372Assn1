import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';


const routes: Routes = [
  {path: 'add', component: RecipeAddComponent},
  {path: 'main', component: RecipeListComponent},
  {path: 'recipe/:id', component: RecipeDisplayComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
