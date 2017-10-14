import { Component, 
         Inject, 
         OnInit }           from '@angular/core';
import { Router, 
         NavigationEnd }    from '@angular/router';
import { Meta, 
         Title }            from '@angular/platform-browser';
import { PLATFORM_ID }      from '@angular/core';
import { isPlatformBrowser, 
         isPlatformServer } from '@angular/common';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public windowTitle = "Andre Kuzmicheff";
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.windowTitle);

    this.metaService.addTags([
      { name: 'author', content: 'www.glowingmind.net' },
      { name: 'keywords', content: 'graphic designer, web designer, web developer, software developer, project manager'},
      { name: 'description', content: 'Andre Kuzmicheff is a freelance web designer and developer in Madison, WI. Andre has been building web apps for clients in Dane County since 2007.'},
    ]);
    
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        ga('set', 'page', evt.urlAfterRedirects);
        ga('send', 'pageview');
        window.scrollTo(0, 0);
      });
    }
  }
}