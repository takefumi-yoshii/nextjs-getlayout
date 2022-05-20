import { MyLayout } from "@/layouts/my";
import { MyLogin } from "@/templates/MyLogin";
import type { NextPageWithLayout } from "@/types";
import { GetServerSideProps } from "next";

type Props = {};

const Page: NextPageWithLayout<Props> = () => {
  return <MyLogin />;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

Page.getLayout = MyLayout;

export default Page;
