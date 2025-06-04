import React, { forwardRef, PropsWithChildren } from "react";
import { fieldset, label, textFieldFix } from "./TextField.css";
import Typography from "../Typography/Typography";
import { sprinkles } from "@styles/sprinkles.css";
import {
  TextFieldContextValue,
  TextFieldProvider,
  useTextFieldContext,
} from "./context/TextFieldContext";
import { PropsWithChildrenStyle } from "src/types";
import clsx from "clsx";
import { FloatingLabelProps, InputProps, TextFieldFixProps } from "./types";

const TextFieldRoot = ({
  children,
  ...props
}: PropsWithChildrenStyle & TextFieldContextValue) => {
  return <TextFieldProvider value={{ ...props }}>{children}</TextFieldProvider>;
};

const Fieldset = ({
  children,
  className,
  disabled,
}: PropsWithChildren<{ className?: string; disabled?: boolean }>) => {
  const { error } = useTextFieldContext();
  return (
    <fieldset
      className={clsx(fieldset({ error: !!error }), className)}
      disabled={disabled}
    >
      {children}
    </fieldset>
  );
};

const InputWithFix = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(({ pfix, sfix, className, onChange, fixedHeight, ...props }, ref) => {
  return (
    <div className={sprinkles({ display: "flex", alignItems: "center" })}>
      {pfix && <Fix {...pfix} />}
      {fixedHeight ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          rows={fixedHeight}
          className={` ${className}`}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={` ${className}`}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        />
      )}
      {sfix && <Fix {...sfix} />}
    </div>
  );
});

const FloatingLabel = ({
  tag: Component = "label",
  className,
  children,
}: FloatingLabelProps) => {
  const { value, state, error } = useTextFieldContext();
  const isFloat = state === "focused" || !!value;

  return (
    <Component
      className={clsx(label({ floated: isFloat, error: !!error }), className)}
    >
      {children}
    </Component>
  );
};

const Clear = ({
  as,
  refValue,
}: {
  as: React.ReactElement;
  refValue?: string;
}) => {
  const { value, onChange } = useTextFieldContext();
  if (!value) return null;

  return React.cloneElement(as, {
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.("");
      refValue = "";
    },
  });
};

const SupportingText = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const { error } = useTextFieldContext();
  return (
    <Typography
      size="sm"
      ty="label"
      as="div"
      className={clsx({ errorFontColor: !!error }, className)}
    >
      {error ?? children}
    </Typography>
  );
};

const IconWrapper = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

const Fix = ({ text, position }: TextFieldFixProps) => {
  const { value, state } = useTextFieldContext();
  const isDisplay = state === "focused" || !!value;
  if (!text || !isDisplay) return null;
  return (
    <Typography size="lg" ty="label" className={textFieldFix[position]}>
      {text}
    </Typography>
  );
};

const TextField = Object.assign(TextFieldRoot, {
  FloatingLabel,
  Clear,
  SupportingText,
  InputWithFix,
  Fieldset,
  IconWrapper,
});

export default TextField;
