import { MdAccessAlarm } from "react-icons/md";
import Tabs from ".";
import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof Tabs> = {
  title: "MaterialDesign3/Md3Tabs",
  component: Tabs,
  argTypes: {
    children: {
      description:
        "TabPanels(TabList의 순서에 맞게 TabPanels 노드와 매칭됩니다.)",
    },
    className: { description: "Styling" },
    onChange: { description: "(number | undefined)=>void" },
    options: {
      description: "Tabs({ icon?: IconType, label: string })[]",
      control: { type: "object" },
      table: {
        defaultValue: {
          summary: `[{"label": "Tab 1", icon: IconType(react-icon))}, {"label": "Tab 2"}]`,
        },
      },
    },
    selectedIndex: { description: "Selected Tab Index" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CanvasTabs: Story = {
  args: {
    options: [{ label: "tab1" }, { label: "tab2" }, { label: "tab3" }],
    children: (
      <>
        <div style={{ height: "300px" }}>Tab Panel1</div>
        <div style={{ height: "300px" }}>Tab Panel2</div>
        <div style={{ height: "300px" }}>Tab Panel3</div>
      </>
    ),
  },
};

export const BaseMd3Tabs = {
  render: () => {
    const options = [
      { label: "Tab1" },
      { label: "Tab2" },
      { label: "Tab3", icon: MdAccessAlarm },
    ];
    const [state, setState] = useState<number | undefined>();

    return (
      <Tabs options={options} onChange={setState} selectedIndex={state}>
        <>
          <div>content1</div>
          <div>content2</div>
          <div>content3</div>
        </>
      </Tabs>
    );
  },
};
