import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
    onFocus: { action: "focused" },
    ty: {
      control: "select",
      options: ["elevated", "filled", "filledTonal", "outlined", "text"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseButton: Story = {
  args: {
    size: "md",
    children: "Base Button",
    ty: "elevated",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    size: "md",
    children: "Icon Button",
    icon: "MdAccessTime",
  },
};
