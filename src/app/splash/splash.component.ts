import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
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
  popularProjects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private af: AngularFire) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.popularProjects = this.af.database.list('/projects/', {query: {orderByChild: "popularity"}});
    // this.jobs = this.af.database.list("/jobs/", {query: {orderByChild : "companyKey", equalTo:someKey}})
  }

  // filter(project : Project) : boolean{
  //     // Return true if don't want this job in the results.
  //     // e.g. lets filter jobs with price < 25;
  //     if (project.popularity < 15){
  //       return true;
  //     }
  //     return false;
  //  }
}
