import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { MostPopularPipe } from '../most-popular.pipe';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [ProjectService]
})
export class SplashComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  mostPopularProject: FirebaseListObservable<any[]>;
  popularProjects: FirebaseListObservable<any[]>;
  constructor(private router: Router, private projectService: ProjectService, private af: AngularFire) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.mostPopularProject = this.projectService.getMostPopularProject();
    this.popularProjects = this.projectService.getPopularProjects();
  }
  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }
}
