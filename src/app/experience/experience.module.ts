import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceEditComponent } from './experience-edit/experience-edit.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { ExperienceItemComponent } from './experience-list/experience-item/experience-item.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SafePipe } from '../shared/pipes/safe.pipe';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';

@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceListComponent,
    ExperienceEditComponent,
    ExperienceDetailComponent,
    ExperienceItemComponent,
    SafePipe,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExperienceRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}
