import { Meta, StoryObj } from "@storybook/react/*";
import Section from ".";
import Typography from "../Typography";

const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
  argTypes: {
    children: { description: "ReactNode", control: "text" },
    bg: {
      description: "Background Image (image(url), size, repeat, position)",
    },
    innerClassName: { description: "Section inner Container Styling" },
    outerClassName: { description: "Section Outer Container Styling" },
    ref: { description: "Ref" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CanvasSection: Story = {
  args: {
    children: (
      <Typography variants="display" size="lg">
        Any Text Here
      </Typography>
    ),
  },
};
