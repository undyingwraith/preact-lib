import { useField } from "formik"
import { IInputProps } from "../IInputProps"
import commons from '../commons.module.css';
import { useComputed } from "@preact/signals";
import { createLabeled } from "../utils/createLabeled";

export interface ITextInputProps extends IInputProps {
    type?: string
}

export function TextInput(props: ITextInputProps) {
    const [field] = useField(props.name);
    const editable = useComputed(() => props.editable?.value ?? false);

    return (
        <input type={props.type ?? 'text'} {...field} disabled={!editable.value} className={commons.input}/>
    );
}

export const TextInputLabeled = createLabeled(TextInput);
