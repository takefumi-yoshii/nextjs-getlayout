import { ArticlesLayout } from "@/layouts/articles";
import { Article } from "@/templates/Article";
import type { NextPageWithLayout } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  data: {};
};

const Page: NextPageWithLayout = () => {
  return <Article />;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { data: {} }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

Page.getLayout = ArticlesLayout;

export default Page;
