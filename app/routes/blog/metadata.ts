/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, BlogLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const BLOG: Block<"blog"> = {
  id: "blog",
  icon: "/blog.svg",
  title: "Blog",
  description: "Blogging",
  to: "/blog",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-fuchsia-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};

export const BLOG_AI: Block<BlogLayoutId> = {
  id: "AI",
  icon: "/AI.svg",
  title: "AI",
  description: "AI stories",
  to: "/blog/ai",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-fuchsia-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};

export const BLOG_CHESS: Block<BlogLayoutId> = {
  id: "chess",
  icon: "/chess.svg",
  title: "Chess",
  description: "Chess to be fun",
  to: "/blog/chess",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-fuchsia-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};

export const BLOG_PHILOSOPHY: Block<BlogLayoutId> = {
  id: "philosophy",
  icon: "/philosophy.svg",
  title: "Philosophy",
  description: "Think about the universe's rules",
  to: "/blog/philosophy",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-fuchsia-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};

export const BLOG_PROGRAMMING: Block<BlogLayoutId> = {
  id: "programming",
  icon: "/programming.svg",
  title: "Programming",
  description: "How we guide the machine to work",
  to: "/blog/programming",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-fuchsia-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};

export const BLOG_TRAVEL: Block<BlogLayoutId> = {
  id: "travel",
  icon: "/travel.svg",
  title: "Travel",
  description: "Travel around the world",
  to: "/blog/travel",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-fuchsia-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};