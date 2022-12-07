import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  recipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(this.id);
  }

}
