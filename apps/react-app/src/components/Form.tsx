import { Md3Button, Md3Input } from "@monorepo-pnpm/shared/md3";
import { Typography } from "@monorepo-pnpm/shared/base";
import useFormValidation from "../hooks/useFormValidation";
import { FaUser } from "react-icons/fa";
import { MdKey, MdAccessibility, MdEmail, MdMoney } from "react-icons/md";

export interface UserProps {
  id: string;
  password: string;
  email: string;
  money: string;
  introduce: string;
}

const Form = () => {
  const { register, handleSubmit, errors } = useFormValidation<UserProps>();

  const submit = async (data: UserProps) => {
    alert(
      `제출 성공! ID: ${data.id}, pw: ${data.password}, email: ${data.email}, money: ${data.money}, intro: ${data.introduce}`
    );
  };

  return (
    <form
      action="submit"
      onSubmit={handleSubmit(submit)}
      className="flex flex-col gap-[25px]"
    >
      <Typography size="lg" ty="display">
        Form Title
      </Typography>
      <Md3Input
        label="ID*"
        type="text"
        {...register("id", {
          required: "required*",
          pattern: {
            value: /^[a-zA-Z0-9]{4,8}$/,
            message: "Enter 4 to 8 characters using only letters and numbers*",
          },
        })}
        inputConfig={{
          supportingText:
            "username(Enter 4 to 8 characters using only letters and numbers)*",
          leadingIcon: <FaUser size="24" />,
        }}
        error={errors.id}
      />
      <Md3Input
        label="Password*"
        type="password"
        inputConfig={{
          supportingText:
            "password(Enter at least 8 characters using only letters and numbers)*",
          leadingIcon: <MdKey size="24" />,
        }}
        {...register("password", {
          required: "required*",
          pattern: {
            value: /^[A-Za-z0-9]{8,}$/,
            message:
              "Enter at least 8 characters using only letters and numbers",
          },
        })}
        error={errors.password}
      />
      <div className="flex">
        <Md3Input
          label="email"
          type="text"
          inputConfig={{
            leadingIcon: <MdEmail size="24" />,
            suffix: "@gamil.com",
          }}
          {...register("email", {})}
          className="flex-auto"
        />
        <Md3Input
          label="money"
          type="number"
          inputConfig={{
            leadingIcon: <MdMoney size="24" />,
            prefix: "$",
          }}
          {...register("money", {})}
          className="flex-auto"
          outlined={true}
        />
      </div>
      <Md3Input
        label="Introduce"
        type="text"
        inputConfig={{
          supportingText: "please introduce yourself",
          leadingIcon: <MdAccessibility size="24" />,
          fixedHeight: 3,
        }}
        {...register("introduce", {})}
        outlined={true}
      />
      <Md3Button size="md" ty="filled">
        Submit
      </Md3Button>
    </form>
  );
};

export default Form;
