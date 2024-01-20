import { Block } from "~/utils/types";

export const COUNT_DOWN: Block = {
  id: "count-down",
  icon: "/count-down.svg",
  title: "Count down",
  description: "",
  to: "/count-down",
  tags: [],
  favorite: false,
  color: {
    text: "#000",
    bg: "bg-blue-200",
    primaryBg: "bg-blue-300",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
