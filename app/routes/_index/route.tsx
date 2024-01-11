import { type MetaFunction } from "@remix-run/cloudflare";
import { TRouteHandle } from "~/data/constants";

export const meta: MetaFunction = () => {
  return [
    { title: "Start-Do-Ing" },
    { name: "description", content: "Welcome to Startdo.ing!" },
  ];
};

export const handle: TRouteHandle = {
  layoutId: "home"
};

export default function Index() {
  return (
    <>This is home</>
  );
}
