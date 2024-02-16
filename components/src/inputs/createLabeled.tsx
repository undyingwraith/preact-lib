//import commons from '../commons.module.css';
import { IInputProps } from "./IInputProps";

export function createLabeled<T extends IInputProps>(Input: (props: T) => JSX.Element) {
	return (props: T & { label: string }) => {
		//const [_, meta] = useField(props.name);

		return <div /*className={commons.inputLabeled}*/>
			<label>{props.label}</label>
			<div>
				<Input {...props} />
				{/*meta.touched && meta.error ? <div className={commons.errorMessage}>{meta.error}</div> : null*/}
			</div>
		</div>
	}
}