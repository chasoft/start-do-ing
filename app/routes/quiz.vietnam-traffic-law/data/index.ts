/**
 * 600 questions
 * Chapter 1: Khái niệm và quy tắc giao thông đường bộ
 * 						166 questions (45 penalty questions)
 * Chapter 2: Nghiệp vụ vận tải
 * 						16 questions (04 penalty questions)
 * Chapter 3: Văn hóa giao thông và đạo đức người lái xe
 * 						21 questions (11 penalty questions)
 * Chapter 4: Kỹ thuật lái xe
 * 						56 questions (11 penalty questions)
 * Chapter 5: Cấu tạo và sửa chữa
 * 						35 questions (0 penalty questions)
 * Chapter 6: Hệ thống biển báo hiệu đường bộ
 * 						182 questions (0 penalty questions)
 * Chapter 7: Sa hình và kỹ năng xử lý tình huống giao thông
 * 						144 questions (0 penalty questions)
 * Chapter 8: Tình huống mất an toàn giao thông nghiêm trọng (câu hỏi điểm liệt)
 * 						60 questions
 */

import { chapter1 } from "./600-chapter-1"
import { chapter2 } from "./600-chapter-2"
import { chapter3 } from "./600-chapter-3"
import { chapter4 } from "./600-chapter-4"
import { chapter5 } from "./600-chapter-5"
import { chapter6 } from "./600-chapter-6"
import { chapter7 } from "./600-chapter-7"
import { getChapter8 } from "./600-chapter-8"

export type QuestionData = {
	id: number
	question: string
	options: Array<{ text: string; correct?: boolean }>
	image?: string
	isPenalty?: boolean
	explanation?: string
}

export const chapters = [
	{
		id: "1",
		title: "Khái niệm và quy tắc giao thông đường bộ",
		description: "166 câu hỏi (45 câu hỏi điểm liệt)",
		color: "grape"
	},
	{
		id: "2",
		title: "Nghiệp vụ vận tải",
		description: "16 câu hỏi (04 câu hỏi điểm liệt)",
		color: "cyan"
	},
	{
		id: "3",
		title: "Văn hóa giao thông và đạo đức người lái xe",
		description: "21 câu hỏi (11 penalty questions)",
		color: "teal"
	},
	{
		id: "4",
		title: "Kỹ thuật lái xe",
		description: "56 câu hỏi (11 câu hỏi điểm liệt)",
		color: "green"
	},
	{
		id: "5",
		title: "Cấu tạo và sửa chữa",
		description: "35 câu hỏi (0 câu hỏi điểm liệt)",
		color: "violet"
	},
	{
		id: "6",
		title: "Hệ thống biển báo hiệu đường bộ",
		description: "182 câu hỏi (0 câu hỏi điểm liệt)",
		color: "yellow"
	},
	{
		id: "7",
		title: "Sa hình và kỹ năng xử lý tình huống giao thông",
		description: "144 câu hỏi (0 câu hỏi điểm liệt)",
		color: "indigo"
	},
	{
		id: "8",
		title: "Tình huống mất an toàn giao thông nghiêm trọng",
		description: "60 câu hỏi điểm liệt",
		color: "red"
	}
] as const

// export type ChapterId = (typeof chapters)[number]["id"]
export type ChapterId = string
// export const firstChapter: ChapterId = chapters[0].id
export const firstChapter: string = "1"
export const chapterQuantity: number = chapters.length
export const chapterIds: Array<string> = chapters.map((c) => c.id)

export type LearnSettings = {
	chapter: ChapterId
	showAnswer: boolean
	randomAnswers: boolean
	searchTerm: string
}

export const allChapters = [
	chapter1,
	chapter2,
	chapter3,
	chapter4,
	chapter5,
	chapter6,
	chapter7,
	getChapter8()
]

/**
 * REf
 * https://oto360.net/thi-lai-xe  <== get data from here
 * https://dailyxe.com.vn/thi-sat-hach/sa-hinh-7n.html
 * https://hoclaixemoto.com/thi-bang-lai-xe-b2-online/#
 */
