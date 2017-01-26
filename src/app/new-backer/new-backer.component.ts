import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-backer',
  templateUrl: './new-backer.component.html',
  styleUrls: ['./new-backer.component.css'],
  providers: [ProjectService]
})
export class NewBackerComponent implements OnInit {
  projectId: string;
  projectToBack;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToBack = this.projectService.getProjectById(this.projectId);
  }

  submitPledge(name:string, pledge: number) {
    var oldAmount = this.projectService.getProjectBackers(this.projectId, name, pledge);

  }

}
