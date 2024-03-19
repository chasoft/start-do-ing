/**
 * Chapter 7: Sa hình và kỹ năng xử lý tình huống giao thông
 * 						144 questions (0 penalty questions)
 */

import { QuestionData } from "."

export const chapter7: Array<QuestionData> = [
	{
		id: 487,
		question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe tải, xe khách, xe con, mô tô." },
			{ text: "Xe tải, mô tô, xe khách, xe con.", correct: true },
			{ text: "Xe khách, xe tải, xe con, mô tô." },
			{ text: "Mô tô, xe khách, xe tải, xe con." }
		],
		image: "600-487.webp"
	},
	{
		id: 488,
		question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe công an, xe con, xe tải, xe khách.", correct: true },
			{ text: "Xe công an, xe khách, xe con, xe tải." },
			{ text: "Xe công an, xe tải, xe khách, xe con." },
			{ text: "Xe con, xe công an, xe tải, xe khách." }
		],
		image: "600-488.webp"
	},
	{
		id: 489,
		question:
			"Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe tải, xe công an, xe khách, xe con." },
			{ text: "Xe công an, xe khách, xe con, xe tải." },
			{ text: "Xe công an, xe con, xe tải, xe khách." },
			{ text: "Xe công an, xe tải, xe khách, xe con.", correct: true }
		],
		image: "600-489.webp"
	},
	{
		id: 490,
		question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe tải, xe con, mô tô." },
			{ text: "Xe con, xe tải, mô tô." },
			{ text: "Mô tô, xe con, xe tải.", correct: true },
			{ text: "Xe con, mô tô, xe tải." }
		],
		image: "600-490.webp"
	},
	{
		id: 491,
		question: "Xe nào phải nhường đường trong trường hợp này?",
		options: [{ text: "Xe con.", correct: true }, { text: "Xe tải." }],
		image: "600-491.webp"
	},
	{
		id: 492,
		question: "Trường hợp này xe nào được quyền đi trước?",
		options: [{ text: "Mô tô." }, { text: "Xe con.", correct: true }],
		image: "600-492.webp"
	},
	{
		id: 493,
		question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe con (A), xe cứu thương, xe con (B).", correct: true },
			{ text: "Xe cứu thương, xe con (B), xe con (A)." },
			{ text: "X con (B), xe con (A), xe cứu thương." }
		],
		image: "600-493.webp"
	},
	{
		id: 494,
		question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe cứu thương, xe cứu hỏa, xe con." },
			{ text: "Xe cứu hỏa, xe cứu thương, xe con.", correct: true },
			{ text: "Xe cứu thương, xe con, xe cứu hỏa." }
		],
		image: "600-494.webp"
	},
	{
		id: 495,
		question: "Xe nào được quyền đi trước trong trường hợp này?",
		options: [{ text: "Mô tô." }, { text: "Xe cứu thương.", correct: true }],
		image: "600-495.webp"
	},
	{
		id: 496,
		question: "Xe nào phải nhường đường đi cuối cùng qua nơi giao nhau này?",
		options: [
			{ text: "Xe khách.", correct: true },
			{ text: "Xe tải." },
			{ text: "Xe con." }
		],
		image: "600-496.webp"
	},
	{
		id: 497,
		question: "Xe nào phải nhường đường là đúng quy tắc giao thông?",
		options: [{ text: "Xe con.", correct: true }, { text: "Xe tải." }],
		image: "600-497.webp"
	},
	{
		id: 498,
		question: "Xe nào được quyền đi trước trong trường hợp này?",
		options: [{ text: "Xe công an." }, { text: "Xe chữa cháy.", correct: true }],
		image: "600-498.webp"
	},
	{
		id: 499,
		question: "Theo tín hiệu đèn, xe nào được phép đi?",
		options: [{ text: "Xe con và xe khách.", correct: true }, { text: "Mô tô." }],
		image: "600-499.webp"
	},
	{
		id: 500,
		question: "Theo tín hiệu đèn, xe nào được quyền đi là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe khách, mô tô." },
			{ text: "Xe con, xe tải.", correct: true },
			{ text: "Xe tải, mô tô." }
		],
		image: "600-500.webp"
	},
	{
		id: 501,
		question: "Trong trường hợp này xe nào được quyền đi trước?",
		options: [{ text: "Xe công an." }, { text: "Xe quân sự.", correct: true }],
		image: "600-501.webp"
	},
	{
		id: 502,
		question: "Theo tín hiệu đèn, xe tải đi theo hướng nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Hướng 2, 3, 4." },
			{ text: "Chỉ hướng 1.", correct: true },
			{ text: "Hướng 1 và 2." },
			{ text: "Hướng 3 và 4." }
		],
		image: "600-502.webp"
	},
	{
		id: 503,
		question: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe khách, xe tải, mô tô.", correct: true },
			{ text: "Xe tải, xe con, mô tô." },
			{ text: "Xe khách, xe con, mô tô." }
		],
		image: "600-503.webp"
	},
	{
		id: 504,
		question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe khách, xe tải, mô tô, xe con." },
			{ text: "Xe con, xe khách, xe tải, mô tô." },
			{ text: "Mô tô, xe tải, xe khách, xe con.", correct: true },
			{ text: "Mô tô, xe tải, xe con, xe khách." }
		],
		image: "600-504.webp"
	},
	{
		id: 505,
		question: "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe tải.", correct: true },
			{ text: "Xe con và mô tô." },
			{ text: "Cả ba xe." },
			{ text: "Xe con và xe tải." }
		],
		image: "600-505.webp"
	},
	{
		id: 506,
		question: "Xe nào được quyền đi trước?",
		options: [
			{ text: "Xe tải." },
			{ text: "Xe con (B).", correct: true },
			{ text: "Xe con (A)." }
		],
		image: "600-506.webp"
	},
	{
		id: 507,
		question: "Theo hướng mũi tên, những hướng nào xe gắn máy đi được?",
		options: [
			{ text: "Cả ba hướng.", correct: true },
			{ text: "Chỉ hướng 1 và 3." },
			{ text: "Chỉ hướng 1." }
		],
		image: "600-507.webp"
	},
	{
		id: 508,
		question: "Xe nào đỗ vi phạm quy tắc giao thông?",
		options: [
			{ text: "Cả hai xe.", correct: true },
			{ text: "Không xe nào vi phạm." },
			{ text: "Chỉ xe mô tô vi phạm." },
			{ text: "Chỉ xe tải vi phạm." }
		],
		image: "600-508.webp"
	},
	{
		id: 509,
		question: "Xe nào đỗ vi phạm quy tắc giao thông?",
		options: [
			{ text: "Chỉ mô tô." },
			{ text: "Chỉ xe tải." },
			{ text: "Cả ba xe.", correct: true },
			{ text: "Chỉ mô tô và xe tải." }
		],
		image: "600-509.webp"
	},
	{
		id: 510,
		question: "Xe tải kéo mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
		options: [{ text: "Đúng." }, { text: "Không đúng.", correct: true }],
		image: "600-510.webp"
	},
	{
		id: 511,
		question: "Theo hướng mũi tên, hướng nào xe không được phép đi?",
		options: [{ text: "Hướng 2 và 5." }, { text: "Chỉ hướng 1.", correct: true }],
		image: "600-511.webp"
	},
	{
		id: 512,
		question: "Theo hướng mũi tên, những hướng nào ô tô không được phép đi?",
		options: [
			{ text: "Hướng 1 và 2." },
			{ text: "Hướng 3.", correct: true },
			{ text: "Hướng 1 và 4." },
			{ text: "Hướng 2 và 3." }
		],
		image: "600-512.webp"
	},
	{
		id: 513,
		question: "Xe nào vượt đúng quy tắc giao thông?",
		options: [
			{ text: "Cả 2 xe đều đúng.", correct: true },
			{ text: "Xe con." },
			{ text: "Xe khách." }
		],
		image: "600-513.webp"
	},
	{
		id: 514,
		question:
			"Theo hướng mũi tên, gặp biển hướng đi phải theo đặt trước ngã tư, những hướng nào xe được phép đi?",
		options: [
			{ text: "Hướng 2 và 3.", correct: true },
			{ text: "Hướng 1, 2 và 3." },
			{ text: "Hướng 1 và 3." }
		],
		image: "600-514.webp"
	},
	{
		id: 515,
		question: "Xe kéo nhau như hình này có vi phạm quy tắc giao thông không?",
		options: [{ text: "Không." }, { text: "Vi phạm.", correct: true }],
		image: "600-515.webp"
	},
	{
		id: 516,
		question: "Xe nào phải nhường đường trong trường hợp này?",
		options: [{ text: "Xe khách.", correct: true }, { text: "Xe tải." }],
		image: "600-516.webp"
	},
	{
		id: 517,
		question: "Xe nào được quyền đi trước trong trường hợp này?",
		options: [{ text: "Xe con." }, { text: "Xe mô tô.", correct: true }],
		image: "600-517.webp"
	},
	{
		id: 518,
		question: "Xe kéo nhau trong trường hợp này đúng quy định không?",
		options: [{ text: "Không đúng.", correct: true }, { text: "Đúng." }],
		image: "600-518.webp"
	},
	{
		id: 519,
		question: "Theo hướng mũi tên, những hướng nào ô tô con được phép đi?",
		options: [
			{ text: "Hướng 1." },
			{ text: "Hướng 1, 3 và 4.", correct: true },
			{ text: "Hướng 2, 3 và 4." },
			{ text: "Cả bốn hướng." }
		],
		image: "600-519.webp"
	},
	{
		id: 520,
		question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe con (A), mô tô, xe con (B), xe đạp." },
			{ text: "Xe con (B), xe đạp, mô tô, xe con (A)." },
			{ text: "Xe con (A), xe con (B), mô tô + xe đạp." },
			{ text: "Mô tô + xe đạp, xe con (A), xe con (B).", correct: true }
		],
		image: "600-520.webp"
	},
	{
		id: 521,
		question: "Theo hướng mũi tên, những hướng nào xe tải được phép đi?",
		options: [
			{ text: "Chỉ hướng 1.", correct: true },
			{ text: "Hướng 1, 3 và 4." },
			{ text: "Hướng 1, 2 và 3." },
			{ text: "Cả bốn hướng." }
		],
		image: "600-521.webp"
	},
	{
		id: 522,
		question: "Những hướng nào xe tải được phép đi?",
		options: [{ text: "Cả ba hướng." }, { text: "Hướng 2 và 3.", correct: true }],
		image: "600-522.webp"
	},
	{
		id: 523,
		question: "Những hướng nào ô tô tải được phép đi?",
		options: [
			{ text: "Chỉ hướng 1." },
			{ text: "Hướng 1 và 4." },
			{ text: "Hướng 1 và 5.", correct: true },
			{ text: "Hướng 1, 4 và 5." }
		],
		image: "600-523.webp"
	},
	{
		id: 524,
		question: "Những hướng nào ô tô tải được phép đi?",
		options: [
			{ text: "Cả bốn hướng." },
			{ text: "Trừ hướng 2.", correct: true },
			{ text: "Hướng 2, 3 và 4." },
			{ text: "Trừ hướng 4." }
		],
		image: "600-524.webp"
	},
	{
		id: 525,
		question: "Xe nào được quyền đi trước trong trường hợp này?",
		options: [{ text: "Mô tô.", correct: true }, { text: "Xe con." }],
		image: "600-525.webp"
	},
	{
		id: 526,
		question: "Ô tô con đi theo chiều mũi tên có vi phạm quy tắc giao thông không?",
		options: [{ text: "Không vi phạm." }, { text: "Vi phạm.", correct: true }],
		image: "600-526.webp"
	},
	{
		id: 527,
		question: "Xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe khách." },
			{ text: "Mô tô." },
			{ text: "Xe con.", correct: true },
			{ text: "Xe con và mô tô." }
		],
		image: "600-527.webp"
	},
	{
		id: 528,
		question: "Các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{
				text: "Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng."
			},
			{ text: "Cho phép các xe ở mọi hướng được phép rẽ phải." },
			{
				text: "Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi.",
				correct: true
			}
		],
		image: "600-528.webp"
	},
	{
		id: 529,
		question: "Theo hướng mũi tên, xe nào được phép đi?",
		options: [
			{ text: "Mô tô, xe con." },
			{ text: "Xe con, xe tải." },
			{ text: "Mô tô, xe tải.", correct: true },
			{ text: "Cả ba xe." }
		],
		image: "600-529.webp"
	},
	{
		id: 530,
		question: "Xe con vượt xe tải như trường hợp này có đúng không?",
		options: [{ text: "Đúng.", correct: true }, { text: "Không đúng." }],
		image: "600-530.webp"
	},
	{
		id: 531,
		question: "Xe nào vượt đúng quy tắc giao thông?",
		options: [
			{ text: "Xe tải." },
			{ text: "Cả hai xe." },
			{ text: "Xe con.", correct: true }
		],
		image: "600-531.webp"
	},
	{
		id: 532,
		question: "Đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe chữa cháy." },
			{ text: "Xe tải.", correct: true },
			{ text: "Cả hai xe." }
		],
		image: "600-532.webp"
	},
	{
		id: 533,
		question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe khách, xe tải, xe con." },
			{ text: "Xe con, xe tải, xe khách." },
			{ text: "Xe tải, xe khách, xe con.", correct: true }
		],
		image: "600-533.webp"
	},
	{
		id: 534,
		question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe khách, xe tải, xe con.", correct: true },
			{ text: "Xe tải, xe khách, xe con." },
			{ text: "Xe con, xe khách, xe tải." }
		],
		image: "600-534.webp"
	},
	{
		id: 535,
		question: "Những hướng nào ô tô tải được phép đi?",
		options: [
			{ text: "Cả bốn hướng." },
			{ text: "Chỉ hướng 1 và 2." },
			{ text: "Trừ hướng 4.", correct: true }
		],
		image: "600-535.webp"
	},
	{
		id: 536,
		question: "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng?",
		options: [
			{ text: "Xe công an, xe con, xe tải, xe khách.", correct: true },
			{ text: "Xe con, xe khách và xe công an, xe tải." },
			{ text: "Xe công an, xe con, xe khách, xe tải." },
			{ text: "Xe con, xe tải, xe khách, xe công an." }
		],
		image: "600-536.webp"
	},
	{
		id: 537,
		question: "Những hướng nào ô tô tải được phép đi?",
		options: [
			{ text: "Cả bốn hướng." },
			{ text: "Hướng 1, 2 và 3." },
			{ text: "Hướng 1 và 4." },
			{ text: "Hướng 1, 3 và 4.", correct: true }
		],
		image: "600-537.webp"
	},
	{
		id: 538,
		question: "Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?",
		options: [
			{ text: "Chỉ xe khách, mô tô." },
			{ text: "Tất cả các loại xe trên.", correct: true },
			{ text: "Không xe nào chấp hành đúng quy tắc giao thông." }
		],
		image: "600-538.webp"
	},
	{
		id: 539,
		question: "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
		options: [
			{ text: "Cả ba hướng." },
			{ text: "Hướng 1 và 2." },
			{ text: "Hướng 1 và 3.", correct: true },
			{ text: "Hướng 2 và 3." }
		],
		image: "600-539.webp"
	},
	{
		id: 540,
		question:
			"Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe công an, xe quân sự, xe con + mô tô." },
			{ text: "Xe quân sự, xe công an, xe con + mô tô.", correct: true },
			{ text: "Xe mô tô + xe con, xe quân sự, xe công an." }
		],
		image: "600-540.webp"
	},
	{
		id: 541,
		question: "Xe nào phải nhường đường là đúng quy tắc giao thông?",
		options: [{ text: "Xe A.", correct: true }, { text: "Xe B." }],
		image: "600-541.webp"
	},
	{
		id: 542,
		question:
			"Xe con quay đầu đi ngược lại như hình vẽ dưới có vi phạm quy tắc giao thông không?",
		options: [{ text: "Không vi phạm." }, { text: "Vi phạm.", correct: true }],
		image: "600-542.webp"
	},
	{
		id: 543,
		question: "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe con (E), mô tô (C).", correct: true },
			{ text: "Xe tải (A), mô tô (D)." },
			{ text: "Xe khách (B), mô tô (C)." },
			{ text: "Xe khách (B), mô tô (D)." }
		],
		image: "600-543.webp"
	},
	{
		id: 544,
		question:
			"Để điều khiển cho xe đi thẳng, người lái xe phải làm gì là đúng quy tắc giao thông?",
		options: [
			{ text: "Nhường xe con rẽ trái trước.", correct: true },
			{ text: "Đi thẳng không nhường." }
		],
		image: "600-544.webp"
	},
	{
		id: 545,
		question:
			"Người lái xe điều khiển xe chạy theo hướng nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Chỉ hướng 2." },
			{ text: "Hướng 1 và 2.", correct: true },
			{ text: "Tất cả các hướng trừ hướng 3." },
			{ text: "Tất cả các hướng trừ hướng 4." }
		],
		image: "600-545.webp"
	},
	{
		id: 546,
		question: "Xe nào phải nhường đường là đúng quy tắc giao thông?",
		options: [{ text: "Xe con (A)." }, { text: "Xe con (B).", correct: true }],
		image: "600-546.webp"
	},
	{
		id: 547,
		question:
			"Người lái xe điều khiển xe rẽ trái như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Rẽ trái ngay trước xe buýt." },
			{ text: "Rẽ trái trước xe tải." },
			{ text: "Nhường đường cho xe buýt và xe tải.", correct: true }
		],
		image: "600-547.webp"
	},
	{
		id: 548,
		question: "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe con (B), mô tô (C)." },
			{ text: "Xe con (A), mô tô (C)." },
			{ text: "Xe con (E), mô tô (D).", correct: true },
			{ text: "Tất cả các loại xe trên." }
		],
		image: "600-548.webp"
	},
	{
		id: 549,
		question: "Xe nào đi trước là đúng quy tắc giao thông?",
		options: [{ text: "Xe của bạn." }, { text: "Xe tải.", correct: true }],
		image: "600-549.webp"
	},
	{
		id: 550,
		question: "Người lái xe có thể quay đầu xe như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Quay đầu theo hướng A.", correct: true },
			{ text: "Quay đầu theo hướng B." },
			{ text: "Cấm quay đầu." }
		],
		image: "600-550.webp"
	},
	{
		id: 551,
		question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe con và xe tải, xe của bạn." },
			{ text: "Xe của bạn, xe tải, xe con." },
			{ text: "Xe của bạn và xe con, xe tải.", correct: true },
			{ text: "Xe của bạn, xe tải + xe con." }
		],
		image: "600-551.webp"
	},
	{
		id: 552,
		question:
			"Khi muốn vượt xe tải, người lái xe phải làm gì là đúng quy tắc giao thông?",
		options: [
			{ text: "Tăng tốc cho xe chạy vượt qua." },
			{
				text: "Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.",
				correct: true
			},
			{ text: "Đánh lái sang làn bên trái và tăng tốc cho xe chạy vượt qua." }
		],
		image: "600-552.webp"
	},
	{
		id: 553,
		question: "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe khách, mô tô." },
			{ text: "Xe tải, mô tô." },
			{ text: "Xe con, xe tải.", correct: true }
		],
		image: "600-553.webp"
	},
	{
		id: 554,
		question: "Xe nào phải nhường đường là đúng quy tắc giao thông?",
		options: [
			{ text: "Xe tải." },
			{ text: "Xe khách.", correct: true },
			{ text: "Xe con." }
		],
		image: "600-554.webp"
	},
	{
		id: 555,
		question:
			"Người lái xe có được phép vượt xe tải để đi thẳng trong trường hợp này không?",
		options: [{ text: "Được vượt." }, { text: "Cấm vượt.", correct: true }],
		image: "600-555.webp"
	},
	{
		id: 556,
		question: "Bạn có được phép vượt xe mô tô phía trước không?",
		options: [{ text: "Cho phép." }, { text: "Không được vượt.", correct: true }],
		image: "600-556.webp"
	},
	{
		id: 557,
		question: "Người lái xe dừng tại vị trí nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Vị trí A và B." },
			{ text: "Vị trí A và C." },
			{ text: "Vị trí B và C.", correct: true },
			{ text: "Cả ba vị trí A, B, C." }
		],
		image: "600-557.webp"
	},
	{
		id: 558,
		question: "Bạn được dừng xe ở vị trí nào trong tình huống này?",
		options: [
			{ text: "Được phép dừng ở vị trí A." },
			{ text: "Được phép dừng ở vị trí B." },
			{ text: "Được phép dừng ở vị trí A và B." },
			{ text: "Không được dừng.", correct: true }
		],
		image: "600-558.webp"
	},
	{
		id: 559,
		question: "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe mô tô." },
			{ text: "Xe ô tô con." },
			{ text: "Không xe nào vi phạm." },
			{ text: "Cả hai xe.", correct: true }
		],
		image: "600-559.webp"
	},
	{
		id: 560,
		question: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe con." },
			{ text: "Xe tải.", correct: true },
			{ text: "Xe con, xe tải." }
		],
		image: "600-560.webp"
	},
	{
		id: 561,
		question: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe tải, xe con." },
			{ text: "Xe khách, xe con." },
			{ text: "Xe khách, xe tải.", correct: true }
		],
		image: "600-561.webp"
	},
	{
		id: 562,
		question: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe con, xe tải, xe khách." },
			{ text: "Xe tải, xe khách, xe mô tô.", correct: true },
			{ text: "Xe khách, xe mô tô, xe con." },
			{ text: "Cả bốn xe." }
		],
		image: "600-562.webp"
	},
	{
		id: 563,
		question: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe khách, xe tải.", correct: true },
			{ text: "Xe khách, xe con." },
			{ text: "Xe con, xe tải." },
			{ text: "Xe khách, xe tải, xe con." }
		],
		image: "600-563.webp"
	},
	{
		id: 564,
		question:
			"Trong tình huống dưới đây, để tránh xe phía trước bị hỏng đột xuất trên đường, người lái xe phải làm gì?",
		options: [
			{ text: "Đánh lái sang trái cho xe vượt qua." },
			{
				text: "Quan sát phía trước, phía sau, khi đủ điều kiện an toàn, bật tín hiệu bằng đèn hoặc còi rồi cho xe chạy vượt qua.",
				correct: true
			},
			{ text: "Cấm vượt." }
		],
		image: "600-564.webp"
	},
	{
		id: 565,
		question: "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
		options: [
			{ text: "Xe tải, mô tô." },
			{ text: "Xe khách, mô tô.", correct: true },
			{ text: "Xe tải, xe con." },
			{ text: "Mô tô, xe con." }
		],
		image: "600-565.webp"
	},
	{
		id: 566,
		question: "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
		options: [
			{ text: "Xe con (A), xe con (B), xe tải (D)." },
			{ text: "Xe tải (D), xe con (E), xe buýt (G)." },
			{ text: "Xe tải ( D), xe con (B).", correct: true },
			{ text: "Xe con (B), xe con (C)." }
		],
		image: "600-566.webp"
	},
	{
		id: 567,
		question: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
		options: [
			{ text: "Xe của bạn, mô tô , xe con." },
			{ text: "Xe con, xe của bạn, mô tô." },
			{ text: "Mô tô, xe con, xe của bạn.", correct: true }
		],
		image: "600-567.webp"
	},
	{
		id: 568,
		question: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
		options: [
			{ text: "Xe của bạn, mô tô, xe con." },
			{ text: "Xe con, xe của bạn, mô tô.", correct: true },
			{ text: "Mô tô, xe con, xe của bạn." }
		],
		image: "600-568.webp"
	},
	{
		id: 569,
		question: "Xe nào phải dừng lại trong trường hợp này?",
		options: [
			{ text: "Xe con.", correct: true },
			{ text: "Xe của bạn." },
			{ text: "Cả hai xe." }
		],
		image: "600-569.webp"
	},
	{
		id: 570,
		question: "Xe của bạn được đi theo hướng nào trong trường hợp này?",
		options: [
			{ text: "Đi thẳng, rẽ trái.", correct: true },
			{ text: "Đi thẳng, rẽ phải." },
			{ text: "Rẽ trái." },
			{ text: "Đi thẳng, rẽ phải, rẽ trái." }
		],
		image: "600-570.webp"
	},
	{
		id: 571,
		question: "Xe của bạn được đi theo hướng nào trong trường hợp này?",
		options: [
			{ text: "Chuyển sang làn đường bên phải và rẽ phải." },
			{ text: "Dừng lại trước vạch dừng và rẽ phải khi đèn xanh." },
			{
				text: "Dừng lại trước vạch dừng và đi thẳng hoặc rẽ trái khi đèn xanh.",
				correct: true
			}
		],
		image: "600-571.webp"
	},
	{
		id: 572,
		question: "Bạn xử lý như thế nào trong trường hợp này?",
		options: [
			{ text: "Tăng tốc độ, rẽ phải trước xe tải và xe đạp." },
			{ text: "Giảm tốc độ, rẽ phải sau xe tải và xe đạp.", correct: true },
			{ text: "Tăng tốc độ, rẽ phải trước xe đạp." }
		],
		image: "600-572.webp"
	},
	{
		id: 573,
		question: "Bạn xử lý như thế nào trong trường hợp này?",
		options: [
			{ text: "Tăng tốc độ, rẽ phải trước xe con màu xanh phía trước và người đi bộ." },
			{ text: "Giảm tốc độ, để người đi bộ qua đường và rẽ phải trước xe con màu xanh." },
			{
				text: "Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh.",
				correct: true
			}
		],
		image: "600-573.webp"
	},
	{
		id: 574,
		question: "Bạn xử lý như thế nào trong trường hợp này?",
		options: [
			{ text: "Nhường đường cho xe khách và đi trước xe đạp." },
			{ text: "Nhường đường cho xe đạp và đi trước xe khách." },
			{ text: "Nhường đường cho xe đạp và xe khách.", correct: true }
		],
		image: "600-574.webp"
	},
	{
		id: 575,
		question: "Xe nào phải nhường đường trong trường hợp này?",
		options: [
			{ text: "Xe con." },
			{ text: "Xe tải.", correct: true },
			{ text: "Xe của bạn." }
		],
		image: "600-575.webp"
	},
	{
		id: 576,
		question: "Xe nào phải nhường đường trong trường hợp này?",
		options: [{ text: "Xe đi ngược chiều." }, { text: "Xe của bạn.", correct: true }],
		image: "600-576.webp"
	},
	{
		id: 577,
		question:
			"Bạn xử lý như thế nào khi lái xe ô tô vượt qua đoàn người đi xe đạp có tổ chức?",
		options: [
			{ text: "Tăng tốc độ, chuyển sang làn đường bên trái để vượt." },
			{ text: "Không được vượt những người đi xe đạp.", correct: true }
		],
		image: "600-577.webp"
	},
	{
		id: 578,
		question:
			"Phía trước có một xe đang lùi vào nơi đỗ, xe con phía trước đang chuyển sang làn đường bên trái, bạn xử lý như thế nào trong trường hợp này?",
		options: [
			{ text: "Nếu phía sau không có xe xin vượt, chuyển sang làn đường bên trái." },
			{
				text: "Nếu phía sau có xe xin vượt, thì giảm tốc độ, ở lại làn đường, dừng lại khi cần thiết."
			},
			{ text: "Tăng tốc độ trên làn đường của mình và vượt xe con." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		],
		image: "600-578.webp"
	},
	{
		id: 579,
		question: "Bạn xử lý như thế nào khi xe phía trước đang lùi ra khỏi nơi đỗ?",
		options: [
			{ text: "Chuyển sang nửa đường bên trái để đi tiếp." },
			{ text: "Bấm còi, nháy đèn báo hiệu và đi tiếp." },
			{ text: "Giảm tốc độ, dừng lại nhường đường.", correct: true }
		],
		image: "600-579.webp"
	},
	{
		id: 580,
		question:
			"Phía trước có một xe màu xanh đang vượt xe màu vàng trên làn đường của bạn, bạn xử lý như thế nào trong trường hợp này?",
		options: [
			{ text: "Phanh xe giảm tốc độ và đi sát lề đường bên phải.", correct: true },
			{ text: "Bấm còi, nháy đèn báo hiệu, giữ nguyên tốc độ và đi tiếp." },
			{ text: "Phanh xe giảm tốc độ và đi sát vào lề đường bên trái." }
		],
		image: "600-580.webp"
	},
	{
		id: 581,
		question:
			"Xe tải phía trước có tín hiệu xin chuyển làn đường, bạn xử lý như thế nào trong trường hợp này?",
		options: [
			{ text: "Bật tín hiệu xin chuyển làn đường sang trái để vượt xe tải." },
			{
				text: "Phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
				correct: true
			},
			{ text: "Bấm còi báo hiệu và vượt qua xe tải trên làn đường của mình." }
		],
		image: "600-581.webp"
	},
	{
		id: 582,
		question: "Bạn xử lý như thế nào trong trường hợp này?",
		options: [
			{ text: "Tăng tốc độ và đi thẳng qua ngã tư." },
			{ text: "Dừng xe trước vạch dừng." },
			{ text: "Giảm tốc độ và đi thẳng qua ngã tư.", correct: true }
		],
		image: "600-582.webp"
	},
	{
		id: 583,
		question: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
		options: [
			{ text: "Xe của bạn, mô tô, xe đạp." },
			{ text: "Xe mô tô, xe đạp, xe của bạn." },
			{ text: "Xe đạp, xe mô tô, xe của bạn.", correct: true }
		],
		image: "600-583.webp"
	},
	{
		id: 584,
		question: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
		options: [
			{ text: "Xe của bạn, xe tải, xe con." },
			{ text: "Xe con, xe tải, xe của bạn." },
			{ text: "Xe tải, xe của bạn, xe con." },
			{ text: "Xe của bạn, xe con, xe tải.", correct: true }
		],
		image: "600-584.webp"
	},
	{
		id: 585,
		question: "Xe nào phải nhường đường trong trường hợp này?",
		options: [{ text: "Xe của bạn.", correct: true }, { text: "Xe con." }],
		image: "600-585.webp"
	},
	{
		id: 586,
		question: "Xe nào phải nhường đường trong trường hợp này?",
		options: [{ text: "Xe con." }, { text: "Xe của bạn.", correct: true }],
		image: "600-586.webp"
	},
	{
		id: 587,
		question: "Bạn xử lý như thế nào trong trường hợp này?",
		options: [
			{
				text: "Tăng tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau."
			},
			{
				text: "Giảm tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau."
			},
			{
				text: "Giảm tốc độ , để người đi bộ sang đường trước, sau đó cho xe đi qua vạch người đi bộ sang đường.",
				correct: true
			}
		],
		image: "600-587.webp"
	},
	{
		id: 588,
		question: "Xe nào được đi trước trong trường hợp này?",
		options: [{ text: "Xe con." }, { text: "Xe của bạn.", correct: true }],
		image: "600-588.webp"
	},
	{
		id: 589,
		question: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
		options: [
			{ text: "Xe con, xe tải, xe của bạn." },
			{ text: "Xe tải, xe con, xe của bạn.", correct: true },
			{ text: "Xe tải, xe của bạn, xe con." }
		],
		image: "600-589.webp"
	},
	{
		id: 590,
		question: "Bạn xử lý như thế nào trong trường hợp này?",
		options: [
			{ text: "Tăng tốc độ cho xe lấn sang phần đường bên trái." },
			{ text: "Giảm tốc độ cho xe lấn sang phần đường bên trái." },
			{ text: "Giảm tốc độ cho xe đi sát phần đường bên phải.", correct: true }
		],
		image: "600-590.webp"
	},
	{
		id: 591,
		question: "Xe nào được đi trước trong trường hợp này?",
		options: [{ text: "Xe tải.", correct: true }, { text: "Xe của bạn." }],
		image: "600-591.webp"
	},
	{
		id: 592,
		question: "Xe nào dừng đúng theo quy tắc giao thông?",
		options: [
			{ text: "Xe con.", correct: true },
			{ text: "Xe mô tô." },
			{ text: "Cả 2 xe đều đúng." }
		],
		image: "600-592.webp"
	},
	{
		id: 593,
		question: "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
		options: [
			{ text: "Xe tải, xe đạp, xe của bạn." },
			{ text: "Xe của bạn, xe đạp, xe tải." },
			{ text: "Xe của bạn, xe tải, xe đạp.", correct: true }
		],
		image: "600-593.webp"
	},
	{
		id: 594,
		question: "Để điều khiển xe rẽ trái, bạn chọn hướng đi nào dưới đây?",
		options: [
			{ text: "Hướng 1.", correct: true },
			{ text: "Hướng 2." },
			{ text: "Cả 02 hướng đều được." }
		],
		image: "600-594.webp"
	},
	{
		id: 595,
		question:
			"Khi gặp xe ngược chiều bật đèn pha trong tình huống dưới dây, bạn xử lý như thế nào?",
		options: [
			{ text: "Bật đèn chiếu xa, tăng tốc độ vượt xe cùng chiều." },
			{
				text: "Giữ nguyên đền chiếu gần, giảm tốc độ, đi sau xe phía trước.",
				correct: true
			},
			{ text: "Giữ nguyên đèn chiếu gần, tăng tốc độ vượt xe cùng chiều." }
		],
		image: "600-595.webp"
	},
	{
		id: 596,
		question:
			"Xe của bạn đang di chuyển gần đến khu vực giao cắt với đường sắt, khi rào chắn đang dịch chuyển, bạn điều khiển xe như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Quan sát nếu thấy không có tàu thì tăng tốc cho xe vượt qua đường sắt." },
			{ text: "Dừng lại trước rào chắn một khoảng cách an toàn.", correct: true },
			{ text: "Ra tín hiệu, yêu cầu người gác chắn tàu kéo chậm Barie để xe bạn qua." }
		],
		image: "600-596.webp"
	},
	{
		id: 597,
		question:
			"Trong tình huống dưới đây, xe con màu đỏ nhập làn đường cao tốc theo hướng mũi tên là đúng hay sai?",
		options: [{ text: "Đúng." }, { text: "Sai.", correct: true }],
		image: "600-597.webp"
	},
	{
		id: 598,
		question:
			"Trong tình huống dưới đây, xe con màu đỏ có được phép vượt khi xe con màu xanh đang vượt xe tải hay không?",
		options: [{ text: "Được vượt." }, { text: "Không được vượt.", correct: true }],
		image: "600-598.webp"
	},
	{
		id: 599,
		question:
			"Trong tình huống dưới đây, xe con màu vàng vượt xe con màu đỏ là đúng quy tắc giao thông hay không?",
		options: [{ text: "Đúng.", correct: true }, { text: "Không đúng." }],
		image: "600-599.webp"
	},
	{
		id: 600,
		question:
			"Trong tình huống dưới đây, xe đầu kéo kéo rơ moóc (xe container) đang rẽ phải, xe con màu xanh và xe máy phía sau xe container đi như thế nào để đảm bảo an toàn?",
		options: [
			{ text: "Vượt về phía bên phải để đi tiếp." },
			{ text: "Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi.", correct: true },
			{ text: "Vượt về phía bên trái để đi tiếp." }
		],
		image: "600-600.webp"
	}
]
