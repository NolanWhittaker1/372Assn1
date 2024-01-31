import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { SearchPipe } from './search.pipe'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    RecipeAddComponent,
    RecipeListComponent,
    RecipeDisplayComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
