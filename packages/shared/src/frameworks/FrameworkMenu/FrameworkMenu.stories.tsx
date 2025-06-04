import { Meta, StoryObj } from "@storybook/react";
import Menu from "./components/Menu";
import FrameworkMenu from "./FrameworkMenu";
import { useState } from "react";

const meta = {
  title: "Frameworks/FrameworkMenu",
  component: Menu,
  argTypes: {
    options: {
      description: "배열 형태로 select내의 옵션들을 받습니다.",
    },
    trigger: {
      description:
        "ReactElement을 받습니다. 이 컴폰너트 클릭을 통해 Menu을 열고 닫습니다.",
    },
    valueAs: {
      description:
        "실제 value값과 사용자에게 보여지는 값이 다르다면 함수를 통해 넘겨주세요",
    },
    onChange: {
      description: "selected 값을 결정합니다.",
    },
    selected: {
      description: "선택된 값입니다.",
    },
  },
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof meta>;

export const FrameworkStyledMenu = {
  render: () => {
    const label = "label";
    const options = ["item1", "itme2", "item3"];
    const [selected, change] = useState<string | undefined>(undefined);

    return (
      <FrameworkMenu
        label={label}
        options={options}
        selected={selected}
        change={change}
      />
    );
  },
};

export default meta;
