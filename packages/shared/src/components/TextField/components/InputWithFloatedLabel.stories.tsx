import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MdKey } from "react-icons/md";
import InputWithFloatedLabel from "./InputWithFloatedLabel";

const meta = {
  title: "Components/InputWithFloatedLabel",
  component: InputWithFloatedLabel,
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
    },
    disabled: {
      description: "입력 비활성화 여부",
    },
    prefix: {
      description: "앞에 고정 텍스트",
    },
    suffix: {
      description: "뒤에 고정 텍스트",
    },
    leadingIcon: {
      description: "앞쪽 아이콘",
    },
    trailingIcon: {
      description: "뒤쪽 아이콘",
    },
    supportingText: {
      description: "부가 설명 텍스트",
    },
    fixedHeight: {
      description: "고정 높이 설정",
    },
    clear: {
      description: "입력값 초기화 버튼",
    },
    error: {
      description: "에러 메시지 표시",
    },
  },
} satisfies Meta<typeof InputWithFloatedLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseTextFieldInput: Story = {
  args: {
    label: "label",
    type: "text",
    // value: "",
    // onChange: () => {},
    outlined: false,
    disabled: false,
    prefix: "$",
    suffix: "@gmail.com",
    leadingIcon: <MdKey size="24" />,
    trailingIcon: <MdKey size="24" />,
    supportingText: "Supporting Text",
    fixedHeight: 0,
    clear: false,
    error: "",
  },
};

export const OutlinedFieldInput = {
  render: () => {
    return (
      <InputWithFloatedLabel
        label="label"
        onChange={() => {}}
        type="text"
        value=""
        outlined
      />
    );
  },
};

export const SimpleInput = {
  render: () => (
    <InputWithFloatedLabel
      label="label"
      onChange={() => {}}
      type="text"
      value=""
    />
  ),
};

export const UserPasswordInput = {
  render: () => {
    const [pw, setPw] = useState("");

    return (
      <InputWithFloatedLabel
        label="비밀번호"
        type="password"
        leadingIcon={<MdKey size="24" />}
        supportingText="패스워드를 입력해주세요."
        outlined
        value={pw}
        onChange={setPw}
      />
    );
  },
};

export const InputWithError = {
  render: () => (
    <InputWithFloatedLabel
      label="비밀번호"
      onChange={() => {}}
      type="password"
      value="123456"
      leadingIcon={<MdKey size="24" />}
      supportingText="패스워드를 입력해주세요."
      outlined
      error="잘못된 비밀번호 입니다."
    />
  ),
};
