import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Experience } from '../experience.model';
import { Recipe } from '../recipe.model';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {
  experience: Experience;
  id: number;
  sourceSafeUrl: SafeUrl;

  constructor(private experienceService: ExperienceService,
              private route: ActivatedRoute,
              private router: Router,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    console.log('bam');
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.experience = this.experienceService.getRecipe(this.id);
        }
      );

    this.sourceSafeUrl = this.domSanitizer.bypassSecurityTrustHtml(this.experience.source);
  }

  // onAddToShoppingList() {
  //   this.experienceService.addIngredientsToShoppingList(this.experience.ingredients);
  // }

  editExperience() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.experienceService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
