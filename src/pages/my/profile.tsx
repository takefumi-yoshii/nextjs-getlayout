import { MyLayout } from "@/layouts/my";
import { MyProfile } from "@/templates/MyProfile";
import type { NextPageWithLayout } from "@/types";
import { GetServerSideProps } from "next";

type Props = {};

const Page: NextPageWithLayout<Props> = () => {
  return <MyProfile />;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

Page.getLayout = MyLayout;

export default Page;
