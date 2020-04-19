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
  			'name': 'McAfee',
  			'position': 'Software Developer',
  			'dateRange': 'Jan 2020 - Apr 2020',
  			'location': 'Waterloo, Ontario',
  			'imgPath': '../../assets/img/mcafee.png',
  			'companyURL': 'https://www.mcafee.com/',
  			'tags': ['C/C++', 'Bash', 'Win32API', 'Angular', 'CEF'],
  			'content': ['Worked on installer', 'woo']
  		},
  		'axonify': 
  		{
  			'name': 'Axonify',
  			'position': 'Software Developer',
  			'dateRange': 'May 2019 - Aug 2019',
  			'location': 'Waterloo, Ontario',
  			'imgPath': '../../assets/img/axonify-min.jpg',
  			'companyURL': 'https://axonify.com/',
  			'tags': ['Java', 'JS', 'Hibernate', 'Backbone.js', 'Make'],
  			'content': []
  		},
  		'sobeys': 
  		{
  			'name': 'Sobeys',
  			'position': 'Deli Staff',
  			'dateRange': '2017 - 2018',
  			'location': 'Waterloo, Ontario',
  			'imgPath': '../../assets/img/sobeys-min.jpg',
  			'companyURL': 'https://www.sobeys.com/',
  			'tags': ['Team Work'],
  			'content': []
  		},
  		'playhouse': 
  		{
  			'name': 'St. Jacobs Playhouse',
  			'position': 'Usher',
  			'dateRange': '2013 - 2018',
  			'location': 'St. Jacobs, Ontario',
  			'imgPath': '../../assets/img/playhouse-min.jpg',
  			'companyURL': 'https://www.draytonentertainment.com/',
  			'tags': ['Team Work'],
  			'content': []
  		}
  	};
  }

  _getProjects(): Object
  {
  	return {

  	};
  }
}
