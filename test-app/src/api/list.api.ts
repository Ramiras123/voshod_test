import { Ilist } from '../interface/list.interface';


export async function getList(id: string) {
	try {
		const result = await fetch(
			`https://taxivoshod.ru/testapi/?w=list&page=${id}`,
			{
				method: 'GET'
			}
		);
		const data: Ilist = await result.json();
		return data;
	} catch (e: any) {
		throw new Error(e.message);
	}
}
