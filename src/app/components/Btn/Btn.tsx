'use client';

import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Btn.module.css';
export interface BtnProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: ReactNode;
	nextPages: string;
}
export function Btn({ nextPages, children, ...props }: BtnProps) {
	const router = useRouter();
	const handlerBtn = () => {
		router.push(`${nextPages}`);
	};
	return (
		<button className={styles.Btn} onClick={handlerBtn}>
			{children}
		</button>
	);
}
