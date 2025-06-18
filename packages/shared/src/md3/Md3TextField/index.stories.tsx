import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MdKey, MdCancel } from "react-icons/md";
import FrameworkInput from ".";

const meta = {
  title: "Frameworks/FrameworkInput",
  component: FrameworkInput,
  argTypes: {
    label: {
      description: "입력 항목을 설명하는 라벨",
    },
    type: {
      description: "input의 타입 속성",
    },
    value: {
      description: "입력 필드의 값",
    },
    outlined: {
      description: "outlined 스타일 적용 여부",
      control: "boolean",
    },
    disabled: {
      description: "입력 비활성화 여부",
    },
    inputConfig: {
      description: "비고",
    },
    clear: {
      description: "입력값 초기화 버튼",
    },
    error: {
      description: "에러 메시지 표시",
    },
  },
} satisfies Meta<typeof FrameworkInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseTextFieldInput: Story = {
  args: {
    label: "label",
    type: "text",
    outlined: false,
    disabled: false,
    clear: <MdCancel size="24" />,
    error: "",
    inputConfig: {
      prefix: "$",
      suffix: "@gmail.com",
      leadingIcon: <MdKey size="24" />,
      trailingIcon: <MdKey size="24" />,
      supportingText: "Supporting Text",
      fixedHeight: 0,
    },
  },
};

export const ControlledInput = {
  render: () => {
    const [val, change] = useState("");
    return (
      <FrameworkInput type="text" label="label" value={val} onChange={change} />
    );
  },
};

export const UserPasswordInput = {
  render: () => (
    <FrameworkInput
      type="password"
      label="password*"
      inputConfig={{
        leadingIcon: <MdKey size="24" />,
        trailingIcon: <MdKey size="24" />,
        supportingText: "패스워드를 입력해주세요*",
        prefix: "$",
        suffix: "@gmail.com",
      }}
      clear={<MdCancel size="24" />}
      outlined
    />
  ),
};

export const ErrorInput = {
  render: () => (
    <FrameworkInput
      type="password"
      label="Password"
      inputConfig={{
        leadingIcon: <MdKey size="24" />,
        supportingText: "패스워드를 입력해주세요",
      }}
      clear={<MdCancel size="24" />}
      error={"잘못된 비밀번호 입니다."}
    />
  ),
};

export const MultilineInput = {
  render: () => (
    <FrameworkInput
      type="text"
      label="Text Area Field"
      inputConfig={{
        fixedHeight: 3,
      }}
      outlined
    />
  ),
};
