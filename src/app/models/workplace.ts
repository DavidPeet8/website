import { ContentItem } from './contentItem'

export class WorkItem extends ContentItem 
{
	static count = 0;

	startDate:string;
	endDate:string;
	position:string;
	company:string;

	constructor(imgPath:string, dataPath:string) 
	{
		super(WorkItem.count, imgPath, dataPath);
		WorkItem.count++;
		this.startDate = this.getStartDate()
		this.endDate = this.getEndDate();
		this.position = this.getPosition();
		this.company = this.getCompany();
	}

	setData(startDate:string, endDate:string, position:string, company:string) {
		this.startDate = startDate;
		this.endDate = endDate;
		this.position = position;
		this.company = company;

		return this;
	}

	getStartDate() 
	{
		let startDate:string = "";
		return startDate;
	}

	getEndDate() 
	{
		let endDate:string = "";
		return endDate;
	}

	getPosition() 
	{
		let position:string = "";
		return position;
	}

	getCompany() 
	{
		let company:string = "";
		return company;
	}
}

