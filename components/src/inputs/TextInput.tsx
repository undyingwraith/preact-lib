import { useFormContext } from "react-hook-form";
import { createLabeled } from "./createLabeled";
import { IInputProps } from "./IInputProps";
import commons from './inputs.module.css';
import { useComputed } from "@preact/signals";

export interface ITextInputProps extends IInputProps {
	type?: 'email' | 'text';
}

export function TextInput(props: ITextInputProps) {
	const { register } = useFormContext();
	const editable = useComputed(() => props.editable?.value ?? false);

	return (<input type={props.type ?? 'text'} {...register(props.name)} className={commons.input} disabled={!editable.value} />);
}

export const TextInputLabeled = createLabeled(TextInput);
