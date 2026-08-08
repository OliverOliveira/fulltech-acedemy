import { ComponentProps, ReactNode, useId } from "react";
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

interface InputComponentProps extends ComponentProps<"input"> {
    label: string;
    description: string;
    icon?: ReactNode;
}

export function InputComponent({ label, description, icon, id, ...props }: InputComponentProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <Field className="w-full">
      <FieldLabel htmlFor={inputId} className="text-lg">
        {label}
      </FieldLabel>
      <InputGroup className="h-12 bg-primary-foreground">
        <InputGroupInput
          id={inputId}
          className="h-12"
          {...props}
        />
        <InputGroupAddon align="inline-end">
          {icon}
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription className="font-caveat text-lg text-destructive">{description}</FieldDescription>
    </Field>
  )
}
