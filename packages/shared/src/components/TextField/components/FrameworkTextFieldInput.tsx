import { ComponentProps } from "react";
import { MdKey } from "react-icons/md";
import TextFieldInput from "../TextFieldInput";

interface Props extends ComponentProps<typeof TextFieldInput> {}

const FrameworkPasswordInput = ({ ...props }: Props) => {
  return (
    <TextFieldInput
      leadingIcon={<MdKey size="24" />}
      supportingText="비밀번호를 입력해주세요"
      {...props}
    />
  );
};

export default FrameworkPasswordInput;
