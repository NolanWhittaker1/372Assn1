import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent {
  recipes: recipe[];
  constructor(private router:Router) {
    const storedReports = localStorage.getItem("reports");

    if (storedReports == null) {
      this.recipes = [];
      localStorage.setItem("reports", JSON.stringify(this.recipes));
    } else {
      this.recipes = JSON.parse(storedReports as string);
    }
    console.log("Loaded First:");
    console.log(this.recipes);

   }

   addRecipe() {
    this.router.navigate([`/add`]);
   }

}
