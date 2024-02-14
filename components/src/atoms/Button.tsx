import { useSignal } from "@preact/signals";
import styles from '../styles/button.module.css'

export interface IButtonProps {
	text: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: (event: any) => void | Promise<void>;
	disabled?: boolean;
}

export function Button(props: IButtonProps) {
	const isHandling = useSignal(false);

	return <button
		className={styles.button}
		type={props.type ?? 'button'}
		disabled={isHandling.value || props.disabled}
		onClick={async (ev) => {
			if (props.onClick) {
				isHandling.value = true;
				await props.onClick(ev);
				isHandling.value = false;
			}
		}}
		data-testid='button'
	>{props.text}</button>
}
