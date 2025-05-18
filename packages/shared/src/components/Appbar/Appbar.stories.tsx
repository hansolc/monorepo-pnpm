import { Meta, StoryObj } from "@storybook/react";
import { Appbar } from "./Appbar";
import { MdAccessTime } from "@react-icons/all-files/md/MdAccessTime";
import Typography from "../Typography/Typography";

const meta = {
  title: "Components/Appbar",
  component: Appbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Appbar>;

export default meta;

export const SmallLayout = {
  render: () => (
    <Appbar size="sm" leadingButton="MdMenu" leadingBtnOnClick={() => {}}>
      <Appbar.Headline>Small Title</Appbar.Headline>
      <Appbar.Subtitle>Small Subtitle</Appbar.Subtitle>
      <Appbar.TrailingElements>
        <MdAccessTime />
      </Appbar.TrailingElements>
    </Appbar>
  ),
};

export const MediumLayout = {
  render: () => (
    <Appbar size="md" leadingButton="MdArrowBack" leadingBtnOnClick={() => {}}>
      <Appbar.Headline>Medium Title</Appbar.Headline>
      <Appbar.Subtitle>Medium Subtitle</Appbar.Subtitle>
      <Appbar.TrailingElements>
        <MdAccessTime />
      </Appbar.TrailingElements>
    </Appbar>
  ),
};

export const OrderIndependent = {
  render: () => (
    <Appbar size="md" leadingButton="MdMenu" leadingBtnOnClick={() => {}}>
      <Appbar.Subtitle>Subtitle First</Appbar.Subtitle>
      <Appbar.TrailingElements>
        <MdAccessTime />
      </Appbar.TrailingElements>
      <Appbar.Headline>Headline Later</Appbar.Headline>
    </Appbar>
  ),
};

export const ManyTrailingIcons = {
  render: () => (
    <Appbar size="sm" leadingButton="MdArrowBack" leadingBtnOnClick={() => {}}>
      <Appbar.Headline>Many Icons</Appbar.Headline>
      <Appbar.TrailingElements>
        <MdAccessTime />
        <MdAccessTime />
        <MdAccessTime />
      </Appbar.TrailingElements>
    </Appbar>
  ),
};

export const CustomTypography = {
  render: () => (
    <Appbar size="lg" leadingButton="MdMenu" leadingBtnOnClick={() => {}}>
      <Appbar.Headline>
        <Typography size="lg" ty="headline">
          Red Headline
        </Typography>
      </Appbar.Headline>
      <Appbar.Subtitle>
        <Typography size="sm" ty="label">
          Italic Subtitle
        </Typography>
      </Appbar.Subtitle>
    </Appbar>
  ),
};

export const TextLeftAlign = {
  render: () => (
    <Appbar
      size="lg"
      leadingButton="MdMenu"
      leadingBtnOnClick={() => {}}
      textAlign="left"
    >
      <Appbar.Headline>
        <Typography size="lg" ty="headline">
          Red Headline
        </Typography>
      </Appbar.Headline>
      <Appbar.Subtitle>
        <Typography size="sm" ty="label">
          Italic Subtitle
        </Typography>
      </Appbar.Subtitle>
    </Appbar>
  ),
};

export const TextCenterAlign = {
  render: () => (
    <Appbar
      size="lg"
      leadingButton="MdMenu"
      leadingBtnOnClick={() => {}}
      textAlign="center"
    >
      <Appbar.Headline>
        <Typography size="lg" ty="headline">
          Red Headline
        </Typography>
      </Appbar.Headline>
      <Appbar.Subtitle>
        <Typography size="sm" ty="label">
          Italic Subtitle
        </Typography>
      </Appbar.Subtitle>
    </Appbar>
  ),
};
