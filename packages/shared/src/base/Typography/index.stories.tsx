import Typography from "./index";

const meta = {
  title: "base/Typhography",
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
