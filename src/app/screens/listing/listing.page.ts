import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.recipes = this.recipeService.getRecipes();
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'Semua',
        image: 'assets/images/icons/all.png',
        active: true,
      },
      {
        id: 2,
        label: 'Makanan',
        image: 'assets/images/icons/dish.png',
        active: false,
      },
      {
        id: 3,
        label: 'Minuman',
        image: 'assets/images/icons/milkshake.png',
        active: false,
      },
      {
        id: 4,
        label: 'Lainnya',
        image: 'assets/images/icons/other.png',
        active: false,
      }
    ];
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }

}
