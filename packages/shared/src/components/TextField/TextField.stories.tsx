import { Meta } from "@storybook/react";
import TextField from "./TextField";
import { MdAccessTime } from "@react-icons/all-files/md/MdAccessTime";
import { useState } from "react";

const meta = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;

export const BaseTextField = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <TextField
        label="label"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        leadingIcon={<MdAccessTime size="24" />}
        trailingIcon={<MdAccessTime size="24" />}
        supportingText="Supporting Text"
      />
    );
  },
};

export const TextFieldWithoutIcon = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <TextField
        label="label"
        type="text"
        supportingText="Supporting Text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const ErrorTextField = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <TextField
        label="label"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        leadingIcon={<MdAccessTime size="24" />}
        trailingIcon={<MdAccessTime size="24" />}
        supportingText="Supporting Text"
        hasError={true}
      />
    );
  },
};

export const TextFieldDisabled = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <TextField
        label="label"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        leadingIcon={<MdAccessTime size="24" />}
        trailingIcon={<MdAccessTime size="24" />}
        supportingText="Supporting Text"
        disabled={true}
      />
    );
  },
};
