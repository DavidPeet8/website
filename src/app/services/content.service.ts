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

  _getHeader(): Object
  {
  	return {
  		'mainHeader': 'Developer.',
  		'expressionLine': 'I google better than the occasional bear'
  	};
  } 

  _getAbout(): Object
  {
  	return {
  		'name': 'David', 
  		'imgPath': '../../assets/img/profile2-min.jpg', // Relative path
  		'schoolTerm': '2B', // Ex. 2B
  		'internshipDate': 'Fall 2020 (Sept-Dec)',
  	};
  }

  _getConfig(): Object 
  {
  	return {
  		'faviconPath': './favicon.ico',
  		'resumePath': '../../assets/docs/resume.pdf',
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
  		'mcafee': 
  		{
        'css': {
          'color': this.grey,
          'display': 'block'
        },
  			'name': 'McAfee',
  			'position': 'Software Developer',
  			'dateRange': 'Jan 2020 - Apr 2020',
  			'location': 'Waterloo, Ontario',
  			'imgPath': '../../assets/img/mcafee.png',
  			'companyURL': 'https://www.mcafee.com/',
  			'tags': ['C/C++', 'Bash', 'Win32API', 'Angular', 'CEF'],
  			'content': 'Worked on installer woo'
  		},
  		'axonify': 
  		{
        'css': {
          'color': this.grey,
          'display': 'block'
        },
  			'name': 'Axonify',
  			'position': 'Software Developer',
  			'dateRange': 'May 2019 - Aug 2019',
  			'location': 'Waterloo, Ontario',
  			'imgPath': '../../assets/img/axonify-min.jpg',
  			'companyURL': 'https://axonify.com/',
  			'tags': ['Java', 'JS', 'Hibernate', 'Backbone.js', 'Make'],
  			'content': ''
  		},
  		'sobeys': 
  		{
        'css': {
          'color': this.grey,
          'display': 'block'
        },
  			'name': 'Sobeys',
  			'position': 'Deli Staff',
  			'dateRange': '2017 - 2018',
  			'location': 'Waterloo, Ontario',
  			'imgPath': '../../assets/img/sobeys-min.jpg',
  			'companyURL': 'https://www.sobeys.com/',
  			'tags': ['Team Work'],
  			'content': ''
  		},
  		'playhouse': 
  		{
        'css': {
          'color': this.grey,
          'display': 'block'
        },
  			'name': 'St. Jacobs Playhouse',
  			'position': 'Usher',
  			'dateRange': '2013 - 2018',
  			'location': 'St. Jacobs, Ontario',
  			'imgPath': '../../assets/img/playhouse-min.jpg',
  			'companyURL': 'https://www.draytonentertainment.com/',
  			'tags': ['Team Work'],
  			'content': ''
  		}
  	};
  }

  _getProjects(): Object
  {
  	return {
  		'memcheck':
  		{
  			'css': {
  				'color': 'white',
  				'display': 'none'
  			},
  			'name': 'MEMCHECK SHIM',
  			'position': null,
  			'dateRange': 2020,
  			'location': null,
  			'imgPath': '',
  			'companyURL': null,
  			'tags': ['C++', 'Shared Libraries', 'Syscalls', 'Kernel'],
  			'content': 'Intercepts library calls requesting more memory before they reach the standard library allowing for memory consumption monitoring',
  			'modalContent': {
  				
  			}
  		},
  		'Website': 
  		{
  			'css': {
  				'color': 'white',
  				'display': 'block'
  			},
  			'name': 'PERSONAL WEBSITE',
  			'position': null,
  			'dateRange': 2020,
  			'location': null,
  			'imgPath': '../../../assets/img/website-min.PNG',
  			'companyURL': null,
  			'tags': ['JS', 'Angular', 'HTML', 'Sass'],
  			'content': 'Tracks banking payments utilizing some DB software and other shit',
  			'modalContent': {
  				
  			}
  		},
  		'banking-payment-tracker':
  		{
  			'css': {
  				'color': 'white',
  				'display': 'block'
  			},
  			'name': 'BANKING PAYMENT TRACKER',
  			'position': null,
  			'dateRange': 2019,
  			'location': null,
  			'imgPath': '',
  			'companyURL': null,
  			'tags': ['Java', 'Spring', 'REST API', 'Postgresql'],
  			'content': 'Tracks banking payments utilizing some DB software and other shit',
  			'modalContent': {
  				
  			}
  		},
  		'git-branch-parent-tracker':
  		{
  			'css': {
  				'color': 'white',
  				'display': 'block'
  			},
  			'name': 'GIT BRANCH PARENT-TRACKER',
  			'position': null,
  			'dateRange': 2019,
  			'location': null,
  			'imgPath': '',
  			'companyURL': null,
  			'tags': ['Git', 'Bash'],
  			'content': 'Look at the name ... ur smart u can figure it out',
  			'modalContent': {

  			}
  		},
  		'highlight-sights':
  		{
  			'css': {
  				'color': 'white',
  				'display': 'block'
  			},
  			'name': 'HIGHLIGHT SIGHTS',
  			'position': null,
  			'dateRange': 2019,
  			'location': null,
  			'imgPath': '',
  			'companyURL': null,
  			'tags': ['JS'],
  			'content': 'Chrome browser extension that highlights google search results from endpoints that the user has specified to be important in various colors',
  			'modalContent': {

  			}
  		},
  		'new-tab-page': 
  		{
  			'css': {
  				'color': 'white',
  				'display': 'block'
  			},
  			'name': 'EASY ACCESS NEWTAB PAGE',
  			'position': null,
  			'dateRange': 2018,
  			'location': null,
  			'imgPath': '../../../assets/img/newtab-min.PNG',
  			'companyURL': null,
  			'tags': ['Java', 'LibGDX', 'Box2D'],
  			'content': 'Emulation of popular game Terraria, turned into a windows meme',
  			'modalContent': {
  				
  			}
  		},
  		'terraria': 
  		{
  			'css': {
  				'color': 'white',
  				'display': 'block'
  			},
  			'name': 'TERRARIA EMULATION',
  			'position': null,
  			'dateRange': 2017,
  			'location': null,
  			'imgPath': '../../../assets/img/terraria1-min.PNG',
  			'companyURL': null,
  			'tags': ['Java', 'LibGDX', 'Box2D'],
  			'content': 'Emulation of popular game Terraria, turned into a windows meme',
  			'modalContent': {
  				
  			}
  		},
  	};
  }
}
