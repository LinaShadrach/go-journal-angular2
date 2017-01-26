import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/take';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  popularProjects: FirebaseListObservable<any[]>;
  projectBackers: FirebaseListObservable<any[]>;
  oldAmount;
  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
    this.popularProjects = this.angularFire.database.list('/projects/', {query: {orderByChild: "popularity", limitToLast: 1}});
  }

  getProjectById(projectId: string) {
    return this.angularFire.database.object('/projects/' + projectId);
  }

  getProjectBackers(projectId: string, name: string, pledge){
    this.projectBackers= this.angularFire.database.list('/projects/' + projectId + '/backers');
    this.projectBackers.push(name);
    var selectedProject = this.getProjectById(projectId);
    var updatedPledge = this.angularFire.database.object('/projects/' + projectId + '/pledged/').subscribe(data => {
      this.oldAmount =data.$value;
    });
    this.oldAmount+=parseInt(pledge);
    selectedProject.update({pledged: this.oldAmount});
  }

  getProjects() {
    return this.projects;
  }
  addProject(newProject: Project) {
    this.projects.push(newProject);
  }
  getMostPopularProject(){
    return this.popularProjects;
  }


}
