import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Experience } from './experience.model';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../education/shopping-list.service';

@Injectable()
export class ExperienceService {
  recipesChanged = new Subject<Experience[]>();

  private experiences: Experience[] = [
    new Experience(
      'RFID Library Solutions (through Solutia)',
      'Sofware Developer/Associate Consultant',
      'Maple Grove',
      'MN',
      'June 2016',
      'present',
      'Wrote multi-threaded desktop conveyor management system in C#. Designed user interface in WPF, implementing the Model View View-Model framework. Built several processes that communicated with outside data sources (off-site servers, RFID readers, PLC conveyor systems). Was part of a two-developer team and collaborated one-on-one with the owner, helping decide which functionalities to implement, exclude, and improve. Experienced the entire SDLC including gathering requirements, design, development, testing, and implementing, while developing throughout the entire stack.',
      [
        'C#',
        'SQL Server',
        'WPF',
        'Visual Studio',
        'XAML',
        'MVVM Light',
        '.NET Framework',
        'Visual Basic',
        'LINQ',
        'Syncfusion',
        'Entity Framework',
      ]
    ),
    new Experience(
      'Solutia Consulting (through Solutia)',
      'Sofware Developer/Associate Consultant',
      'Minneapolis',
      'MN',
      'January 2016',
      'June 2016',
      'Helped develop internal web application for Solutia Consulting called Intersect. The application is a sales and recruiting management system to be used by Solutia management and recruiters. Fixed various bugs in the application and also implemented new functionalities – namely working with Sovren on a resume parser that stores valuable data extracted from a candidate’s resume.',
      [
        'C#',
        'SQL Server',
        'WPF'
      ]
    ),
    new Experience(
      'Menards, Inc.',
      'Java Developer Intern',
      'Eau Claire',
      'WI',
      'June 2015',
      'December 2015',
      'Collaborated with fulltime developers and Bas to make improvements to Menards.com. Created dynamic web applications using Java, Spring framework, and Velocity templates. Performed routine maintenance and bug fixes to Menards.com. Developed test plans and thoroughly test and debug all programs prior to implementation. Work through entire development lifecycle including creating design specifications, coding, testing and deployment.',
      [
        'C#',
        'SQL Server',
        'WPF'
      ]
    )
  ]

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ]),
  //   new Recipe('Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1)
  //     ])
  // ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(experiences: Experience[]) {
    this.experiences = experiences;
    this.recipesChanged.next(this.experiences.slice());
  }

  getRecipes() {
    return this.experiences.slice();
  }

  getRecipe(index: number) {
    return this.experiences[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(experience: Experience) {
    this.experiences.push(experience);
    this.recipesChanged.next(this.experiences.slice());
  }

  updateRecipe(index: number, newRecipe: Experience) {
    this.experiences[index] = newRecipe;
    this.recipesChanged.next(this.experiences.slice());
  }

  deleteRecipe(index: number) {
    this.experiences.splice(index, 1);
    this.recipesChanged.next(this.experiences.slice());
  }
}
