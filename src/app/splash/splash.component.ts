import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [ProjectService]
})
export class SplashComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  // projectToDisplay: FirebaseObjectObservable<any>;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    // this.projectToDisplay = this.projects[0];
  }

}
