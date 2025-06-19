import { ComponentProps } from "react";
import Input from "./components/Input";

interface Props extends ComponentProps<typeof Input> {
  outlined?: boolean;
}

const M3dTextField = ({ outlined, ...props }: Props) => {
  return <Input outlined={outlined} {...props} />;
};

export default M3dTextField;
