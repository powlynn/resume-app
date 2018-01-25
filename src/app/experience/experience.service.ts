import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Skill, SkillExpertise } from './skill.model';
import { Experience } from './experience.model';
import { DataService } from '../shared/data.service';

@Injectable()
export class ExperienceService{
  experienceChanged = new Subject<Experience[]>();
  experiences: any = [];

  constructor(private dataService: DataService) {}

  // private experiences: Experience[] = [
  //   new Experience(
  //     'RFID Library Solutions (through Solutia)',
  //     'Sofware Developer/Associate Consultant',
  //     'Maple Grove',
  //     'Minnesota',
  //     'June 2016',
  //     null,
  //     null,
  //     'Wrote multi-threaded desktop conveyor management system in C#. Designed user interface in WPF, implementing the Model View View-Model framework. Built several processes that communicated with outside data sources (off-site servers, RFID readers, PLC conveyor systems). Was part of a two-developer team and collaborated one-on-one with the owner, helping decide which functionalities to implement, exclude, and improve. Experienced the entire SDLC including gathering requirements, design, development, testing, and implementing, while developing throughout the entire stack.',
  //     [
  //       "https://www.youtube.com/embed/iJEJWAvg-gc",
  //       "https://www.youtube.com/embed/WlUBEql0cH8"
  //     ],
  //     [
  //       new Skill('C#', SkillExpertise.Expert),
  //       new Skill('SQL Server', SkillExpertise.Expert),
  //       new Skill('WPF', SkillExpertise.Expert),
  //       new Skill('Visual Studio', SkillExpertise.Expert),
  //       new Skill('XAML', SkillExpertise.Expert),
  //       new Skill('MVVM Light', SkillExpertise.Moderate),
  //       new Skill('.NET Framework', SkillExpertise.Moderate),
  //       new Skill('Visual Basic', SkillExpertise.Moderate),
  //       new Skill('LINQ', SkillExpertise.Moderate),
  //       new Skill('Syncfusion', SkillExpertise.Beginner),
  //       new Skill('Entity Framework', SkillExpertise.Moderate),
  //     ]
  //   ),
  //   new Experience(
  //     'Solutia Consulting (through Solutia)',
  //     'Sofware Developer/Associate Consultant',
  //     'Minneapolis',
  //     'Minnesota',
  //     'January 2016',
  //     'June 2016',
  //     null,
  //     'Helped develop internal web application for Solutia Consulting called Intersect. The application is a sales and recruiting management system to be used by Solutia management and recruiters. Fixed various bugs in the application and also implemented new functionalities – namely working with Sovren on a resume parser that stores valuable data extracted from a candidate’s resume.',
  //     null,
  //     [
  //       new Skill('C#', SkillExpertise.Expert),
  //       new Skill('AngularJS (1)', SkillExpertise.Expert),
  //       new Skill('Visual Studio', SkillExpertise.Expert),
  //       new Skill('HTML', SkillExpertise.Expert),
  //       new Skill('CSS', SkillExpertise.Expert),
  //       new Skill('Javascript', SkillExpertise.Expert),
  //       new Skill('SQL Server', SkillExpertise.Expert),
  //       new Skill('Zurb Foundation', SkillExpertise.Beginner)
  //     ]
  //   ),
  //   new Experience(
  //     'Menards, Inc.',
  //     'Java Developer Intern',
  //     'Eau Claire',
  //     'Wisconsin',
  //     'June 2015',
  //     'December 2015',
  //     null,
  //     'Collaborated with fulltime developers and Bas to make improvements to Menards.com. Created dynamic web applications using Java, Spring framework, and Velocity templates. Performed routine maintenance and bug fixes to Menards.com. Developed test plans and thoroughly test and debug all programs prior to implementation. Work through entire development lifecycle including creating design specifications, coding, testing and deployment.',
  //     null,
  //     [
  //       new Skill('Java', SkillExpertise.Moderate),
  //       new Skill('Javascript', SkillExpertise.Moderate),
  //       new Skill('SQL Server', SkillExpertise.Expert),
  //       new Skill('Spring', SkillExpertise.Beginner),
  //       new Skill('Hibernate', SkillExpertise.Beginner),
  //       new Skill('Eclipse', SkillExpertise.Moderate),
  //     ]
  //   )
  // ]

  setExperiences(experiences: any[]) {
    this.experiences = experiences;
    this.experienceChanged.next(this.experiences.slice());
  }

  getExperiences() {
    return this.dataService.getAllExperiences().subscribe(data => {
      this.experiences = data;
      this.setExperiences(this.experiences);
    });
  }

  getExperience(index: number) {
    return this.experiences[index];
  }

  addExperience(experience: Experience) {
    this.experiences.push(experience);
    this.experienceChanged.next(this.experiences.slice());
  }

  updateExperience(index: number, newRecipe: Experience) {
    this.experiences[index] = newRecipe;
    this.experienceChanged.next(this.experiences.slice());
  }

  deleteExperience(index: number) {
    this.experiences.splice(index, 1);
    this.experienceChanged.next(this.experiences.slice());
  }
}
