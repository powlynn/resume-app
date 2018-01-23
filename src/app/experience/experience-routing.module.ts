import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { ExperienceEditComponent } from './experience-edit/experience-edit.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { ExperienceComponent } from './experience.component';

const recipesRoutes: Routes = [
  { path: '', component: ExperienceComponent, children: [
    { path: 'new', component: ExperienceEditComponent },
    { path: ':id', component: ExperienceDetailComponent },
    { path: ':id/edit', component: ExperienceEditComponent },
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
export class ExperienceRoutingModule {}
