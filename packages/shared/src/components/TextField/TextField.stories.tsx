import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MdKey } from "react-icons/md";
import TextField from "./TextField";
import useFocus from "./hooks/useFocus";

const meta = {
  title: "Reusable/TextField",
  component: TextField,
  // tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FloatingLabelTextField: Story = {
  name: "Floating Label",
  render: () => {
    const [val, setVal] = useState("");
    const [disabled, setDisabled] = useState(false);
    const { focusEvents, inputState } = useFocus({ disabled });

    return (
      <>
        <TextField
          value={val}
          onChange={(e) => setVal(e.target.value)}
          state={inputState}
          {...focusEvents}
        >
          <TextField.FloatingLabel>Label</TextField.FloatingLabel>
          <TextField.Input
            placeholder="Type here"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <TextField.Clear as={<button>button</button>} withClear={true} />
        </TextField>
        <TextField.SupportingText>Support message</TextField.SupportingText>
      </>
    );
  },
};

export const OutlinedLabel: Story = {
  name: "Outlined Label",
  render: () => {
    const [val, setVal] = useState("");
    const [disabled, setDisabled] = useState(false);
    const { focusEvents, inputState } = useFocus({ disabled });

    return (
      <>
        <TextField
          value={val}
          onChange={(e) => setVal(e.target.value)}
          state={inputState}
          {...focusEvents}
        >
          <TextField.OutlinedLabel>Label</TextField.OutlinedLabel>
          <TextField.Input
            placeholder="Type here"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <TextField.Clear as={<button>button</button>} withClear={true} />
        </TextField>
        <TextField.SupportingText>Support message</TextField.SupportingText>
      </>
    );
  },
};

export const WithPrefixSuffix = {
  render: () => (
    <TextField value="value" onChange={() => {}} state="focused">
      <TextField.FloatingLabel>Label</TextField.FloatingLabel>
      <TextField.InputWithFix
        pfix={{ text: "₩", position: "prefix" }}
        sfix={{ text: "원", position: "suffix" }}
      />
      <TextField.SupportingText>Currency input</TextField.SupportingText>
    </TextField>
  ),
};
