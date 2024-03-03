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

export type QuestionData = {
	id: number
	question: string
	image?: string
	options: Array<{ text: string; correct?: boolean }>
}

export * from "./chapter1"
