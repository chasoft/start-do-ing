/**
 * Chapter 8: Tình huống mất an toàn giao thông nghiêm trọng (câu hỏi điểm liệt)
 * 						60 questions
 */

import { chapter1 } from "./600-chapter-1"
import { chapter2 } from "./600-chapter-2"
import { chapter3 } from "./600-chapter-3"
import { chapter4 } from "./600-chapter-4"

// Just for reference
export const chapter8_ids: number[] = [
	17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 33, 35, 36, 37, 40, 43, 45, 46,
	47, 48, 49, 50, 51, 52, 53, 84, 91, 99, 101, 109, 112, 114, 118, 119, 143, 145, 147,
	150, 153, 154, 161, 199, 200, 210, 211, 214, 221, 227, 231, 242, 245, 248, 258, 260,
	261, 262
]

export const getChapter8 = () => [
	...chapter1.filter((question) => question.isPenalty === true),
	...chapter2.filter((question) => question.isPenalty === true),
	...chapter3.filter((question) => question.isPenalty === true),
	...chapter4.filter((question) => question.isPenalty === true)
]
