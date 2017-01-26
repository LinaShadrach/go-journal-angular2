export class Project {
  public pledged: number = 0;
  public popularity: number = 0;
  public backers: string[];
  constructor(public title: string, public author: string, public category: string, public tagLine: string, public description: string, public goal: number, public endDate,  public destination: string, public rewards: string[], public tags: string[], public photos: string[]){}
}
