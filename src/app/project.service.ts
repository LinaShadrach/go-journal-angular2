import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  popularProjects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
    this.popularProjects = this.angularFire.database.list('/projects/', {query: {orderByChild: "popularity", limitToLast: 1}});
  }

  getProjects() {
    return this.projects;
  }
  getMostPopularProject(){
    return this.popularProjects;
  }
  getProjectById(projectId: string) {
    return this.angularFire.database.object('/projects/' + projectId);
  }

}
