import { createContext, useContext } from "react";
import { InputStateTypes } from "../types";

export interface TextFieldContextValue {
  value?: string;
  onChange?: (value: string) => void;
  state?: InputStateTypes;
  error?: string;
  isTyping?: boolean;
}

const TextFieldContext = createContext<TextFieldContextValue | null>(null);

export const TextFieldProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: TextFieldContextValue;
}) => {
  return (
    <TextFieldContext.Provider value={value}>
      {children}
    </TextFieldContext.Provider>
  );
};

export const useTextFieldContext = () => {
  const ctx = useContext(TextFieldContext);
  if (!ctx)
    throw new Error(
      "useTextFieldContext must be used within TextFieldProvider"
    );
  return ctx;
};
