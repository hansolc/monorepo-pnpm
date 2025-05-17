import { Button, Form, TextField, Typography } from "@monorepo-pnpm/shared";
import { FaBeer } from "react-icons/fa";

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
        <Typography size="sm" ty="display">
          hello world
        </Typography>
      </div>
      <TextField
        label="label"
        type="text"
        leadingIcon={<FaBeer size="24" />}
      ></TextField>
      <Form>
        <Form.FormTitle>Title</Form.FormTitle>
        <Form.FormTextInput label="label" type="text" />
      </Form>
    </>
  );
}

export default App;
