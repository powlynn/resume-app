import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { ExperienceItemComponent } from './experience-list/experience-item/experience-item.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    ExperienceListComponent,
    RecipeEditComponent,
    ExperienceDetailComponent,
    ExperienceItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}
