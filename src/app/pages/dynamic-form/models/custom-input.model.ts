import { Observable } from "rxjs";

export interface CUSTOM_INPUT_MODEL {
    key: string;
    type: TYPES
    label?: string | null;
    placeholder?: string | null;
    defaultValue?: string | number | string[] | number[] | null;
    minLength?: string | number | null;
    maxLength?: string | number | null;
    min?: string | number | null;
    max?: string | number | null;
    required?: boolean | null;
    disabled?: boolean | null,
    readonly?: boolean | null,
    options?: Observable<{ value: string | number | null, label: string }[]>
    multiple?: boolean | null
}
export enum TYPES {
    Text = 'text',
    Number = 'number',
    Date = 'date',
    Password = 'password',
    Checkbox = 'checkbox',
    Select = 'select',
    ID = 'ID'
}
export class CustomInputTypes {
    text = TYPES.Text
    number = TYPES.Number
    date = TYPES.Date
    password = TYPES.Password
    checkbox = TYPES.Checkbox
    select = TYPES.Select
    iD = TYPES.ID
}
export interface buttonsConfig {
    submit: { text: string, handleSubmit: Function }
    reset?: { text: string, handleReset?: Function }
    close?: { text: string, handleClose?: Function }
}