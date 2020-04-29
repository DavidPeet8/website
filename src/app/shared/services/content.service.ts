import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  data = {
  	'about': {},
  	'config': {},
  	'experience': {},
  	'projects': {},
  	'header': {}
  };
  grey:string="#292929";

  constructor(private router: Router) {
  	this.data['header'] = this._getHeader();
  	this.data['about'] = this._getAbout();
  	this.data['config'] = this._getConfig();
  	this.data['experience'] = this._getExperience();
  	this.data['projects'] = this._getProjects();
  }

  getData(arrayOfKeys): Object
  {
  	let ret = this.data;
  	for (let key of arrayOfKeys) 
  	{
  		ret = ret[key];
  	}
  	return ret;
  }

  getForContext()
  {
    // Fetch the URL as an array, return getData(thatArray)
    return this.getData(this.router.url.slice(1).split('/'));
  }

  _createContentObject(name, position, dateRange, location, imgPath, companyURL, tags, content, modalContent, cssObj, partialURI = ""): Object
  {
    return {
      'name': name,
      'position': position,
      'dateRange': dateRange,
      'location': location,
      'imgPath': imgPath,
      'companyURL': companyURL,
      'tags': tags,
      'content': content,
      'modalContent': modalContent,
      'css': cssObj,
      'partialURI': partialURI
    };
  }

  _getHeader(): Object
  {
  	return {
  		'mainHeader': 'Developer.',
  		'expressionLine': 'I google better than the occasional bear',
      'imgPath': 'url("assets/img/codesnippet-min.jpg")'
  	};
  } 

  _getAbout(): Object
  {
  	return {
  		'name': 'David', 
  		'imgPath': 'assets/img/profile2-min.jpg', // Relative path
  		'schoolTerm': '2B', // Ex. 2B
  		'internshipDate': 'Fall 2020 (Sept-Dec)',
  	};
  }

  _getConfig(): Object 
  {
  	return {
  		'faviconPath': './favicon.ico',
  		'resumePath': 'assets/docs/resume.pdf',
  		'windowTitle': 'David Peet',
  		'links': {
  			'github': 'https://github.com/DavidPeet8',
  			'linkedIn': 'https://www.linkedin.com/in/dapeet/',
  			'email': 'davidpeetw@gmail.com',
  			'phone': '226-505-7050'
  		},
  	};
  }

  _getExperience(): Object
  {
  	return {
      'mcafee': this._createContentObject(
        'McAfee',
        'Software Developer',
        'Jan 2020 - Apr 2020', 
        'Waterloo, Ontario', 
        'assets/img/mcafee.png', 
        'https://www.mcafee.com/', 
        ['C/C++', 'Bash', 'Win32API', 'Angular', 'CEF'], 
        {
          'splash': 'Improved product installers by profiling compiled binaries and solving critical issues including unnecessary device reboots',
          'details': []
        }, 
        {},
        { 'color': this.grey, 'display': 'block' }
      ),
  		'axonify': this._createContentObject(
        'Axonify',
        'Software Developer',
        'May 2019 - Aug 2019',
        'Waterloo, Ontario',
        'assets/img/axonify-min.jpg',
        'https://axonify.com/',
        ['Java', 'JS', 'Hibernate', 'Backbone.js', 'Make'],
        {
          'splash': 'Constructed impactful product features by leveraging Hibernate ORM, RESTful data transfer, and Backbone.js',
          'details': []
        },
        {},
        { 'color': this.grey, 'display': 'block' }
      ),
  		'sobeys': this._createContentObject(
        'Sobeys',
        'Deli Staff',
        '2017 - 2018',
        'Waterloo, Ontario',
        'assets/img/sobeys-min.jpg',
        'https://www.sobeys.com/',
        ['Team Work'],
        {
          'splash': 'Positively impacted team work environment assisting team members and serving customers',
          'details': ['oof']
        },
        {},
        { 'color': this.grey, 'display': 'block' }
      ),
  		'playhouse': this._createContentObject(
        'St. Jacobs Playhouse',
        'Usher',
        '2013 - 2018',
        'St. Jacobs, Ontario',
        'assets/img/playhouse-min.jpg',
        'https://www.draytonentertainment.com/',
        ['Team Work'],
        {
          'splash': 'Escorted customers to their seats and marketed house sales',
          'details': []
        },
        {},
        { 'color': this.grey, 'display': 'block' }
      )
  	};
  }

  _getProjects(): Object
  {
  	return {
  		'memcheck': this._createContentObject(
        'MEMCHECK SHIM',
        null,
        2020,
        null,
        '',
        null,
        ['C++', 'Shared Libraries', 'Syscalls', 'Kernel'],
        {
          'splash': 'Software shim intercepting library calls to allocate heap memory before they reach the standard library allowing monitoring of memory consumption',
          'details': []
        },
        {
          imgSrc: [],
          description: `
            This project is a memcheck shim, a piece of code that lies between an executing application and shared libraries that that application uses. My memcheck shim is meant to implement memory leak detection features similar to valgrind, but only implement leak checking, not other error checking that Valgrind supplies. 
          `,
          improvements: "",
          details: []
         },
        { 'color': 'white', 'display': 'none' },
        '/memcheck'
      ),
  		'website': this._createContentObject(
        'PERSONAL WEBSITE',
        null,
        2020,
        null,
        'assets/img/website-min.PNG',
        null,
        ['JS', 'Angular', 'HTML', 'Sass'],
        {
          'splash': 'Website displaying my passions and accomplishments',
          'details': []
        },
        {
          imgSrc: ['assets/img/terraria.PNG', 'assets/img/git-branch-hierarchy.png'], 
          description: `
            My personal website served both as an introduction to Angular 9 and also a way of updating my previous website to increase maintainability. My previous websites have been composed of only the base web languages HTML, CSS, and JS. While I gained a deep understanding of those languages throughout previous website iterations, those sites lacked maintainability due to the nature of HTML and CSS (Far more copy paste than is acceptable).
          `, 
          improvements: ['Idea is to prevent need for future improvements, allowing me to simply update content and not spend extra time on my website'], 
          details: [
            'Leveraged Angular 9 to create mantainable, scalable code',
            'Used Sass - precompiled CSS to improve styling maintainability'
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/website'
      ),
  		'banking-payment-tracker': this._createContentObject(
        'BANKING PAYMENT TRACKER',
        null,
        2019,
        null,
        '',
        null,
        ['Java', 'Spring', 'REST API', 'Postgresql'],
        {
          'splash': 'Tracks banking payments utilizing Postgresql for data persistance and Java Spring for RESTful endpoints',
          'details': []
        },
        {
          imgSrc: [], 
          description: "", 
          improvements: "", 
          details: []
        },
        { 'color': 'white', 'display': 'block' },
        '/banking-payment-tracker'
      ),
  		'git-branch-hierarchy': this._createContentObject(
        'GIT BRANCH HIERARCHY',
        null,
        2019,
        null,
        'assets/img/git-branch-hierarchy.png',
        null,
        ['Git', 'Java'],
        {
          'splash': 'This project tracks the parents of new branches that are created or deleted to assist in generating diffs for code reviews',
          'details': []
        },
        {imgSrc: [], description: "", improvements: "", details: []},
        { 'color': 'white', 'display': 'block' },
        '/git-branch-hierarchy'
      ),
  		'highlight-sights': this._createContentObject(
        'HIGHLIGHT SIGHTS',
        null,
        2019,
        null,
        'assets/img/highlight-sights.png',
        null,
        ['JS'],
        {
          'splash': 'Chrome browser extension that highlights google search results from endpoints that the user has specified to be important in various colors',
          'details': []
        },
        {imgSrc: [], description: "", improvements: "", details: []},
        { 'color': 'white', 'display': 'block' },
        '/highlight-sights'
      ),
  		'new-tab-page': this._createContentObject(
        'EASY ACCESS NEWTAB PAGE',
        null,
        2018,
        null,
        'assets/img/newtab.png',
        null,
        ['JS', 'Firebase', 'HTML', 'CSS'],
        {
          'splash': 'Emulation of popular game Terraria, turned into a windows meme',
          'details': []
        },
        {imgSrc: [], description: "", improvements: "", details: []},
        { 'color': 'white', 'display': 'block', 'background-position': '50% 0%' },
        '/new-tab-page'
      ),
  		'terraria': this._createContentObject(
        'TERRARIA EMULATION',
        null,
        2017,
        null,
        'assets/img/terraria.PNG',
        null,
        ['Java', 'LibGDX', 'Box2D'],
        {
          'splash': 'Emulation of popular game Terraria, turned into a windows meme',
          'details': []
        },
        {imgSrc: [], description: "", improvements: "", details: []},
        { 'color': 'white', 'display': 'block' },
        '/terraria'
      ),
  	};
  }
}
