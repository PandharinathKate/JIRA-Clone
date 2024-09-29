import { Component } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  title : string = "All Projects";
  projects : Array<Project> = [];

  ngOnInit(){
    this.projects = [
      {ProjectId : 1, ProjectName : "Stacks", Description: "Stacks project description"},
      {ProjectId : 2, ProjectName : "AssurX"},
      {ProjectId : 3, ProjectName : "Scrbble"},
      {ProjectId : 4, ProjectName : "Smart Code"},
      {ProjectId : 1, ProjectName : "Stacks", Description: "Stacks project description"},
      {ProjectId : 2, ProjectName : "AssurX"},
      {ProjectId : 3, ProjectName : "Scrbble"},
      {ProjectId : 4, ProjectName : "Smart Code"}
    ]
  }

}
