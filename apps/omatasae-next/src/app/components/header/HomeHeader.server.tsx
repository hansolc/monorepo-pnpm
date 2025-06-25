import React from "react";
import Appbar from "@/components/Appbar";

function HomeHeader({ actions }: { actions: React.ReactNode }) {
  return <Appbar headline="오마타세" size="sm" trailingIcon={[actions]} />;
}

export default HomeHeader;
