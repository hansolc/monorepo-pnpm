import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description:
        "버튼의 가장 중요한 요소입니다. 사용자가 버튼을 클릭 했을 때 발생할 액션에 대해 설명합니다. ",
    },

    size: {
      control: "radio",
      description: "버튼의 사이즈를 결정합니다.",
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: {
          summary: "md",
        },
      },
    },
    ty: {
      control: "select",
      description: "총 5가지의 타입이 있습니다.",
      options: ["elevated", "filled", "filledTonal", "outlined", "text"],
    },
    icon: {
      description:
        "텍스트 전에 아이콘을 삽입할 수 있습니다. `@react-icons` 을 사용하였으며 Icon 추가를 원할 경우 /src/components/Icons 에서 필요한 icon을 import 받아 추가해주세요.",
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
