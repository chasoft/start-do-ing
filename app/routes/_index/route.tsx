import { type MetaFunction } from "@remix-run/cloudflare";
import { CustomRouteHandle } from "~/utils/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Start-Do-Ing" },
    { name: "description", content: "Welcome to Startdo.ing!" },
  ];
};

export const handle: CustomRouteHandle = {
  layoutId: "home"
};

export default function Index() {
  return (
    <>This is home</>
  );
}
