import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description:
        "버튼의 가장 중요한 요소입니다. 사용자가 버튼을 클릭 했을 때 발생할 액션에 대해 설명합니다. ",
    },

    size: {
      control: "radio",
      description: "버튼의 사이즈를 결정합니다.",
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: {
          summary: "md",
        },
      },
    },
    ty: {
      control: "select",
      description: "총 5가지의 타입이 있습니다.",
      options: ["elevated", "filled", "filledTonal", "outlined", "text"],
    },
    icon: {
      description:
        "텍스트 전에 아이콘을 삽입할 수 있습니다. `@react-icons` 을 사용하였으며 Icon 추가를 원할 경우 /src/components/Icons 에서 필요한 icon을 import 받아 추가해주세요.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseButton: Story = {
  args: {
    size: "md",
    children: "Base Button",
    ty: "elevated",
  },
};

export const ResonsiveLayoutButtons = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <Button ty="elevated" size="md" style={{ width: "100%" }}>
          Button
        </Button>
        <Button ty="elevated" size="md">
          Button
        </Button>
        <section>
          <article style={{ marginTop: "1rem" }}>
            <h2>Button 설명</h2>
            <p>
              버튼들은 반응형 화면에서 유동적으로 크기를 가질 수 있어야 합니다.
            </p>
            <ul>
              <li>
                그러나, Desktop 환경에서는 긴 버튼을 만드는 것은 피해주세요.
              </li>
              <li>
                내부 텍스트들은 버튼 길이와 상관없이 중앙 정렬을 유지해주세요.
              </li>
              <li>
                페이지 내 요소들의 순서를 일관성 있게 유지하여 화면 낭독기와
                키보드 네비게이션 사용자가 쉽게 탐색할 수 있도록 해주세요.
              </li>
            </ul>
          </article>
        </section>
      </div>
    );
  },
};

export const ButtonTypes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <section style={{ borderBottom: "1px solid black" }}>
        <Button size="md" ty="elevated">
          Elevated button
        </Button>
        <article style={{ marginTop: "1rem" }}>
          <h2>Elevated 버튼 설명</h2>
          <p>
            <strong>Elevated</strong> 버튼은 그림자(shadow)를 사용하여 표면에서
            떠 있는 듯한 느낌을 줍니다.
          </p>
          <ul>
            <li>
              <strong>Filled</strong> 버튼과 유사하지만, 그림자를 통해 더 높은
              고도감을 표현합니다.
            </li>
            <li>
              일반 버튼보다 더 시각적으로 강조되며, 주의를 끌어야 하는 버튼에
              적합합니다.
            </li>
            <li>
              강조가 더 필요하다면 <code>ty="filled"</code> 스타일을 고려하세요.
            </li>
            <li>
              그림자의 과도한 사용을 피하기 위해서는, 배경과 시각적으로 구분이
              필요한 경우에만 사용하세요.
            </li>
          </ul>
        </article>
      </section>
      <section style={{ borderBottom: "1px solid black" }}>
        <Button size="md" ty="filled">
          Filled button
        </Button>
        <article style={{ marginTop: "1rem" }}>
          <h2>Filled 버튼 설명</h2>
          <p>
            <strong>Filled</strong> 버튼은 FAB(Floating Action Button) 다음으로
            큰 임팩트를 가집니다.
          </p>
          <ul>
            <li>
              <strong>중요한 주요 액션</strong>에 사용합니다.(예: 저장,
              가입하기, 확인)
            </li>
            <li>
              한 페이지 내에 <strong>하나의 주된 목적</strong>에만 사용하는 것이
              이상적입니다.
            </li>
          </ul>
        </article>
      </section>
      <section style={{ borderBottom: "1px solid black" }}>
        <Button size="md" ty="filledTonal">
          Tonal Button
        </Button>
        <article style={{ marginTop: "1rem" }}>
          <h2>Tonal 버튼 설명</h2>
          <p>
            <strong>Tonal</strong>버튼은 Filled 버튼보다는 약하고, Outlined
            버튼보다는 강한 <strong>중간 수준의 시각적 강조</strong>를
            제공합니다.
          </p>
          <ul>
            <li>
              예: ‘다음(next)’ 버튼에는 Filled Tonal을, ‘이전(back)’ 버튼에는
              Outlined 버튼을 사용하는 것이 적절합니다
            </li>
          </ul>
        </article>
      </section>
      <section style={{ borderBottom: "1px solid black" }}>
        <Button size="md" ty="outlined">
          Outlined Button
        </Button>
        <article style={{ marginTop: "1rem" }}>
          <h2>Outlined 버튼 설명</h2>
          <p>
            <strong>Outline</strong>버튼은 마찬가지로 이목을 끌어야 하는
            버튼이지만 주로 filled button과의 조화로 많이 사용할 수 있습니다.
          </p>
          <ul>
            <li>
              Primary 목적으로 filled button을, secondary 목적으로 outline
              버튼을 조합해 사용합니다.
            </li>
            <li>
              <strong>이미지나 비디오 배경</strong>이 있는 화면 위에서는
              가시성이 낮아 사용을 피해야 하며, 그 경우 Filled 버튼이
              권장됩니다.
            </li>
          </ul>
        </article>
      </section>
      <section style={{ borderBottom: "1px solid black" }}>
        <Button size="md" ty="text">
          Text Button
        </Button>
        <article style={{ marginTop: "1rem" }}>
          <h2>Text 버튼 설명</h2>
          <p>
            <strong>Text</strong>버튼은 <strong>가장 낮은 우선순위</strong>를
            가지고 있으며 보통 <strong>다수의 선택지</strong>가있는 UI에서
            사용합니다.
          </p>
          <ul>
            <li>
              Card, Dialog, Snackbar 등의 <strong>컴포넌트 내 액션 버튼</strong>
              으로 적절합니다.
            </li>
            <li>
              예를 들어, Dialog 내에서는 테두리가 없어 주변 텍스트와 자연스럽게
              어우러지며 액션으로 인식됨니다.
            </li>
            <li>배경 이미지 위에서는 시인성이 낮아 사용을 지양해주세요</li>
          </ul>
        </article>
      </section>
    </div>
  ),
};
