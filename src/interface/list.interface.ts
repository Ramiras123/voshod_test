export interface Iitems {
	id: number;
	name: string;
}

export interface Ilist {
	result: number;
	pages: number;
	page: number;
	items: Iitems[];
}
