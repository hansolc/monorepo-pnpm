import { Button } from "@monorepo-pnpm/shared";

function App() {
  return (
    <>
      <div className="flex text-center">
        <Button size="lg" ty="elevated">
          Button
        </Button>
        <Button size="lg" ty="filled">
          Button
        </Button>
        <Button size="lg" ty="filledTonal">
          Button
        </Button>
        <Button size="lg" ty="outlined">
          Button
        </Button>
        <Button size="lg" ty="text">
          Button
        </Button>
      </div>
    </>
  );
}

export default App;
