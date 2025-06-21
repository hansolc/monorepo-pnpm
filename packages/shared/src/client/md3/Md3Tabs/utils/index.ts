import React from "react";

export function flattenChildren(children: React.ReactNode): React.ReactNode[] {
  const result: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === React.Fragment) {
      result.push(...flattenChildren(child.props.children));
    } else {
      result.push(child);
    }
  });

  return result;
}
