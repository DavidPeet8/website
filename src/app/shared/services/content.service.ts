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

  getData(arrayOfKeys)
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

  _createContentObject(name, position, dateRange, location, imgPath, url, tags, content, modalContent, cssObj, partialURI = ""): Object
  {
    return {
      'name': name,
      'position': position,
      'dateRange': dateRange,
      'location': location,
      'imgPath': imgPath,
      'url': url,
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
  			'email': 'dapeet@uwaterloo.ca',
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
        ['C/C++', 'Bash', 'WinAPI', 'Angular', 'CEF'], 
        {
          'splash': 'Intern on the Installer team. Contributed to main product installers and related components including Windows System Security and McAfee Gamer Security',
          'details': [
            'Improved product installers by <b>profiling compiled binaries</b> in search of bottlenecks',
            'Solved critical issues shipping to <b>500+ million users</b>',
            '<b>Prevented unnecessary forced device reboots</b> affecting millions of customers globally'
          ]
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
        ['Java', 'JS', 'Hibernate', 'Backbone.js'],
        {
          'splash': 'Constructed new, impactful product features by leveraging Hibernate ORM, RESTful data transfer, and Backbone.js',
          'details': [
            'Developed <b>RESTful API endpoints</b> and extended functionality of legacy endpoints',
            '<b>Spearheaded</b> client side <b>development</b> for large <b>features, shipping to 100 000+ users</b> worldwide',
            'Leveraged <b>Mockito & JUnit</b> allowing for simple unit testing'
          ]
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
          'splash': 'Positively impacted team work environment by assisting team members and serving customers',
          'details': []
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
        'assets/img/website.png',
        'https://github.com/DavidPeet8/website',
        ['JS', 'Angular', 'HTML', 'Sass'],
        {
          'splash': 'Website displaying my passions and accomplishments',
          'details': []
        },
        {
          imgSrc: ['assets/img/website2.png', 'assets/img/website3.png', 'assets/img/website4.png'], 
          description: `
            Creating my personal website served both as an introduction to Angular 9 and a way of updating my previous website to increase maintainability. My previous websites have been composed of only the base web languages HTML, CSS, and JS. While I gained a deep understanding of those languages throughout previous website iterations, those sites lacked maintainability due to the poor reusability of both HTML and CSS.
          `, 
          improvements: ['Idea is to prevent need for future improvements, allowing me to simply update content and not spend extra time on my website'], 
          details: [
            'Leveraged Angular 9 to create mantainable, scalable code',
            'Utilized Sass - precompiled CSS to improve styling maintainability',
            'Employed routing, improving separation of concerns'
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
        'assets/img/coin-magnet.jpg',
        'https://github.com/DavidPeet8/Banking-Payment-Tracker',
        ['Java', 'Spring', 'REST', 'Postgresql'],
        {
          'splash': 'Tracks banking payments utilizing Postgresql for data persistance and Java Spring for RESTful endpoints',
          'details': []
        },
        {
          imgSrc: [], 
          description: "This app was designed to give me some experience developing REST API's and programmatically interfacing with relational database software.", 
          improvements: [
            'Implement a UI for easier use',
          ], 
          details: [
            'Leverages Java <b>Spring</b> to expose <b>API endpoints</b>',
            'Utilizes <b>RESTful data transfer</b> to return data to caller',
            'Utilizes <b>Relational Database</b> for storage due to relational nature of banking data'
          ]
        },
        { 'color': 'white', 'display': 'block', 'background-position': '50% 40%' },
        '/banking-payment-tracker'
      ),

  		'git-branch-hierarchy': this._createContentObject(
        'GIT BRANCH HIERARCHY',
        null,
        2019,
        null,
        'assets/img/git-branch-hierarchy.png',
        'https://github.com/DavidPeet8/Git-Branch-Hierarchy',
        ['Git', 'Java'],
        {
          'splash': 'Terminal utility tracking the parent-child relationship of git branches assisting in generating correct diffs for code reviews',
          'details': []
        },
        {
          imgSrc: ['assets/img/git-branch-hierarchy-square.png'], 
          description: 'Git branch hierarchy solves the issue of remembering the parent branch for a feature branch when trying to create a code review. Git stores branches in a flat list format, which effectively removes information about the base branch for any given branch. Without extra tooling, developers need to keep track of the branch tree for their local repository themselves. In projects where one developer is simultaneously working on multiple branches or is waiting for changes from another team, it becomes difficult to keep track of the branch tree. This scenario was the inspiration for this project. This project serves as a replacement for the Git branch command, but only supporting branch creation and deletion.', 
          improvements: [
            'Look into overwriting the Git namespace allowing for identical command line interface',
            'Support additional flags for the "git branch" command'
          ], 
          details: [
            'Leverages the Java <b>serializable interface</b> for <b>persisting</b> branch <b>structure</b>',
            'Applies <b>IPC</b> to <b>retrieve</b> the current branch and other <b>state information</b>'
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/git-branch-hierarchy'
      ),

  		'highlight-sites': this._createContentObject(
        'HIGHLIGHT SITES',
        null,
        2019,
        null,
        'assets/img/highlight-sites.png',
        'https://github.com/DavidPeet8/Highlight-Sites',
        ['JS', 'JQuery', "CSS"],
        {
          'splash': 'Browser extension enabling fast parsing of  google search results by highlighting results from user specified endpoints',
          'details': []
        },
        {
          imgSrc: [], 
          description: "Highlight Sites was written to assist my development workflow. When googling the implementation of anything, especially with markup, there are a few sites that have routinely proved to be more useful than all others. I created Highlight Sites to allow me to quickly locate search results that I would likely find useful.", 
          improvements: [
            'Consider cleaning up the DOM queries, methods of applying styles to individual search results are a bit janky'
          ], 
          details: [
            'Leveraged <b>JQuery</b> for DOM manipulation'
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/highlight-sites'
      ),

  		'new-tab-page': this._createContentObject(
        'EASY ACCESS NEWTAB PAGE',
        null,
        2018,
        null,
        'assets/img/newtab.png',
        'https://github.com/DavidPeet8/NewTabPage2',
        ['JS', 'Firebase', 'HTML', 'CSS'],
        {
          'splash': 'Beautiful custom Chrome NewTab page providing hotkeys and personal memos',
          'details': []
        },
        {
          imgSrc: ['assets/img/newtab-min.PNG'], 
          description: "Easy Access NewTab Page is a beautiful newtab page designed to have a personal touch while providing increased functionality. This newtab page includes hotkeys to launch favourite websites and personal memos to keep track of tasks to do today.", 
          improvements: [
            'Sanitize user input to prevent script injection attacks',
            'Improve scalability for different browser window sizes'
          ], 
          details: [
            'Leveraged <b>Firebase</b> to persist daily memos which reset at the end of the day',
          ]
        },
        { 'color': 'white', 'display': 'block', 'background-position': '50% 0%' },
        '/new-tab-page'
      ),

  		'terraria': this._createContentObject(
        'TERRARIA EMULATION',
        null,
        2017,
        null,
        'assets/img/terraria.PNG',
        'https://github.com/DavidPeet8/Terraria',
        ['Java', 'LibGDX', 'Box2D'],
        {
          'splash': 'Emulation of popular game Terraria with a flare of Microsoft Windows comedy',
          'details': []
        },
        {
          imgSrc: ['assets/img/terraria1-min.PNG', 'assets/img/terraria2-min.PNG'], 
          description: "My Terraria Emulation was inspired by the game Terraria. The goal of this project was to implement core features of the game while keeping a casual feel, which turned into a Windows parody.", 
          improvements: [
            'Implement <b>enemy collision detection and damage</b> (as well as different images for player vs enemies)',
            'Write equipment crafting mechanics',
            'Remove world boundaries, implement <b>runtime random terrain generation</b> allowing for an infinite map',
            'Provide an <b>admin mode</b> for testing purposes - provide one hit kill for both enemies and resources'
          ], 
          details: [
            'Utilizes <b>Perlin Noise</b> to implement pseudo-random terrain generation and resource distribution',
            'Implements <b>discrete hit detection</b>, preventing the classic <b>bullet through paper</b> problem',
            'Supports Terraria basics such as <b>resource mining</b> and <b>collection</b>, resource <b>placement</b>, inventory item selection, and item location swapping in the inventory',

          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/terraria'
      ),

      'line-bot': this._createContentObject(
        'ANALOGUE LINE FOLLOWING ROBOT',
        null,
        2014,
        null,
        'assets/img/linebot2.png',
        null,
        ['C', 'Circuit Components', 'PWM', 'RealTime Programming'],
        {
          'splash': 'Line Following Robot with digital and analogue modes',
          'details': []
        },
        {
          imgSrc: ['assets/img/linebot-min.JPG'], 
          description: "This Robot applies knowledge of circuit design and hardware components combined with instructions written in C to either smoothly (analogue mode) or choppily (digital mode) follow a line.", 
          improvements: [
            'Implement the ability to roam in search of a line if started without a line to follow'
          ], 
          details: [
            'Utilizes <b>PWM</b> (Pulse Width Modulation) to <b>overcome low power motors</b> - performance is poor when motors are running below 100% power',
            'Manages <b>memory and CPU limitations</b> by considering loop and function call time overhead, as well as efficient memory usage',
            'Applies knowledge of circuit hardware - debugging must be performed using lights in conjunction with an oscilloscope due to inaccessable typical debugging tools'
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/line-bot'
      ),
  	};
  }
}