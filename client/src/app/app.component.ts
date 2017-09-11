import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class AppComponent {

  public title = 'kuzmicheff.com';
  public currentDate = new Date();
  public currentYear = this.currentDate.getFullYear();

  constructor(
    private config: NgbCarouselConfig
  ) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
  }
}
