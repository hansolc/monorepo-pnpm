type UserProps = {
  username: string;
  password: string;
};

type ResponseUserType = {
  id: string;
  username: string;
};

type UserRole = "admin" | "user";

export type { UserProps, ResponseUserType, UserRole };
