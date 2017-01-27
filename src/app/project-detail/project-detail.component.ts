import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId : string;
  projectToDisplay;
  backersCount;

  constructor(private router: Router, private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
    this.projectToDisplay.subscribe(data=>{
      this.backersCount = Object.keys(data.backers).length;
    });
  }
  addNewBacker() {
    this.router.navigate([this.projectId, 'new-backer']);
  }
  goToEditPage() {
    this.router.navigate([this.projectId, 'edit-project']);
  }

}
