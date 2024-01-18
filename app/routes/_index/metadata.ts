import { Block } from "~/utils/types";

export const HOME: Block = {
  id: "home",
  icon: "/home.svg",
  title: "Home",
  description: "",
  to: "/",
  tags: [],
  favorite: true,
  color: {
    text: "#000",
    bg: "bg-emerald-200",
    primaryBg: "bg-emerald-300",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
