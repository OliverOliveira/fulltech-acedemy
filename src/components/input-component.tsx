import { ReactNode } from "react";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

interface InputComponentProps {
    label: string;
    description: string;
    placeholder: string;
    type: string;
    icon?: ReactNode;
}

export function InputComponent({ label, description, placeholder, type, icon }: InputComponentProps) {
  return (
    <Field className="w-full">
      <FieldLabel htmlFor="inline-end-input" className="text-lg">
        {label}
      </FieldLabel>
      <InputGroup className="h-12 bg-primary-foreground">
        <InputGroupInput
          id="inline-end-input"
          type={type}
          placeholder={placeholder}
          className="h-12"
        />
        <InputGroupAddon align="inline-end">
          {icon}
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription className="font-caveat text-lg text-destructive">{description}</FieldDescription>
    </Field>
  )
}
