import { PropsWithChildren } from "preact/compat";
import styles from '../styles/banner.module.css';

export function Banner(props: PropsWithChildren<{icon?: string}>) {
	return <div className={styles.banner}>
		{props.children}
	</div>
}