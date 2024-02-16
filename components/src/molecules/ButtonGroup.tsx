import { PropsWithChildren } from "preact/compat";
import styles from '../styles/button.module.css';

export function ButtonGroup(props: PropsWithChildren<{}>) {
	return (<div className={styles.buttonGroup}>{props.children}</div>);
}
