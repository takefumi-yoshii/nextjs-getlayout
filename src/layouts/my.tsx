import { GetLayout } from "@/types";
import { RecoilRoot } from "recoil";

export const MyLayout: GetLayout = (page) => <RecoilRoot>{page}</RecoilRoot>;
