import { ComponentProps } from "react";

interface FormInputProps extends ComponentProps<'input'>{

}
export function FormInput({children, ...props}:FormInputProps) {
    return (
            <input{...props} /> 
    )
}