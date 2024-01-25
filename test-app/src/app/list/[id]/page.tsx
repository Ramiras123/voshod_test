import Link from 'next/link';
import { getList } from '../../../api/list.api';
import { Btn } from '../../components/Btn/Btn';
import { Ilist } from '../../../interface/list.interface';
import styles from './page.module.css';

export type PathsItem = {
	id: string;
};

export async function generateStaticParams() {
	let path: PathsItem[] = [];
	for (let i = 1; i <= 2; i++) {
		const items = await getList(String(i));
		path = path.concat({ id: String(items.page) });
	}
	return path;
}

export default async function PageList({ params }: { params: PathsItem }) {
	const listItem: Ilist = await getList(params.id);
	console.log(listItem);
	const handleBtn = () => {};
	return (
		<div className={styles.wrapper}>
			{listItem &&
				listItem.items.map((item) => (
					<div key={item.id} className={styles.item}>
						<Link href={`/item/${item.id}`} key={item.id} passHref>
							{item.name}
						</Link>
					</div>
				))}
			{listItem.page <= 1 && (
				<Btn nextPages={String(listItem.page + 1)}>Next</Btn>
			)}
			{listItem.page > 1 && (
				<Btn nextPages={String(listItem.page - 1)}>Prev</Btn>
			)}
		</div>
	);
}
