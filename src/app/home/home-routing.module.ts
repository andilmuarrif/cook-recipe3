import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'listing',
        loadChildren: () =>
          import('../screens/listing/listing.module').then(
            (m) => m.ListingPageModule
          ),
      },
      {
        path: 'add',
        loadChildren: () => import('../screens/add/add.module').then( m => m.AddPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../screens/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'search-recipe',
        loadChildren: () => import('../screens/search-recipe/search-recipe.module').then( m => m.SearchRecipePageModule)
      },
      {
        path: '',
        redirectTo: 'listing',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
