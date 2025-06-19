import { PropsWithChildren, useEffect, useState } from "react";
import clsx from "clsx";

function Header({ children }: PropsWithChildren) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300 h-[60px] flex items-center",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div
        className={clsx(
          "xl:max-w-[1280px] xl:mx-auto xl:px-0 px-4 flex gap-10 w-full",
          { "text-black": isScrolled },
          { "text-white": !isScrolled }
        )}
      >
        {children}
      </div>
    </nav>
  );
}

export default Header;
