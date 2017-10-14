import { Component, 
         Inject, 
         OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PLATFORM_ID }      from '@angular/core';
import { isPlatformBrowser, 
         isPlatformServer } from '@angular/common';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.scss' ],
  providers: [ NgbCarouselConfig ]
})
export class HomepageComponent implements OnInit {
  public isBrowser = false;
  public currentDate = new Date();
  public currentYear = this.currentDate.getFullYear();

  constructor(
    private config: NgbCarouselConfig,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
  }
}