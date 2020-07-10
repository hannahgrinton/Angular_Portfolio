import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //text
  home = false;
  about = false;
  skills = false;
  projects = false;
  contact = false;
  //icons
  homeIcon = true;
  aboutIcon = true;
  skillsIcon = true;
  projectsIcon = true;
  contactIcon = true;

  changeHome(bool) {
    if(bool) {
      this.home = true;
      this.homeIcon = false;
    } else {
      this.home = false;
      this.homeIcon = true;
    }
  }
  changeAbout(bool) {
    if(bool) {
      this.about = true;
      this.aboutIcon = false;
    } else {
      this.about = false;
      this.aboutIcon = true;
    }
  }
  changeSkills(bool) {
    if(bool) {
      this.skills = true;
      this.skillsIcon = false;
    } else {
      this.skills = false;
      this.skillsIcon = true;
    }
  }
  changeProjects(bool) {
    if(bool) {
      this.projects = true;
      this.projectsIcon = false;
    } else {
      this.projects = false;
      this.projectsIcon = true;
    }
  }
  changeContact(bool) {
    if(bool) {
      this.contact = true;
      this.contactIcon = false;
    } else {
      this.contact = false;
      this.contactIcon = true;
    }

  }
}
