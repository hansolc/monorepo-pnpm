import { ComponentProps } from "react";
import Input from "./components/Input";

interface Props extends ComponentProps<typeof Input> {
  outlined?: boolean;
}

const FrameworkInput = ({ outlined, ...props }: Props) => {
  return <Input outlined={outlined} {...props} />;
};

export default FrameworkInput;
