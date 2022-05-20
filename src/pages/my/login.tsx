import { MyLogin } from "@/templates/MyLogin";
import { GetServerSideProps, NextPage } from "next";

type Props = {};

const Page: NextPage<Props> = () => {
  return <MyLogin />;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

export default Page;
