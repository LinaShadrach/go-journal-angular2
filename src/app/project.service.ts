import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

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
      this.oldAmount = data.$value;
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
  editProject(projectToEdit: Project, key: string){
    var selectedProject = this.getProjectById(key);
    selectedProject.update({author: projectToEdit.author,
      title: projectToEdit.title,
      category: projectToEdit.category,
      tagLine: projectToEdit.tagLine,
      photos: projectToEdit.photos,
      description: projectToEdit.description,
      destination: projectToEdit.destination,
      endDate: projectToEdit.endDate,
      goal: projectToEdit.goal,
      rewards: projectToEdit.rewards,
      tags: projectToEdit.tags,
    });
  }


}
