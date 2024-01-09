import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Start-Do-Ing" },
    { name: "description", content: "Welcome to Startdo.ing!" },
  ];
};

export default function Index() {
  return (
    <div>Home</div>
  );
}
