import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import {
  fieldSet,
  label as legendStyle,
} from "@frameworks/FrameworkInput/components/Label.css";
import Menu from "./components/Menu";
import Flex from "@components/Flex/Flex";

interface Props {
  label: string;
  options: Array<string>;
  selected?: string;
  valueAs?: (val?: string) => string;
  change?: (val?: string) => void;
}

const FrameworkMenu = ({
  label,
  options,
  selected,
  change,
  valueAs,
}: Props) => {
  // const [selected, change] = useState<string | undefined>(undefined);
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
      valueAs={valueAs}
    />
  );
};

export default FrameworkMenu;
