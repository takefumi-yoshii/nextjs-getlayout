import { Article } from "@/templates/Article";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Props = {
  data: {};
};

const Page: NextPage = () => {
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

export default Page;
