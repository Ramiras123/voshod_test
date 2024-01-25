import Link from 'next/link';

export default function Page() {
	return (
		<section className="cards-container">
			<Link href="/list/1">Перейти на список</Link>
		</section>
	);
}
