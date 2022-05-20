import { ArticlesLayout } from "@/layouts/articles";
import { Articles } from "@/templates/Articles";
import type { NextPageWithLayout } from "@/types";
import { GetStaticProps } from "next";

type Props = {};

const Page: NextPageWithLayout<Props> = () => {
  return <Articles />;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: {} };
};

Page.getLayout = ArticlesLayout;

export default Page;
