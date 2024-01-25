import { getItem } from '../../../../api/item.api';
import { Iitem } from '../../../../interface/item.interface';
import { Modal } from './modal';
import styles from './page.module.css';

export default async function PhotoModal({
	params: { id }
}: {
	params: { id: string };
}) {
	const item: Iitem = await getItem(id);
	return (
		<Modal>
			<div className={styles.wrapper}>
				<div>{item.result}</div>
				<div>{item.name}</div>
				<div>{item.text}</div>
			</div>
		</Modal>
	);
}
