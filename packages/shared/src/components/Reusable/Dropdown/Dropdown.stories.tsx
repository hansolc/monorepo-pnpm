import { StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Reusable/Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleDropdown = {
  render: () => {
    return (
      <Dropdown>
        <Dropdown.Trigger as={<button>button</button>} />
        <Dropdown.Menu>
          {[1, 2, 3].map((tmp, idx) => {
            return (
              <Dropdown.Item key={`temp_${idx}`} value={String(tmp)}>
                {tmp}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  },
};
