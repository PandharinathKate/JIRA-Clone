import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  projectName : String = "JIRA-Clone";

  navbarItems : Array<String> = ["Home", "Projects", "Tickets", "Contact us"]

  ngOnInit(){

  }

}
