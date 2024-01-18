import { Block } from "~/utils/types";

export const COUNT_DOWN: Block = {
  id: "password-generator",
  icon: "/password-generator.svg",
  title: "Password Generator",
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
