import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let gtag:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'website';

  constructor(private router:Router) 
  {
  	 this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
      	console.log("I was supposed to do something useful")
        gtag('set', 'page', event.urlAfterRedirects);
        gtag('send', 'pageview');
      }
  	});
  }

  ngOnInit(): void 
  {
  	console.log("App component was initialized")
  }
}
