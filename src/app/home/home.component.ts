import { Component } from '@angular/core';
import { Project } from '../project/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title : string = "My Projects";
  projects : Array<Project> = [];
  ticketNav : Array<String> = ["Work Completed", "Assigned to me", "Other"];

  ngOnInit(){
    this.projects = [
      {ProjectId : 1, ProjectName : "Stacks", Description: "Stacks project description"},
      {ProjectId : 2, ProjectName : "AssurX"}
    ]
  }

}
