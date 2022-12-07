import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';

import { SearchRecipePageRoutingModule } from './search-recipe-routing.module';

import { SearchRecipePage } from './search-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarModule,
    SearchRecipePageRoutingModule
  ],
  declarations: [SearchRecipePage]
})
export class SearchRecipePageModule {}
