import type { Meta, StoryObj } from "@storybook/react";
import TextFieldInput from "./TextFieldInput";
import { useState } from "react";
import { MdKey } from "react-icons/md";

const meta = {
  title: "Components/TextField",
  component: TextFieldInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextFieldInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseTextFieldInput: Story = {
  args: {
    value: "value",
    setValue: () => {},
    type: "text",
    prefix: "",
    suffix: "",
    fixedHeight: undefined,
  },
};

export const OutlinedInput = {
  render: () => {
    const [val, setVal] = useState("");
    return (
      <TextFieldInput
        value={val}
        setValue={setVal}
        type="text"
        supportingText="supporting text"
        outlined
      />
    );
  },
};

export const FilledInput = {
  render: () => {
    const [val, setVal] = useState("");
    return <TextFieldInput type="text" value={val} setValue={setVal} />;
  },
};

// 도메인 분리하기
// FrameworkPasswordInput은 컨테이너가 아니지만 데이터에 접근합니다.
// 필요한 데이터를 직접 관리할 때 자율적인 컴포넌트가 되고 외부 의존성이 없어 재사용하기 좋기 때문입니다.
// 비즈니스 로직은 스스로 처리하되 UI 로직을 위임하는 방식으로 볼 수 있습니다.
export const FrameworkPasswordInput = {
  render: () => {
    const [pw, setPw] = useState("");

    const handleSubmit = () => {
      // password submit logic here
    };

    return (
      <TextFieldInput
        leadingIcon={<MdKey size="24" />}
        supportingText="비밀번호를 입력해주세요"
        type="password"
        value={pw}
        setValue={setPw}
        label="비밀번호"
      />
    );
  },
};
