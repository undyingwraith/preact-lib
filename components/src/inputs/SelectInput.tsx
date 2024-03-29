import { IInputProps } from "./IInputProps";
import { useComputed } from "@preact/signals";
import { createLabeled } from "./createLabeled";
import commons from './inputs.module.css';
import { useFormContext } from "react-hook-form";

export interface ISelectInputProps extends IInputProps {
	options: string[];
}

export function SelectInput(props: ISelectInputProps) {
	const {register} = useFormContext()
	const editable = useComputed(() => props.editable?.value ?? false);

	return (
		<select {...register(props.name)} readOnly={!editable.value} disabled={!editable.value} className={commons.input}>
			<option value={undefined}></option>
			{props.options.map(o => <option key={o} value={o}>{o}</option>)}
		</select>
	);
}

export const SelectInputLabeled = createLabeled(SelectInput);