import React, { useEffect, useState } from "react";

const useTyping = ({
  value,
  inputRef,
}: {
  value?: string;
  inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
}) => {
  const [isTyping, startTyping] = useState(false);

  useEffect(() => {
    // uncontrolled일 경우에만 이벤트 등록
    if (value !== undefined) return;
    const el = inputRef.current;
    if (!el) return;

    const handleInput = () => {
      const value = el.value;

      startTyping((prev) => {
        if (!prev && value) {
          return true; // 타이핑 시작
        } else if (prev && !value) {
          return false; // 모두 지움
        }
        return prev; // 상태 유지
      });
    };

    el.addEventListener("input", handleInput);
    return () => {
      el.removeEventListener("input", handleInput);
    };
  }, []);

  return { isTyping, startTyping };
};

export default useTyping;
