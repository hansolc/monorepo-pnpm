import { type PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className="w-full max-w-[780px] m-auto pt-[100px]">{children}</main>
  );
};

export default Wrapper;
