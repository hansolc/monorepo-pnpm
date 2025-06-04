import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import {
  fieldSet,
  label as legendStyle,
} from "@frameworks/FrameworkInput/components/Label.css";
import Menu from "./components/Menu";
import Flex from "@components/Flex/Flex";

const FrameworkMenuExample = () => {
  const label = "Label";
  const options = ["Item1", "Item2", "Item3"];
  const [selected, change] = useState<string | undefined>(undefined);
  return (
    <Menu
      trigger={
        <fieldset className={fieldSet({ type: "outlined" })}>
          <legend className={legendStyle({ floated: true })}>{label}</legend>
          <Flex justify="between">
            {String(selected ?? "선택해주세요.")}
            <MdArrowDropDown size="24" />
          </Flex>
        </fieldset>
      }
      options={options}
      onChange={change}
    />
  );
};

export default FrameworkMenuExample;
