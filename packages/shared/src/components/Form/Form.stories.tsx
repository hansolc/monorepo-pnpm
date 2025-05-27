import { useState } from "react";
import Form from "./Form";
import { Meta } from "@storybook/react";
import Button from "../Button/Button";
import useFormValidation from "../../test/TextField/hooks/useFormValidation";

const meta = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;

export const BaseForm = {
  args: {
    align: "left",
  },
  argTypes: {
    align: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
    },
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Form>
        <Form.FormTitle align={args.align}>Title</Form.FormTitle>
        <Form.FormTextInput
          label="label"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          name="label"
        />
      </Form>
    );
  },
};

export const LoginForm = {
  render: () => {
    const [password, setPassword] = useState("");

    const { errors, handleSubmit, register } = useFormValidation<{
      username: string;
      password: string;
    }>();

    const onValid = async (data: Record<string, string>) => {
      console.log("input values: ", data);
    };

    return (
      <Form onSubmit={handleSubmit(onValid)}>
        <Form.FormTitle align="left">Login</Form.FormTitle>
        <Form.FormTextInput
          label="username"
          type="text"
          supportingText="아이디를 입력해주세요"
          {...register("username", {
            required: "아이디는 필수입니다.",
            pattern: {
              value: /^[a-zA-Z0-9]{4,8}$/,
              message: "4~8자 영문/숫자만 입력",
            },
          })}
          error={errors.username}
          // reg: /^[a-zA-Z0-9]{4,8}$/,
        ></Form.FormTextInput>
        <Form.FormTextInput
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          supportingText="비밀번호를 입력해주세요"
          name="password"
        ></Form.FormTextInput>
        <Button size="md" type="submit">
          Button
        </Button>
      </Form>
    );
  },
};
