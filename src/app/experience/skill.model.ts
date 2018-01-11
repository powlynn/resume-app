export enum SkillExpertise{
  Beginner = 1,
  Moderate = 2,
  Expert = 3,
}

export class Skill{
  public name: string;
  public expertise: SkillExpertise;

  constructor(name: string, expertise: SkillExpertise)
  {
    this.name = name;
    this.expertise = expertise;
  }
}
