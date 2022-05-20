import { Home } from "@/templates/Home";
import type { NextPageWithLayout } from "@/types";

const Page: NextPageWithLayout = () => {
  return <Home />;
};

Page.getLayout = (page) => page;

export default Page;
