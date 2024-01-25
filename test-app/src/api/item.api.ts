export async function getItem(id: string) {
	try {
		const result = await fetch(
			`https://taxivoshod.ru/testapi/?w=item&id=${id}`,
			{
				method: 'GET'
			}
		);
		const data = await result.json();
		return data;
	} catch (e) {
		throw new Error(e.message);
	}
}
