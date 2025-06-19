import type { StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import TextField from "./index";
import { InputStateTypes } from "./types";
import { useFocus, useTyping } from "@hooks/index";

const meta = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledTextField = {
  name: "Floating Label",
  render: () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [val, setVal] = useState("");
    const [inpuState, setInputState] = useState<InputStateTypes>("blur");
    const focusEvents = useFocus({
      onFocusCallback: () => setInputState("focused"),
      onBlurCallback: () => setInputState("blur"),
    });

    return (
      <TextField value={val} onChange={setVal} state={inpuState}>
        <TextField.FloatingLabel>Label</TextField.FloatingLabel>
        <TextField.InputWithFix type="text" ref={inputRef} {...focusEvents} />
        <TextField.Clear as={<button>button</button>} elRef={inputRef} />
        <TextField.SupportingText>Support message</TextField.SupportingText>
      </TextField>
    );
  },
};

export const OutlinedLabel = {
  name: "Outlined Label",
  render: () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inpuState, setInputState] = useState<InputStateTypes>("blur");
    const focusEvents = useFocus({
      onFocusCallback: () => setInputState("focused"),
      onBlurCallback: () => setInputState("blur"),
    });
    const { isTyping, startTyping } = useTyping({ inputRef });

    return (
      <TextField state={inpuState} isTyping={isTyping}>
        <TextField.Fieldset>
          <TextField.FloatingLabel tag="legend">Label</TextField.FloatingLabel>
          <TextField.InputWithFix type="text" ref={inputRef} {...focusEvents} />
          <TextField.Clear
            as={<button>button</button>}
            elRef={inputRef}
            startTyping={startTyping}
          />
        </TextField.Fieldset>
        <TextField.SupportingText>Support message</TextField.SupportingText>
      </TextField>
    );
  },
};

export const ErrorInput = {
  name: "Error Label",
  render: () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inpuState, setInputState] = useState<InputStateTypes>("blur");
    const focusEvents = useFocus({
      onFocusCallback: () => setInputState("focused"),
      onBlurCallback: () => setInputState("blur"),
    });
    const { isTyping, startTyping } = useTyping({ inputRef });
    const error = "There is an error";

    return (
      <TextField state={inpuState} isTyping={isTyping} error={error}>
        <TextField.Fieldset>
          <TextField.FloatingLabel tag="legend">Label</TextField.FloatingLabel>
          <TextField.InputWithFix type="text" ref={inputRef} {...focusEvents} />
          <TextField.Clear
            as={<button>button</button>}
            elRef={inputRef}
            startTyping={startTyping}
          />
        </TextField.Fieldset>
        <TextField.SupportingText>Support message</TextField.SupportingText>
      </TextField>
    );
  },
};
