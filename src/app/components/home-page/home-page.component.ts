import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  
  role : string = '';

  roles : string[];

  constructor() {
    this.roles = [
      '10th pass',
      'Diploma',
      'Graduate',
      'Post Graduate',
      'PhD'
    ];
    

  }

}
