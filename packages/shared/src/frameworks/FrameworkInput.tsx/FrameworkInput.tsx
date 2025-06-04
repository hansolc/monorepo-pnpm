import { ComponentProps } from "react";
import FilledInput from "./components/FilledInput";
import OutlinedInput from "./components/OutlinedInput";

interface Props extends ComponentProps<typeof FilledInput> {
  outlined?: boolean;
}

const FrameworkInput = ({ outlined, ...props }: Props) => {
  if (outlined) {
    return <OutlinedInput {...props} />;
  } else {
    return <FilledInput {...props} />;
  }
};

export default FrameworkInput;
