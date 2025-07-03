import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import { MdAccessTime } from "@react-icons/all-files/md/MdAccessTime";
import { MdArrowBack } from "@react-icons/all-files/md/MdArrowBack";

const meta: Meta<typeof Button> = {
  title: "MaterialDesign3/Md3Button",
  component: Button,
  argTypes: {
    children: { description: "Button text" },
    icon: {
      description: "react-icons의 IconTypes",
      control: "select",
      options: [MdAccessTime, MdArrowBack],
    },
    shape: {
      description: "shape",
      control: "radio",
      options: ["round", "square"],
      table: { defaultValue: { summary: "round" } },
    },
    size: {
      description: "size",
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      table: { defaultValue: { summary: "sm" } },
    },
    variants: {
      description: "colors",
      control: "radio",
      options: ["elevated", "filled", "tonal", "outlined", "text"],
      table: { defaultValue: { summary: "filled" } },
    },
    disabled: {
      description: "disabled",
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CanvasButton: Story = {
  args: {
    size: "sm",
    children: "Base Button",
    variants: "filled",
    shape: "round",
  },
};

export const BaseButton = {
  render: () => {
    const arr = ["elevated", "filled", "tonal", "outlined", "text"] as const;
    return (
      <div>
        {arr.map((d) => {
          return (
            <Button
              variants={d}
              shape="square"
              icon={MdAccessTime}
              onClick={() => {
                console.log("click");
              }}
            >
              hello world
            </Button>
          );
        })}
      </div>
    );
  },
};

export const ElevatedButton = {
  render: () => <Button variants="elevated">Elevated Button</Button>,
};

export const FilledButton = {
  render: () => <Button variants="filled">Filled Button</Button>,
};

export const OutlinedButton = {
  render: () => <Button variants="outlined">Outlined Button</Button>,
};

export const TonalButton = {
  render: () => <Button variants="tonal">Tonal Button</Button>,
};

export const TextButton = {
  render: () => <Button variants="text">Text Button</Button>,
};
