import React, { ComponentProps, PropsWithChildren } from "react";
import { InputStateTypes, TextFieldSharedProps } from "../../types";
import { fieldSet, input, label, textFieldFix } from "./TextField.css";
import Typography from "../../../Typography/Typography";
import { sprinkles } from "@styles/sprinkles.css";

const TextFieldRoot = ({
  children,
  outlined,
  inputState,
  isHovered,
  ...props
}: PropsWithChildren &
  TextFieldSharedProps &
  Pick<
    React.HTMLAttributes<HTMLFieldSetElement>,
    "onMouseEnter" | "onMouseLeave"
  >) => {
  return (
    <fieldset
      className={fieldSet({
        outlined: !!outlined,
        inputState,
        isHovered: !!isHovered,
      })}
      {...props}
    >
      {children}
    </fieldset>
  );
};

const Input = ({ ...props }: ComponentProps<"input">) => {
  return <input className={input()} {...props} />;
};

const Textarea = ({
  fixedHeight = 3,
  ...props
}: { fixedHeight?: number } & ComponentProps<"textarea">) => {
  return (
    <textarea className={input()} rows={fixedHeight} {...props}></textarea>
  );
};

const Label = ({
  children,
  inputState,
  inputValue,
  outlined,
}: PropsWithChildren &
  TextFieldSharedProps & {
    inputValue: string;
  }) => {
  const isFloat = inputValue.length > 0 || inputState === "focused";
  return (
    <label className={label({ outlined: !!outlined, floated: isFloat })}>
      {children}
    </label>
  );
};

const Clear = ({
  as,
  clear,
  value,
  withClear,
}: {
  as: React.ReactElement;
  clear: () => void;
  value: string;
  withClear?: boolean;
}) => {
  if (!value || !withClear) return null;

  return React.cloneElement(as, {
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      clear();
    },
  });
};

const SupportingText = ({ children }: PropsWithChildren) => {
  return (
    <Typography
      size="sm"
      ty="label"
      className={sprinkles({ px: 16, color: "onSurfaceVariant" })}
    >
      {children}
    </Typography>
  );
};

const Fix = ({
  text,
  position,
  inputValue,
  inputState,
}: {
  position: "prefix" | "suffix";
  text?: string;
  inputValue: string;
  inputState: InputStateTypes;
}) => {
  const isDisplay = inputState === "focused" || inputValue.length > 0;
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
  Label,
  Clear,
  SupportingText,
  Fix,
});

export default TextField;
