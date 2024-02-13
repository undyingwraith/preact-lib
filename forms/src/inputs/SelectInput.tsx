import { useField } from "formik";
import { IInputProps } from "../IInputProps";
import { useComputed } from "@preact/signals";
import { createLabeled } from "../utils";
import commons from '../commons.module.css';

export interface ISelectInputProps extends IInputProps {
	options: string[];
}

export function SelectInput(props: ISelectInputProps) {
	const [field] = useField(props.name);
	const editable = useComputed(() => props.editable?.value ?? false);

	return (
		<select {...field} readOnly={!editable.value} disabled={!editable.value} className={commons.input}>
			<option value={undefined}></option>
			{props.options.map(o => <option key={o} value={o}>{o}</option>)}
		</select>
	);
}

export const SelectInputLabeled = createLabeled(SelectInput);
