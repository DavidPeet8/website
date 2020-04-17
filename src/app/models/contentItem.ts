export class ContentItem 
{
	order:number;
	skillTags:string[] = [];
	bulletPoints:string[] = [];
	imgPath:string = "";
	dataPath:string = "";

	constructor (order:number, imgPath:string, dataPath:string) 
	{
		this.order = order;
		this.imgPath = imgPath;
		this.dataPath = dataPath;
		this.skillTags = this.getSkillTags();
		this.bulletPoints = this.getBullets();
	}

	getBullets() 
	{
		let bullets:string[];
		return bullets; 
	}

	getSkillTags() 
	{
		let tags:string[];
		return tags;
	}
}