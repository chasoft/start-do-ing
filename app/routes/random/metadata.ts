import { Block } from "~/utils/types";

export const RANDOM: Block = {
  id: "random",
  icon: "/random.svg",
  title: "Random",
  description: "",
  to: "/random",
  tags: [],
  favorite: true,
  color: {
    text: "#000",
    bg: "bg-green-200",
    primaryBg: "bg-green-300",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
