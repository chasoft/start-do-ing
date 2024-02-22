import shuffle from "lodash.shuffle"
import type { TColor } from "~/utils/types"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const BLUE: TColor = {
	bgColor: "bg-blue-200",
	borderColor: "border-blue-400"
}

export const SKY: TColor = {
	bgColor: "bg-sky-200",
	borderColor: "border-sky-400"
}

export const CYAN: TColor = {
	bgColor: "bg-cyan-200",
	borderColor: "border-blue-200"
}

export const TEAL: TColor = {
	bgColor: "bg-teal-200",
	borderColor: "border-teal-400"
}

export const EMERALD: TColor = {
	bgColor: "bg-emerald-200",
	borderColor: "border-emerald-400"
}

export const GREEN: TColor = {
	bgColor: "bg-green-200",
	borderColor: "border-green-400"
}

export const INDIGO: TColor = {
	bgColor: "bg-indigo-200",
	borderColor: "border-indigo-400"
}

export const VIOLET: TColor = {
	bgColor: "bg-violet-200",
	borderColor: "border-violet-400"
}

export const PURPLE: TColor = {
	bgColor: "bg-purple-200",
	borderColor: "border-purple-400"
}

export const FUCHSIA: TColor = {
	bgColor: "bg-fuchsia-200",
	borderColor: "border-fuchsia-400"
}

export const ROSE: TColor = {
	bgColor: "bg-rose-200",
	borderColor: "border-rose-400"
}

export const PINK: TColor = {
	bgColor: "bg-pink-200",
	borderColor: "border-pink-400"
}

export const GRAY: TColor = {
	bgColor: "bg-gray-200",
	borderColor: "border-gray-400"
}

export const DEFAULT_COLORS: TColor = GRAY

const _COLORS: TColor[] = [
	BLUE,
	SKY,
	CYAN,
	TEAL,
	EMERALD,
	GREEN,
	INDIGO,
	VIOLET,
	PURPLE,
	FUCHSIA,
	ROSE,
	PINK
]

// I want something new every time I run the app
export const COLORS = shuffle(_COLORS)
