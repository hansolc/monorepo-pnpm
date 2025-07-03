import { Fragment, useRef } from "react";
import { Tab } from ".";

function Example() {
  const ref = useRef<HTMLAnchorElement | null>(null);
  return <Tab as="a" ref={ref}></Tab>;
}

export default Example;
