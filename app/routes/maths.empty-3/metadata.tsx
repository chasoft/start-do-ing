/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, MathsLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from '@tabler/icons-react';

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const MATHS_EMPTY_3: Block<MathsLayoutId> = {
  id: "maths-empty-3",
  icon: { data: <IconAlertTriangle />, color: "#000" },
  title: "Maths Empty 3",
  description: "Fast maths for kids 3",
  to: "/maths/empty-3",
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
