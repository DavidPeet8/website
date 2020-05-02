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
      	gtag('config', 'UA-133496735-2', {'page_path': event.urlAfterRedirects});
      }
  	});
  }

  ngOnInit(): void 
  {
  	console.log("App component was initialized")
  }
}
