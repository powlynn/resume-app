import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';
import { Experience } from '../experience.model';
import { Recipe } from '../recipe.model';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {
  experience: any;
  id: number;
  sourceSafeUrl: SafeUrl;
  videoSafeUrls: SafeUrl[];

  constructor(private experienceService: ExperienceService,
              private route: ActivatedRoute,
              private router: Router,
              private domSanitizer: DomSanitizer,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.experience = this.experienceService.getExperience(params['id']);
        }
      );
  }

  editExperience() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
}
