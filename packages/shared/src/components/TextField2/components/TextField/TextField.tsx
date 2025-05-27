import React, { ComponentProps, PropsWithChildren } from "react";
import { InputStateTypes, InputTypes, TextFieldSharedProps } from "../../types";
import { fieldSet, input, label } from "./TextField.css";
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

const Textarea = () => {
  return <textarea name="" id=""></textarea>;
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
}: {
  as: React.ReactElement;
  clear: () => void;
}) => {
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

const TextField = Object.assign(TextFieldRoot, {
  Input,
  Textarea,
  Label,
  Clear,
  SupportingText,
});

export default TextField;
