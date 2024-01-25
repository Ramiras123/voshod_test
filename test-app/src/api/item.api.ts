import { Iitem } from '../interface/item.interface';

export async function getItem(id: string) {
	try {
		const result = await fetch(
			`https://taxivoshod.ru/testapi/?w=item&id=${id}`,
			{
				method: 'GET'
			}
		);
		const data: Iitem = await result.json();
		return data;
	} catch (e: any) {
		throw new Error(e.message);
	}
}
