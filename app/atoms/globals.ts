/* FRAMEWORK */

import { atom } from "jotai";
import { UrlSharingData } from "~/utils/types";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const urlSharingDataAtom = atom<UrlSharingData>({
	image: "",
  title: "",
  description: "",
  url: ""
})