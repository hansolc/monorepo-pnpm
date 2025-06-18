import { Meta, StoryObj } from "@storybook/react";
import Typography from ".";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    ty: {
      control: "select",
      options: ["display", "headline"],
    },
    size: { control: "radio", options: ["large", "medium", "small"] },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseTypography: Story = {
  args: {
    size: "md",
    ty: "body",
    children: "Typography",
  },
};
