import {Signal} from '@preact/signals';

export interface IInputProps {
    name: string
    editable?: Signal<boolean>
}