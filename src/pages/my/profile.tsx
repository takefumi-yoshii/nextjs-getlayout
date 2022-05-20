import { MyProfile } from "@/templates/MyProfile";
import { GetServerSideProps, NextPage } from "next";

type Props = {};

const Page: NextPage<Props> = () => {
  return <MyProfile />;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

export default Page;
