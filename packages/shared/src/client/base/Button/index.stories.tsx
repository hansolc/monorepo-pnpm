import { Button } from ".";
import { Fragment } from "react";

const meta = {
  title: "Components/Button",
};

export default meta;

export const Example = {
  render: () => {
    return <Button onClick={() => console.log("click!")}>button</Button>;
  },
};

export const RenderProps = {
  render: () => {
    return (
      <>
        <style>
          {`
          button[data-hover] {
            background-color: black;
            color: white;
          }
        `}
        </style>
        <Button as={Fragment}>
          {({ active, disabled, focus, hover }) => {
            return (
              <button>{`active: ${active}, focus: ${focus}, hover: ${hover}`}</button>
            );
          }}
        </Button>
      </>
    );
  },
};
