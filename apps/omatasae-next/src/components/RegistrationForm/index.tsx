"use client";

import useFormValidation from "@/hooks/useFormValidation";
import useLogin from "@/hooks/useLogin";
import useRegistration from "@/hooks/useRegistration";
import { UserProps } from "@/types/user";
import { Md3Button, Md3TextField } from "@monorepo-pnpm/shared/client";
import { Typography } from "@monorepo-pnpm/shared/server";
import React from "react";
import { FaUser } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { PiSpinner } from "react-icons/pi";

interface Props {
  type: "login" | "regis";
}

function RegistrationForm({ type }: Props) {
  const { register, handleSubmit, errors } = useFormValidation<UserProps>();
  const loginMutate = useLogin();
  const registerMutate = useRegistration();
  const onSubmit = async (data: UserProps) => {
    if (type === "login") loginMutate.mutate(data);
    else registerMutate.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Md3TextField
        label="username*"
        type="text"
        {...register("username", {
          required: "아이디를 입력해주세요",
          pattern: {
            value: /^[a-zA-Z0-9]{4,8}$/,
            message: "4~8자리의 영문,숫자 이루어져야 합니다.",
          },
        })}
        inputConfig={{
          supportingText: "4~8자리의 영문과 숫자조합*",
          leadingIcon: <FaUser size="24" />,
        }}
        error={errors.username}
        outlined
      />
      <Md3TextField
        label="password*"
        type="password"
        {...register("password", {
          required: "비밀번호를 입력해주세요",
          pattern: {
            value: /^[A-Za-z0-9]{8,}$/,
            message: "최소 8자리이상 영문과 숫자의 조합이어야 합니다.",
          },
        })}
        inputConfig={{
          supportingText: "최소 8자리의 영문과 숫자조합*",
          leadingIcon: <MdKey size="24" />,
        }}
        error={errors.password}
      />
      <Md3Button
        type="submit"
        variants="filled"
        size="md"
        icon={
          loginMutate.isPending
            ? PiSpinner
            : registerMutate.isPending
            ? PiSpinner
            : undefined
        }
      >
        {type === "login" && "로그인"}
        {type === "regis" && "회원가입"}
      </Md3Button>
      {loginMutate.error?.message && (
        <Typography variants="body" size="md" className="text-error">
          {loginMutate.error.message}
        </Typography>
      )}
      {registerMutate.error?.message && (
        <Typography variants="body" size="md" className="text-error">
          {registerMutate.error.message}
        </Typography>
      )}
    </form>
  );
}

export default RegistrationForm;
