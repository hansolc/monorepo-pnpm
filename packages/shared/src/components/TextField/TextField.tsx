// Cleaned and refactored TextField component for better readability and maintainability

import React, { ComponentProps, useState } from "react";
import Typography from "../Typography/Typography";
import {
  textField,
  textFieldInput,
  textFieldInputArea,
  textFieldLabel,
  textFieldLabelInputArea,
  TextFieldSupportingText,
} from "./TextField.css";

type TextFieldType = "email" | "password" | "text";

export interface TextFieldProps
  extends Omit<React.ComponentProps<"input">, "value" | "onChange" | "type"> {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: TextFieldType;
  supportingText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  hasError?: boolean;
  className?: string;
}

const TextField = ({
  label,
  type,
  supportingText,
  leadingIcon,
  trailingIcon,
  hasError,
  className,
  value,
  disabled,
  ...rest
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const errorState = hasError && !disabled;
  const isFloat = Boolean(value?.toString().length) || isFocused;

  const activeState = disabled ? "disabled" : isFocused ? "focus" : "enable";

  return (
    <div className={textField()}>
      <div
        className={textFieldInputArea({ activeState, hasError: errorState })}
      >
        {leadingIcon && <span>{leadingIcon}</span>}

        <div className={textFieldLabelInputArea({ isFloat })}>
          <label
            className={textFieldLabel({
              activeState,
              hasError: errorState,
              isFloat,
            })}
          >
            {label}
          </label>

          <input
            type={type}
            value={value}
            {...rest}
            disabled={disabled}
            className={`${textFieldInput({
              activeState,
              hasError: errorState,
            })} ${className}`}
            onFocus={() => !disabled && setIsFocused(true)}
            onBlur={() => !disabled && setIsFocused(false)}
          />
        </div>

        {trailingIcon && <span>{trailingIcon}</span>}
      </div>

      {supportingText && (
        <Typography
          className={TextFieldSupportingText({
            activeState,
            hasError: errorState,
          })}
          ty="label"
          size="sm"
        >
          {supportingText}
        </Typography>
      )}
    </div>
  );
};

export default TextField;
