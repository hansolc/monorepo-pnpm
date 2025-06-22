import { Meta, StoryObj } from "@storybook/react/*";
import HeroBanner from ".";
import Typography from "../Typography";

const meta: Meta<typeof HeroBanner> = {
  title: "Components/HeroBanner",
  component: HeroBanner,
  argTypes: {
    ariaLabel: { description: "aria-label 속성" },
    bg: {
      description: "Background Image (image(url), size, repeat, position)",
    },
    children: { description: "ReactNode", control: "text" },
    className: { description: "Styling" },
    height: { description: "full(100vh) | auto" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CanvasHerobanner: Story = {
  args: {
    ariaLabel: "Hero Banner",
    bg: {
      image:
        "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww",
    },
    height: "full",
    children: (
      <Typography variants="display" size="lg">
        Any Text Here
      </Typography>
    ),
  },
};

export const OverlayHeroBanner = {
  render: () => {
    return (
      <HeroBanner
        bg={{
          image:
            "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww",
        }}
      >
        <HeroBanner.Overlay />
        <Typography
          variants="display"
          size="lg"
          style={{ color: "white", zIndex: 1 }}
        >
          Any Text Here
        </Typography>
      </HeroBanner>
    );
  },
};
