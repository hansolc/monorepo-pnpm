import Md3Appbar from ".";
import { MdAccessAlarm } from "react-icons/md";

function Example() {
  return (
    <Md3Appbar
      headline=""
      subtitle=""
      leadingIcon={[<MdAccessAlarm onClick={() => {}} />]}
      trailingIcon={[
        <MdAccessAlarm onClick={() => {}} />,
        <MdAccessAlarm onClick={() => {}} />,
      ]}
      size="sm"
    />
  );
}

export default Example;
