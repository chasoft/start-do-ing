/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DomainsLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DOMAINS_BUILDER: Block<DomainsLayoutId> = {
  id: "domains-builder",
  icon: "/domains-builder.svg",
  title: "Domains Builder",
  description: "Find your desired domain names",
  to: "/domains/builder",
  group: [],
  favorite: false,
  color: {
    text: "#000",
    primaryBg: "bg-rose-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};