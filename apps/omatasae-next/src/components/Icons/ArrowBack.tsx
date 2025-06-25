"use client";
import { MdArrowBackIos } from "react-icons/md";

export default function ArrowBackButton({ ...props }) {
  return (
    <MdArrowBackIos
      onClick={() => window.history.back()}
      className="cursor-pointer"
      {...props}
    />
  );
}
