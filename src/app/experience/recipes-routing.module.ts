import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { RecipesComponent } from './recipes.component';

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: ExperienceDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class RecipesRoutingModule {}
