import React, { ComponentProps } from "react";
import { TextFieldFixProps } from "./types";
import { input, label, textFieldFix } from "./TextField.css";
import Typography from "../Typography/Typography";
import { sprinkles } from "@styles/sprinkles.css";
import {
  TextFieldContextValue,
  TextFieldProvider,
  useTextFieldContext,
} from "./context/TextFieldContext";
import { PropsWithChildrenStyle } from "src/types";

const TextFieldRoot = ({
  children,
  value,
  onChange,
  state,
  ...props
}: PropsWithChildrenStyle &
  TextFieldContextValue &
  ComponentProps<"fieldset">) => {
  return (
    <TextFieldProvider value={{ value, onChange, state }}>
      <fieldset {...props}>{children}</fieldset>
    </TextFieldProvider>
  );
};

const Input = ({ ...props }: ComponentProps<"input">) => {
  return <input {...props} />;
};

const Textarea = ({
  fixedHeight = 3,
  ...props
}: { fixedHeight?: number } & ComponentProps<"textarea">) => {
  return (
    <textarea className={input()} rows={fixedHeight} {...props}></textarea>
  );
};

const InputWithFix = ({
  pfix,
  sfix,
  ...props
}: ComponentProps<"input"> & {
  pfix?: TextFieldFixProps;
  sfix?: TextFieldFixProps;
}) => {
  return (
    <div className={sprinkles({ display: "flex", alignItems: "center" })}>
      {pfix && <Fix {...pfix} />}
      <Input {...props} />
      {sfix && <Fix {...sfix} />}
    </div>
  );
};

const TextAreaWithFix = ({
  pfix,
  sfix,
  ...props
}: ComponentProps<"textarea"> & {
  pfix?: TextFieldFixProps;
  sfix?: TextFieldFixProps;
  fixedHeight?: number;
}) => {
  return (
    <div className={sprinkles({ display: "flex", alignItems: "center" })}>
      {pfix && <Fix {...pfix} />}
      <Textarea {...props} />
      {sfix && <Fix {...sfix} />}
    </div>
  );
};

const FloatingLabel = ({
  children,
  className = "",
}: PropsWithChildrenStyle) => {
  const { value, state } = useTextFieldContext();
  const isFloat = (value && value.length > 0) || state === "focused";
  return (
    <label className={`${label({ floated: isFloat })} ${className}`}>
      {children}
    </label>
  );
};

const OutlinedLabel = ({
  children,
  className = "",
}: PropsWithChildrenStyle) => {
  const { value, state } = useTextFieldContext();
  const isOutlined = (value && value.length > 0) || state === "focused";
  if (isOutlined) {
    return (
      <legend className={`${label({ floated: true })} ${className}`}>
        {children}
      </legend>
    );
  } else {
    return (
      <div
        style={{ width: "1px", height: "100%" }}
        className={sprinkles({ display: "flex", alignItems: "center" })}
      >
        <label className={`${label()} ${className}`}>{children}</label>
      </div>
    );
  }
};

const Clear = ({
  as,
  withClear,
}: {
  as: React.ReactElement;
  withClear?: boolean;
}) => {
  const { value, onChange } = useTextFieldContext();
  if (!value || !withClear) return null;

  return React.cloneElement(as, {
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onChange) {
        const event = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    },
  });
};

const SupportingText = ({ children, ...props }: PropsWithChildrenStyle) => {
  return (
    <Typography size="sm" ty="label" {...props}>
      {children}
    </Typography>
  );
};

const Fix = ({ text, position }: TextFieldFixProps) => {
  const { value, state } = useTextFieldContext();
  const isDisplay = state === "focused" || (value && value.length > 0);
  if (!text || !isDisplay) return null;
  return (
    <Typography size="lg" ty="label" className={textFieldFix[position]}>
      {text}
    </Typography>
  );
};

const TextField = Object.assign(TextFieldRoot, {
  Input,
  Textarea,
  FloatingLabel,
  OutlinedLabel,
  Clear,
  SupportingText,
  Fix,
  InputWithFix,
  TextAreaWithFix,
});

export default TextField;
