import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

export type GetLayout = (page: ReactElement) => ReactNode;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: GetLayout;
};

export type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout;
};
