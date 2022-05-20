import { Articles } from "@/templates/Articles";
import { GetStaticProps, NextPage } from "next";

type Props = {};

const Page: NextPage<Props> = () => {
  return <Articles />;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: {} };
};

export default Page;
