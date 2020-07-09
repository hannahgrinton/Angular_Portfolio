import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  php = true;
  fullstack = false;
  dotnetcore = false;
  vanillajs = false;

  switch(block) {
    if (block == "php") {
      if (!this.php) {
        this.php = true;
        this.fullstack = false;
        this.dotnetcore = false;
        this.vanillajs = false;
      }
    } else if (block == "fullstack") {
      if (!this.fullstack) {
        this.php = false;
        this.fullstack = true;
        this.dotnetcore = false;
        this.vanillajs = false;
      }
    } else if (block == "dotnetcore") {
      if (!this.dotnetcore) {
        this.php = false;
        this.fullstack = false;
        this.dotnetcore = true;
        this.vanillajs = false;
      }
    }else if (block == "vanillajs") {
      if (!this.vanillajs) {
        this.php = false;
        this.fullstack = false;
        this.dotnetcore = false;
        this.vanillajs = true;
      }
    }
  }
}
