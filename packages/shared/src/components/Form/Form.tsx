import React, { ComponentProps, PropsWithChildren } from "react";
import Typography from "../Typography/Typography";
import { sprinkles } from "../../styles/sprinkles.css";
import { formTitle } from "./Form.css";
import TextField, { TextFieldProps } from "../../test/TextField/TextField";

export interface FormProps extends ComponentProps<"form"> {
  children: React.ReactNode;
  className?: string;
}

const FormRoot = ({ children, className, ...rest }: FormProps) => {
  return (
    <form
      className={`${sprinkles({
        display: "flex",
        flexDirection: "column",
        gap: 16,
      })} ${className}`}
      {...rest}
    >
      {children}
    </form>
  );
};

const FormTitle = ({
  children,
  className,
  align = "left",
}: PropsWithChildren<{
  className?: string;
  align?: "left" | "center" | "right";
}>) => {
  return (
    <Typography
      ty="headline"
      size="lg"
      className={`${formTitle[align]} ${className}`}
    >
      {children}
    </Typography>
  );
};
FormTitle.displayName = "Form.Title";

interface FormTextInputProps extends TextFieldProps {}

const FormTextInput = ({ ...rest }: FormTextInputProps) => {
  return <TextField {...rest} />;
};

FormTextInput.displayName = "Form.FormTextInput";

const Form = Object.assign(FormRoot, {
  FormTitle,
  FormTextInput,
});

export default Form;
