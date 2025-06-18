import { Meta, StoryObj } from "@storybook/react";
import Typography from "./index";

const meta = {
  title: "MaterialDesign3/Typhography",
  component: Typography,
  argTypes: {
    children: { description: "Typography Text" },
    as: {
      description: "HTML Tag",
      control: "select",
      options: ["div", "span", "p"],
      table: {
        defaultValue: { summary: "span" },
      },
    },
    emphasize: { description: "Font Weight", control: "boolean" },
    size: {
      description: "Font size",
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    variants: {
      description: "Font role",
      control: "radio",
      options: ["display", "headline", "title", "label", "body"],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CanvasTypography: Story = {
  args: {
    children: "text",
    size: "sm",
    variants: "body",
    as: "span",
    emphasize: false,
  },
};

export const DisplayTypo = {
  render: () => (
    <Typography variants="display" size="md">
      Display
    </Typography>
  ),
};

export const HeadlineTypo = {
  render: () => (
    <Typography variants="headline" size="md">
      Headline
    </Typography>
  ),
};

export const TitleTypo = {
  render: () => (
    <Typography variants="title" size="md">
      Title
    </Typography>
  ),
};

export const LabelTypo = {
  render: () => (
    <Typography variants="label" size="md">
      Label
    </Typography>
  ),
};

export const BodyTypo = {
  render: () => (
    <Typography variants="body" size="md">
      Body
    </Typography>
  ),
};
