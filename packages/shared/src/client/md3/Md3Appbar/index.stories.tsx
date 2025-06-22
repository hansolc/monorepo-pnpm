import { Meta, StoryObj } from "@storybook/react/*";
import Md3Appbar from ".";
import { MdAccessAlarm } from "react-icons/md";

const meta: Meta<typeof Md3Appbar> = {
  title: "MaterialDesign3/Md3Appbar",
  component: Md3Appbar,
  argTypes: {
    size: {
      description: "Size",
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    headline: { description: "Headline", control: "text" },
    subtitle: { description: "Subtitle", control: "text" },
    textAlign: {
      description: "Text Align",
      control: "radio",
      options: ["start", "center"],
    },
    leadingIcon: { description: "Leading Icon" },
    trailingIcon: { description: "Trailing Icon" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CanvasAppbar: Story = {
  args: {
    size: "md",
    textAlign: "start",
    headline: "Headline",
    subtitle: "subtitle",
    leadingIcon: [
      <MdAccessAlarm onClick={() => console.log("click leading icon")} />,
    ],
    trailingIcon: [<MdAccessAlarm />],
  },
};
