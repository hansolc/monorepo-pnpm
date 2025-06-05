import { FrameworkMenu } from "@monorepo-pnpm/shared";

interface Props {
  types: string | undefined;
  setTypes: (val: string | undefined) => void;
}

const FormTypeSelector = ({ types, setTypes }: Props) => {
  return (
    <div className="max-w-[200px] ml-auto">
      <FrameworkMenu
        label="Select Types"
        options={["outlined", "filled"]}
        change={setTypes}
        selected={types}
      />
    </div>
  );
};

export default FormTypeSelector;
