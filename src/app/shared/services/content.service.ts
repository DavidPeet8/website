import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  data = 
  {
  	'about': {},
  	'config': {},
  	'work': {},
  	'projects': {},
  	'header': {}
  };
  grey:string="#292929";

  constructor() {
  	this.data['header'] = this._getHeader();
  	this.data['about'] = this._getAbout();
  	this.data['config'] = this._getConfig();
  	this.data['work'] = this._getWork();
  	this.data['projects'] = this._getProjects();
  }

  getData(arrayOfKeys)
  {
  	let ret = this.data;
  	for (let key of arrayOfKeys) 
  	{
  		ret = this.data[key];
  	}
  	return ret;
  }

  _createContentObject(name, position, dateRange, location, imgPath, companyURL, tags, content, modalContent, cssObj): Object
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
      'css': cssObj
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

  _getWork(): Object
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
        'Worked on installer woo', 
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
        '',
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
        '',
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
        '',
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
        'Intercepts library calls requesting more memory before they reach the standard library allowing for memory consumption monitoring',
        {},
        { 'color': 'white', 'display': 'none' }
      ),
  		'Website': this._createContentObject(
        'PERSONAL WEBSITE',
        null,
        2020,
        null,
        'assets/img/website-min.PNG',
        null,
        ['JS', 'Angular', 'HTML', 'Sass'],
        'Tracks banking payments utilizing some DB software and other shit',
        {},
        { 'color': 'white', 'display': 'block' }
      ),
  		'banking-payment-tracker': this._createContentObject(
        'BANKING PAYMENT TRACKER',
        null,
        2019,
        null,
        '',
        null,
        ['Java', 'Spring', 'REST API', 'Postgresql'],
        'Tracks banking payments utilizing some DB software and other shit',
        {},
        { 'color': 'white', 'display': 'block' }
      ),
  		'git-branch-parent-tracker': this._createContentObject(
        'GIT BRANCH PARENT-TRACKER',
        null,
        2019,
        null,
        '',
        null,
        ['Git', 'Bash'],
        'Look at the name ... ur smart u can figure it out',
        {},
        { 'color': 'white', 'display': 'block' }
      ),
  		'highlight-sights': this._createContentObject(
        'HIGHLIGHT SIGHTS',
        null,
        2019,
        null,
        '',
        null,
        ['JS'],
        'Chrome browser extension that highlights google search results from endpoints that the user has specified to be important in various colors',
        {},
        { 'color': 'white', 'display': 'block' }
      ),
  		'new-tab-page': this._createContentObject(
        'EASY ACCESS NEWTAB PAGE',
        null,
        2018,
        null,
        'assets/img/newtab-min.PNG',
        null,
        ['Java', 'LibGDX', 'Box2D'],
        'Emulation of popular game Terraria, turned into a windows meme',
        {},
        { 'color': 'white', 'display': 'block' }
      ),
  		'terraria': this._createContentObject(
        'TERRARIA EMULATION',
        null,
        2017,
        null,
        'assets/img/terraria1-min.PNG',
        null,
        ['Java', 'LibGDX', 'Box2D'],
        'Emulation of popular game Terraria, turned into a windows meme',
        {},
        { 'color': 'white', 'display': 'block' }
      ),
  	};
  }
}