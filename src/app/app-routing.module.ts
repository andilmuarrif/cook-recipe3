import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then( m => m.RegisterPageModule)
  },
  // {
  //   path: 'listing',
  //   loadChildren: () => import('./screens/listing/listing.module').then( m => m.ListingPageModule)
  // },
  {
    path: 'searchbar',
    loadChildren: () => import('./components/searchbar/searchbar.module').then( m => m.SearchbarModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./screens/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./screens/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  // {
  //   path: 'search-recipe',
  //   loadChildren: () => import('./screens/search-recipe/search-recipe.module').then( m => m.SearchRecipePageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./screens/profile/profile.module').then( m => m.ProfilePageModule)
  // },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
