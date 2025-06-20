import Md3Card from "./index";

const meta = {
  title: "MaterialDesign3/Md3Card",
  component: Md3Card,
};

export default meta;

export const BaseMd3Card = {
  render: () => {
    const arr = ["elevated", "filled", "outlined"] as const;
    return (
      <>
        {arr.map((d) => {
          return <Md3Card variants={d}>card1</Md3Card>;
        })}
      </>
    );
  },
};
