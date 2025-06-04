import { createContext, PropsWithChildren, useContext, useState } from "react";

interface DropdownContextValue {
  isOpen: boolean;
  toggle: () => void;
  value?: string;
  onChange?: (value?: string) => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

export const DropdownProvider = ({
  children,
  value,
  onChange,
}: PropsWithChildren<Pick<DropdownContextValue, "value" | "onChange">>) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, value, onChange }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => {
  const ctx = useContext(DropdownContext);
  if (!ctx) {
    throw new Error("useDropdownContext must be used within TextFieldProvider");
  }
  return ctx;
};
