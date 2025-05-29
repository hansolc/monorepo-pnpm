import { createContext, useContext } from "react";

export interface TextFieldContextValue {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state?: "disabled" | "blur" | "focused";
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
