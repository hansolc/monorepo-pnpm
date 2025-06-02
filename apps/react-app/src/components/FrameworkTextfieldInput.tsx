import { InputWithFloatedLabel } from "@packages/shared";

interface Props {
  label: string;
  type: "text" | "password" | "number" | "email";
  value?: string;
  onChange?: (value: string) => void;
  leadingIcon?: React.ReactElement;
  supportingText?: string;
}

const FrameworkTextfieldInput = ({
  label,
  type,
  value,
  onChange,
  leadingIcon,
  ...props
}: Props) => {
  return (
    <InputWithFloatedLabel
      label={label}
      onChange={onChange}
      type={type}
      value={value}
      outlined
      {...props}
      leadingIcon={leadingIcon}
    />
  );
};

export default FrameworkTextfieldInput;
