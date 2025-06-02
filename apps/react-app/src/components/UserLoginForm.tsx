// // import {
// //   // Button,
// //   Form as CustomForm,
// //   Typography,
// //   useFormValidation,
// // } from "@monorepo-pnpm/shared";
// import { Button } from "@packages/shared";
// import { Form as CustomForm } from "@packages/shared";
// import { Typography, useFormValidation } from "@packages/shared";
// import { login } from "../api/auth";
// import { useState } from "react";

// type LoginProps = {
//   username: string;
//   password: string;
// };

// const UserLoginForm = () => {
//   const { register, handleSubmit, errors } = useFormValidation<LoginProps>();
//   const [externalError, setExternalError] = useState("");

//   const submit = async (data: LoginProps) => {
//     try {
//       console.log(data);
//       await login();
//     } catch (error) {
//       if (error instanceof Error) {
//         setExternalError(error.message);
//         return;
//       }
//       console.error(error);
//     }
//   };

//   return (
//     <CustomForm onSubmit={handleSubmit(submit)}>
//       <CustomForm.FormTitle align="center">Login</CustomForm.FormTitle>
//       <CustomForm.FormTextInput
//         label="login"
//         type="text"
//         supportingText="아이디를 입력해주세요"
//         {...register("username", {
//           required: true,
//           pattern: {
//             value: /^[a-zA-Z0-9]{4,8}$/,
//             message: "4~8자 영문/숫자만 입력",
//           },
//         })}
//         error={errors.username}
//       />
//       <CustomForm.FormTextInput
//         label="password"
//         type="password"
//         supportingText="비밀번호를 입력해주세요"
//         {...register("password", {
//           required: true,
//           pattern: {
//             value: /^[A-Za-z0-9]{8,}$/,
//             message: "8자리 이상 영문/숫자만 입력",
//           },
//         })}
//         error={errors.password}
//       />
//       <Button ty="filled" size="md" type="submit">
//         Login
//       </Button>
//       {externalError && (
//         <Typography ty="body" size="md" className="text-right">
//           {externalError}
//         </Typography>
//       )}
//     </CustomForm>
//   );
// };

// export default UserLoginForm;
