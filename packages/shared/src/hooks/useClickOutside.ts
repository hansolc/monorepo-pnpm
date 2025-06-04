import { RefObject, useEffect } from "react";

interface Props {
  ref: RefObject<HTMLElement>;
  onClickOutside: () => void;
}

const useClickOutside = ({ ref, onClickOutside }: Props) => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
