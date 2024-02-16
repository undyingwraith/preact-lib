import { useMemo } from "preact/hooks"
import { IInputProps } from "./IInputProps"
import commons from './inputs.module.css';
import { useComputed } from "@preact/signals";
import { createLabeled } from "./createLabeled";
import { useFormContext } from "react-hook-form";

export interface ISuggestInput extends IInputProps {
	options: string[]
}

export function SuggestInput(props: ISuggestInput) {
	const id = useMemo(() => 'new', []); //TODO: random id (maybe utils package)
	const editable = useComputed(() => props.editable?.value ?? false);
	const {register} = useFormContext();

	return (<>
		<input type='text' list={id} {...register(props.name)} className={commons.input} disabled={!editable.value} />
		<datalist id={id}>
			{props.options.map(o => <option key={o} value={o} />)}
		</datalist>
	</>);
}

export const SuggestInputLabeled = createLabeled(SuggestInput);
