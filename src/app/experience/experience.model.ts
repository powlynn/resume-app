import { Skill, SkillExpertise }  from './skill.model';

export class Experience{
  public company: string;
  public role: string;
  public city: string;
  public state: string;
  public startDate: string;
  public endDate: string;
  public source: string;
  public summary: string;
  public videoUrls: string[];
  public skills: Skill[];

  constructor(company: string,
    role: string,
    city: string,
    state: string,
    startDate: string,
    endDate: string,
    source: string,
    summary: string,
    videoUrls: string[],
    skills: Skill[])
  {
    this.company = company;
    this.role = role;
    this.city = city;
    this.state = state;
    this.startDate = startDate;
    this.endDate = endDate;
    this.source = source;
    this.summary = summary;
    this.skills = skills;
    this.videoUrls = videoUrls;

    this.ExpertSkills = this.skills.filter(s => s.expertise === SkillExpertise.Expert);
    this.ModerateSkills = this.skills.filter(s => s.expertise === SkillExpertise.Moderate);
    this.BeginnerSkills = this.skills.filter(s => s.expertise === SkillExpertise.Beginner);
  }

  public ExpertSkills: Skill[];
  public ModerateSkills: Skill[];
  public BeginnerSkills: Skill[];
}
