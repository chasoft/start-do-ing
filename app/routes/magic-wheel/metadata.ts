import { Block } from "~/utils/types";

export const MAGIC_WHEEL: Block = {
  id: "magic-wheel",
  icon: "/magic-wheel.svg",
  title: "Magic Wheel",
  description: "",
  to: "/magic-wheel",
  tags: [],
  favorite: true,
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
