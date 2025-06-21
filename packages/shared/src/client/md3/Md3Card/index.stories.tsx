import { Meta, StoryObj } from "@storybook/react/*";
import Md3Card from "./index";
import { sprinkles } from "@styles/sprinkles.css";
import { Typography } from "src/server";

const meta: Meta<typeof Md3Card> = {
  title: "MaterialDesign3/Md3Card",
  component: Md3Card,
  argTypes: {
    children: { description: "ReactNode" },
    as: { description: "ElementType (ex. div, span, ...)" },
    ref: { description: "Ref, 추후 확장성(dragged, intersection observer)" },
    className: { description: "Styling" },
    variants: {
      description: "Card Types",
      control: "radio",
      options: ["elevated", "filled", "outlined"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CanvasCard: Story = {
  args: {
    variants: "elevated",
    children: "Card Content",
    as: "div",
  },
};

export const BaseMd3Card = {
  render: () => {
    const arr = ["elevated", "filled", "outlined"] as const;
    return (
      <div className={sprinkles({ display: "flex", gap: 12 })}>
        {arr.map((d) => {
          return (
            <Md3Card
              variants={d}
              className={sprinkles({
                flex: 1,
                flexDirection: "column",
                display: "flex",
              })}
              key={d}
            >
              <Typography variants="display" size="lg">
                Title
              </Typography>
              <Typography variants="headline" size="md">
                Headline
              </Typography>
              <Typography variants="body" size="lg">
                Body
              </Typography>
            </Md3Card>
          );
        })}
      </div>
    );
  },
};

export const ImageCard = {
  render: () => {
    return (
      <Md3Card style={{ width: "300px", height: "300px" }}>
        <img
          src={
            "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww"
          }
          alt="sample image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        ></img>
      </Md3Card>
    );
  },
};
