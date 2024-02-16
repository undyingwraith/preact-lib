import { useFormContext } from "react-hook-form";
import { IInputProps } from "./IInputProps";
import commons from './inputs.module.css';
import { useComputed } from "@preact/signals";
import { createLabeled } from "./createLabeled";

export function DateInput(props: IInputProps) {
	const { register } = useFormContext();
	const editable = useComputed(() => props.editable?.value ?? false);

	return (
		<input type={'date'} {...register(props.name)} className={commons.input} disabled={!editable.value} />
	);
}

export const DateInputLabeled = createLabeled(DateInput);
