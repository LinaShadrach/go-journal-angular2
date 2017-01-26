import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent {
  constructor(private projectService: ProjectService, private router: Router){}
  submitForm(title: string, author: string, category: string, tagLine: string, description: string, goal: number, endDate, destination: string, reward: string, tag: string, photo: string){
    var rewards = [reward];
    var tags = [tag];
    var photos = [photo];
    var newProject = new Project(title, author, category, tagLine, description, goal, endDate, destination, rewards, tags, photos)
    this.projectService.addProject(newProject);
    this.router.navigate(['']);
  }

}
