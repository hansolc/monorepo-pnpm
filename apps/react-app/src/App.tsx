import Wrapper from "./components/Wrapper";
import Form from "./components/Form";
import FormTypeSelector from "./components/FormTypeSelector";
import { useState } from "react";

function App() {
  const [types, setTypes] = useState<string>("outlined");

  return (
    <Wrapper>
      <FormTypeSelector types={types} setTypes={setTypes} />
      <Form types={types} />
    </Wrapper>
  );
}

export default App;
