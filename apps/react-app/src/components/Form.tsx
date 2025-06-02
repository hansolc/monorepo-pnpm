import { useState } from "react";
import FrameworkTextfieldInput from "./FrameworkTextfieldInput";
import { Button } from "@packages/shared";

interface UserProps {
  id: string;
  password: string;
}

const Form = () => {
  const [userInfo, setUserInfo] = useState<UserProps>({
    id: "",
    password: "",
  });

  return (
    <form
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(userInfo);
      }}
    >
      <FrameworkTextfieldInput
        label="ID"
        value={userInfo.id}
        onChange={(val) =>
          setUserInfo({
            ...userInfo,
            id: val,
          })
        }
        type="text"
        supportingText="아이디를 입력해주세요"
      />
      <FrameworkTextfieldInput
        label="Password"
        value={userInfo.password}
        onChange={(val) =>
          setUserInfo({
            ...userInfo,
            password: val,
          })
        }
        type="password"
        supportingText="비밀번호를 입력해주세요"
      />
      <Button size="md" ty="elevated">
        Submit
      </Button>
    </form>
  );
};

export default Form;
