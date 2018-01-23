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
  recipeForm: FormGroup;
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
      this.experienceService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.experienceService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddSkill() {
    (<FormArray>this.recipeForm.get('skills')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'expertise': new FormControl(1, Validators.required)
      })
    );
  }

  onDeleteSkill(index: number) {
    (<FormArray>this.recipeForm.get('skills')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('skills')).controls;
  }

  private initForm() {
    let role = '';
    let company = '';
    let summary = '';
    let startDate = '';
    let endDate = '';
    let city = '';
    let state = '';
    let skills = new FormArray([]);

    // if (this.editMode) {
    //   const recipe = this.experienceService.getRecipe(this.id);
    //   recipeName = recipe.name;
    //   recipeImagePath = recipe.imagePath;
    //   recipeDescription = recipe.description;
    //   if (recipe['ingredients']) {
    //     for (let ingredient of recipe.ingredients) {
    //       recipeIngredients.push(
    //         new FormGroup({
    //           'name': new FormControl(ingredient.name, Validators.required),
    //           'amount': new FormControl(ingredient.amount, [
    //             Validators.required,
    //             Validators.pattern(/^[1-9]+[0-9]*$/)
    //           ])
    //         })
    //       );
    //     }
    //   }
    //}

    this.recipeForm = new FormGroup({
      'role': new FormControl(role, Validators.required),
      'company': new FormControl(company, Validators.required),
      'startDate': new FormControl(startDate, Validators.required),
      'endDate': new FormControl(endDate),
      'summary': new FormControl(summary, Validators.required),
      'city': new FormControl(city, Validators.required),
      'state': new FormControl(state, Validators.required),
      'skills': skills,

    });
  }
}
