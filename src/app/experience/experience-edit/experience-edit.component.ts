import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { SkillExpertise } from '../skill.model'
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {
  id: number;
  editMode = false;
  experienceForm: FormGroup;
  skillExpertises: SkillExpertise;

  constructor(private route: ActivatedRoute,
              private experienceService: ExperienceService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.experienceService.updateExperience(this.id, this.experienceForm.value);
    } else {
      this.experienceService.addExperience(this.experienceForm.value);
    }
    this.onCancel();
  }

  onAddSkill() {
    (<FormArray>this.experienceForm.get('skills')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteSkill(index: number) {
    (<FormArray>this.experienceForm.get('skills')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  getControls() {
    return (<FormArray>this.experienceForm.get('skills')).controls;
  }

  private initForm() {
    let role = '';
    let company = '';
    let summary = '';
    let startDate = '';
    let endDate = '';
    let source = '';
    let city = '';
    let state = '';
    let skills = new FormArray([]);

    if (this.editMode) {
      const experience = this.experienceService.getExperience(this.id);
      role = experience.role;
      company = experience.company;
      summary = experience.summary;
      startDate = experience.startDate;
      endDate = experience.endDate;
      city = experience.city;
      state = experience.state;
      source = experience.source;

      if (experience['skills']) {
        for (let skill of experience.skills) {
          skills.push(
            new FormGroup({
              'name': new FormControl(skill.name, Validators.required)
            })
          );
        }
      }
    }

    this.experienceForm = new FormGroup({
      'role': new FormControl(role, Validators.required),
      'company': new FormControl(company, Validators.required),
      'startDate': new FormControl(startDate, Validators.required),
      'endDate': new FormControl(endDate),
      'summary': new FormControl(summary, Validators.required),
      'city': new FormControl(city, Validators.required),
      'state': new FormControl(state, Validators.required),
      'skills': skills,
      'source': new FormControl(source)
    });
  }
}
