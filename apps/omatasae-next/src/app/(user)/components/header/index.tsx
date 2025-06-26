import Header from "./HomeHeader.server";
import HeaderClient from "./HomeHeader.client";

export default function HomeHeader() {
  return <Header actions={<HeaderClient />} />;
}
