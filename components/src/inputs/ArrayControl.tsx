import { JSX } from "preact/jsx-runtime";
import classes from './ArrayControl.module.css';
//import commons from './inputs.module.css';
import { IInputProps } from "./IInputProps";
import { useFieldArray } from "react-hook-form";
import { useComputed } from "@preact/signals";

export function ArrayControl(props: IInputProps & { itemRender: (ns: string) => JSX.Element , label: string}) {
	const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({ name: props.name });
	const editable = useComputed(() => props.editable?.value ?? false);

	return <div className={classes.container}>
		<div className={classes.item}>
			<label className={classes.content}>{props.label}</label>
			{editable.value && (<a className={classes.action} onClick={() => append('')}>+</a>)}
		</div>
		{fields.map((field: any, index: number) => <div className={classes.item}>
			<div className={classes.content}>
				{props.itemRender(`${props.name}.${index}`)}
			</div>
			{editable.value && (<a className={classes.action} onClick={() => remove(index)}>x</a>)}
		</div>)}
		{/*meta.touched && meta.error ? <div className={commons.errorMessage}>{meta.error}</div> : null*/}
	</div>
}