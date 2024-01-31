import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { ReportListComponent } from './report-list/report-list.component';

const routes: Routes = [
  {path: 'add', component: RecipeAddComponent},
  {path: 'main', component: ReportListComponent},
  {path: '', redirectTo: '/add', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
