import React, { forwardRef, PropsWithChildren } from "react";
import { errorFontColor, fieldset, label, textFieldFix } from "./index.css";
import { sprinkles } from "@styles/sprinkles.css";
import {
  TextFieldContextValue,
  TextFieldProvider,
  useTextFieldContext,
} from "./context/TextFieldContext";
import clsx from "clsx";
import { FloatingLabelProps, InputProps, TextFieldFixProps } from "./types";
import Typography from "@base/Typography";

const TextFieldRoot = ({
  children,
  className,
  ...props
}: PropsWithChildren<{ className?: string }> & TextFieldContextValue) => {
  return (
    <TextFieldProvider value={{ ...props }}>
      <div className={clsx(className)}>{children}</div>
    </TextFieldProvider>
  );
};

const Fieldset = ({
  children,
  className,
  disabled,
  inputRef,
}: PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  inputRef?: React.MutableRefObject<
    HTMLInputElement | HTMLTextAreaElement | null
  >;
}>) => {
  const { error } = useTextFieldContext();
  return (
    <fieldset
      className={clsx(fieldset({ error: !!error }), className)}
      disabled={disabled}
      onClick={() => inputRef?.current?.focus()}
    >
      {children}
    </fieldset>
  );
};

const InputWithFix = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(({ pfix, sfix, className, fixedHeight, type, ...rest }, ref) => {
  const { value, onChange } = useTextFieldContext();
  return (
    <div className={sprinkles({ display: "flex", alignItems: "center" })}>
      {pfix && <Fix {...pfix} />}
      {fixedHeight ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          rows={fixedHeight}
          className={` ${className}`}
          onChange={(e) => onChange?.(e.target.value)}
          value={value}
          {...rest}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={` ${className}`}
          onChange={(e) => onChange?.(e.target.value)}
          value={value}
          type={type}
          {...rest}
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
  const { value, state, error, isTyping } = useTextFieldContext();
  const isFloat = state === "focused" || !!value || !!isTyping;
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
  elRef,
  startTyping,
}: {
  as: React.ReactElement;
  elRef: React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;
  startTyping?: (isTyping: boolean) => void;
}) => {
  const { value, onChange, isTyping } = useTextFieldContext();

  if (value !== undefined) {
    if (!value) return null;
  } else {
    // Uncontrolled: isTyping 없으면 렌더링 안 함
    if (!isTyping) return null;
    if (!elRef || !startTyping) {
      throw new Error("Uncontrolled input은 elRef와 startTyping이 필요합니다.");
    }
  }

  return React.cloneElement(as, {
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      if (value !== undefined) {
        // Controlled
        onChange?.("");
        elRef.current?.focus();
      } else if (elRef && elRef.current) {
        // Uncontrolled
        elRef.current.value = "";
        startTyping?.(false);
        elRef.current.focus();
      }
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
      variants="label"
      size="sm"
      as="div"
      className={clsx(!!error && errorFontColor, className)}
    >
      {error ?? children}
    </Typography>
  );
};

const IconWrapper = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

const Fix = ({ text, position }: TextFieldFixProps) => {
  const { value, state, isTyping } = useTextFieldContext();
  const isDisplay = state === "focused" || !!value || !!isTyping;
  if (!text || !isDisplay) return null;
  return (
    <Typography size="lg" variants="label" className={textFieldFix[position]}>
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
