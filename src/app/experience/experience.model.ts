export class Experience{
  public company: string;
  public role: string;
  public city: string;
  public state: string;
  public startDate: string;
  public endDate: string;
  public summary: string;
  public skills: string[];

  constructor(company: string,
    role: string,
    city: string,
    state: string,
    startDate: string,
    endDate: string,
    summary: string,
    skills: string[])
  {
    this.company = company;
    this.role = role;
    this.city = city;
    this.state = state;
    this.startDate = startDate;
    this.endDate = endDate;
    this.summary = summary;
    this.skills = skills;
  }
}
