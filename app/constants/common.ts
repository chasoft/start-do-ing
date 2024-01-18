import { ABOUT } from "~/routes/about/metadata";
import { Block, Breakpoint, Tag } from "~/utils";
import { COUNT_DOWN } from "~/routes/count-down/metadata";
import { HOME } from "~/routes/_index/metadata";
import { MAGIC_WHEEL } from "~/routes/magic-wheel/metadata";
import { PASSWORD_GENERATOR } from "~/routes/random.password-generator/metadata";
import { RANDOM } from "~/routes/random/metadata";

export const SITE = {
  title: "Start-Do-Ing",
  description:
    "Welcome to Startdo.ing! Where you can find useful and interesting resources to help you get started.",
};

export const breakpoints: Breakpoint[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
];

export const tags: Record<Tag, string> = {
  random: "Random",
  number: "Number",
  alphabet: "Alphabet",
  password: "Password",
  kahoot: "Kahoot",
};

export const DYNAMIC_BLOCKS: Block[] = [
  HOME,
  ABOUT,
  RANDOM,
  PASSWORD_GENERATOR,
  COUNT_DOWN,
  MAGIC_WHEEL,
];

export const DEFAULT_BLOCK: Block = DYNAMIC_BLOCKS[0];
