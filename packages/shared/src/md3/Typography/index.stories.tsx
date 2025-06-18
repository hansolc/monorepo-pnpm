import Typography from "./index";

const meta = {
  title: "MaterialDesign3/Typhography",
  component: Typography,
};

export default meta;

export const TypographyExample = {
  render: () => {
    return (
      <Typography role="display" size="md" as="div">
        hello world
      </Typography>
    );
  },
};
