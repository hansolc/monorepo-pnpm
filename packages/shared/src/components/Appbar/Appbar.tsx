import React, { ReactNode } from "react";
import Icon, { IconObj } from "../Icons/Icon";
import {
  appbarContainer,
  appbarMdLgInnerContainer,
  appbarTextAlign,
} from "./Appbar.css";
import { sprinkles } from "../../styles/sprinkles.css";

interface AppbarProps {
  size: "sm" | "md" | "lg";
  leadingButton: keyof Pick<typeof IconObj, "MdMenu" | "MdArrowBack">;
  leadingBtnOnClick: () => void;
  children: ReactNode;
  textAlign?: "left" | "right" | "center";
}

const AppbarRoot = ({
  size,
  leadingButton,
  leadingBtnOnClick,
  children,
  textAlign = "left",
}: AppbarProps) => {
  const elements = {
    headline: null as ReactNode,
    subtitle: null as ReactNode,
    trailing: null as ReactNode,
  };

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const name = (child.type as any).displayName;
    if (name === "Appbar.Headline") elements.headline = child;
    if (name === "Appbar.Subtitle") elements.subtitle = child;
    if (name === "Appbar.TrailingElements") elements.trailing = child;
  });

  return (
    <div className={appbarContainer[size]}>
      {size === "sm" ? (
        <>
          <Icon
            iconName={leadingButton}
            size="24"
            onClick={leadingBtnOnClick}
          />
          <div className={appbarTextAlign[textAlign]}>
            {elements.headline}
            {elements.subtitle}
          </div>
          <div className={sprinkles({ display: "flex", gap: 8 })}>
            {elements.trailing}
          </div>
        </>
      ) : (
        <>
          <div className={appbarMdLgInnerContainer}>
            <Icon
              iconName={leadingButton}
              size="24"
              onClick={leadingBtnOnClick}
            />
            <div className={sprinkles({ display: "flex", gap: 8 })}>
              {elements.trailing}
            </div>
          </div>
          <div
            className={appbarTextAlign[textAlign]}
            style={{ padding: "4px" }}
          >
            {elements.headline}
            {elements.subtitle}
          </div>
        </>
      )}
    </div>
  );
};

const Headline = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);
Headline.displayName = "Appbar.Headline";

const Subtitle = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);
Subtitle.displayName = "Appbar.Subtitle";

const TrailingElements = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);
TrailingElements.displayName = "Appbar.TrailingElements";

const Appbar = Object.assign(AppbarRoot, {
  Headline,
  Subtitle,
  TrailingElements,
});

export default Appbar;
