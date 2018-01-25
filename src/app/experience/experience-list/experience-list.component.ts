import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Experience } from '../experience.model'
import { Recipe } from '../recipe.model';
import { ExperienceService } from '../experience.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit, OnDestroy {
  experiences: any = [];
  subscription: Subscription;

  constructor(private experienceService: ExperienceService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.experienceService.experienceChanged
      .subscribe(
        (experiences: any []) => {
          this.experiences = experiences;
        }
      );
    this.experiences = this.experienceService.getExperiences();
  }

  newExperience() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
