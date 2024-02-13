import { useField } from "formik";
import { IInputProps } from "../IInputProps";
import commons from '../commons.module.css';
import { useComputed } from "@preact/signals";
import { createLabeled } from "../utils";

export function DateInput(props: IInputProps) {
    const [field] = useField(props.name);
    const editable = useComputed(() => props.editable?.value ?? false);

    return (
        <input type={'date'} {...field} className={commons.input} disabled={!editable.value}/>
    );
}

export const DateInputLabeled = createLabeled(DateInput);