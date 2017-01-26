import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }
  projectId: string;
  projectToEdit;
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToEdit = this.projectService.getProjectById(this.projectId);
  }
  submitEdit(title: string, author: string, category: string, tagLine: string, description: string, goal: number, endDate, destination: string, reward: string, tag: string, photo: string){

    var rewards = reward.split(',');
    var tags = tag.split(',');
    var photos = ["http://www.medievalarchives.com/wp-content/uploads/2011/07/15castle_france_fr6.jpg"];
    var tempProject = new Project(title, author, category, tagLine, description, goal, endDate, destination, rewards, tags, photos)
    this.projectService.editProject(tempProject, this.projectId);
    this.router.navigate(['projects', this.projectId]);
  }

}
