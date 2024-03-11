/**
 * Chapter 5: Cấu tạo và sửa chữa
 * 						35 questions (0 penalty questions)
 */

import { QuestionData } from "."

export const chapter5: Array<QuestionData> = [
	{
		id: 270,
		question:
			"Chủ phương tiện cơ giới đường bộ có được tự ý thay đổi màu sơn, nhãn hiệu hoặc các đặc tính kỹ thuật của phương tiện so với chứng nhận đăng ký xe hay không?",
		options: [
			{ text: "Được phép thay đổi bằng cách dán đề can với màu sắc phù hợp." },
			{ text: "Không được phép thay đổi.", correct: true },
			{ text: "Tùy từng loại phương tiện cơ giới đường bộ." }
		]
	},
	{
		id: 271,
		question:
			"Xe ô tô tham gia giao thông đường bộ phải bảo đảm các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường nào ghi dưới đây?",
		options: [
			{
				text: "Kính chắn gió, kính cửa phải là loại kính an toàn, bảo đảm tần nhìn cho người điều khiển; có đủ hệ thống hãm và hệ thống chuyển hướng có hiệu lực, tay lái xe ô tô ở bên trái của xe, có còi với âm lượng đúng quy chuẩn kỹ thuật."
			},
			{
				text: "Có đủ đèn chiếu sáng gần và xa, đèn soi biển số, đèn báo hãm, đèn tín hiệu; có đủ bộ phận giảm thanh, giảm khói, các kết cấu phải đủ độ bền và bảo đảm tính năng vận hành ổn định."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 272,
		question:
			"Xe mô tô và xe ô tô tham gia giao thông trên đường bộ phải bắt buộc có đủ bộ phận giảm thanh không?",
		options: [
			{ text: "Không bắt buộc." },
			{ text: "Bắt buộc.", correct: true },
			{ text: "Tùy từng trường hợp." }
		]
	},
	{
		id: 273,
		question:
			"Xe ô tô tham gia giao thông trên đường bộ phải có đủ các loại đèn gì dưới đây?",
		options: [
			{ text: "Đèn chiếu sáng gần và xa." },
			{ text: "Đèn soi biển số, đèn báo hãm và đèn tín hiệu." },
			{ text: "Dàn đèn pha trên nóc xe." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 274,
		question: "Kính chắn gió của xe ô tô phải đảm bảo yêu cầu nào dưới đây?",
		options: [
			{
				text: "Là loại kính an toàn, kính nhiều lớp, đúng quy cách, không rạn nứt, đảm bảo hình ảnh quan sát rõ ràng, không bị méo mó.",
				correct: true
			},
			{
				text: "Là loại kính trong suốt, không rạn nứt, đảm bảo tầm nhìn cho người điều khiển về phía trước mặt và hai bên."
			}
		]
	},
	{
		id: 275,
		question:
			"Bánh xe lắp cho xe ô tô phải đảm bảo an toàn kỹ thuật như thế nào dưới đây?",
		options: [
			{
				text: "Đủ số lượng, đủ áp suất, đúng cỡ lốp của nhà sản xuất hoặc tài liệu kỹ thuật quy định; lốp bánh dẫn hướng hai bên cùng kiểu hoa lốp, chiều cao hoa lốp đồng đều; không sử dụng lốp đắp; lốp không mòn đến dấu chỉ báo độ mòn của nhà sản xuất, không nứt, vỡ, phồng rộp làm hở lớp sợi mành."
			},
			{
				text: "Vành, đĩa vành đúng kiểu loại, không rạn, nứt, cong vênh; bánh xe quay trơn, không bị bó kẹt hoặc cọ sát vào phần khác; moay ơ không bị rơ; lắp đặt chắc chắn, đủ các chi tiết kẹp chặt và phòng lỏng."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 276,
		question: `Âm lượng của còi điện lắp trên ô tô (đo ở độ cao 1,2 mét với khoảng cách 2 mét tính từ đầu xe) là bao nhiêu?`,
		options: [
			{ text: "Không nhỏ hơn 90 dB (A), không lớn hơn 115 dB (A).", correct: true },
			{ text: "Không nhỏ hơn 80 dB (A), không lớn hơn 105 dB (A)." },
			{ text: "Không nhỏ hơn 70 dB (A), không lớn hơn 90 dB (A)." }
		]
	},
	{
		id: 277,
		question:
			"Mục đích của bảo dưỡng thường xuyên đối với xe ô tô có tác dụng gì dưới đây?",
		options: [
			{
				text: "Bảo dưỡng ô tô thường xuyên làm cho ô tô luôn luôn có tính năng kỹ thuật tốt, giảm cường độ hao mòn của các chi tiết, kéo dài tuổi thọ của xe."
			},
			{
				text: "Ngăn ngừa và phát hiện kịp thời các hư hỏng và sai lệch kỹ thuật để khắc phục, giữ gìn được hình thức bên ngoài."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 278,
		question:
			"Trong các nguyên nhân nêu dưới đây, nguyên nhân nào làm động cơ diesel không nổ?",
		options: [
			{
				text: "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.",
				correct: true
			},
			{
				text: "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, không có tia lửa điện."
			},
			{
				text: "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí và nước, không có tia lửa điện."
			}
		]
	},
	{
		id: 279,
		question:
			"Gạt nước lắp trên ô tô phải đảm bảo yêu cầu an toàn kỹ thuật nào dưới đây?",
		options: [
			{ text: "Đầy đủ số lượng, lắp đặt chắc chắn, hoạt động bình thường." },
			{ text: "Lưỡi gạt không quá mòn, diện tích quét đảm bảo tầm nhìn của người lái." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 280,
		question:
			"Dây đai an toàn lắp trên ô tô phải đảm bảo yêu cầu an toàn kỹ thuật nào dưới đây?",
		options: [
			{
				text: "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
				correct: true
			},
			{
				text: "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm mở ra khi giật dây đột ngột."
			},
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 281,
		question: "Thế nào là động cơ 4 kỳ?",
		options: [
			{
				text: "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 2 (hai) hành trình, trong đó có một lần sinh công."
			},
			{
				text: "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 4 (bốn) hành trình, trong đó có một lần sinh công.",
				correct: true
			}
		]
	},
	{
		id: 282,
		question: "Công dụng của hệ thống bôi trơn đối với động cơ ô tô?",
		options: [
			{
				text: "Cung cấp một lượng dầu bôi trơn đủ và sạch dưới áp suất nhất định đi bôi trơn cho các chi tiết của động cơ để giảm ma sát, giảm mài mòn, làm kín, làm sạch, làm mát và chống gỉ.",
				correct: true
			},
			{
				text: "Cung cấp một lượng nhiên liệu đầy đủ và sạch để cho động cơ ô tô hoạt động."
			},
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 283,
		question:
			"Niên hạn sử dụng của xe ô tô tải (tính bắt đầu từ năm sản xuất) là bao nhiêu năm?",
		options: [
			{ text: "15 năm." },
			{ text: "20 năm." },
			{ text: "25 năm.", correct: true }
		]
	},
	{
		id: 284,
		question:
			"Niên hạn sử dụng của xe ô tô chở người trên 9 chỗ ngồi (tính bắt đầu từ năm sản xuất) là bao nhiêu năm?",
		options: [{ text: "5 năm." }, { text: "20 năm.", correct: true }, { text: "25 năm." }]
	},
	{
		id: 285,
		question: "Hãy nêu công dụng của động cơ xe ô tô?",
		options: [
			{
				text: "Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khủy động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
				correct: true
			},
			{
				text: "Khi làm việc, cơ năng được biến đổi thành nhiệt năng và truyền đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô."
			},
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 286,
		question: "Hãy nêu công dụng hệ thống truyền lực của xe ô tô?",
		options: [
			{
				text: "Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của xe ô tô.",
				correct: true
			},
			{
				text: "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định."
			},
			{ text: "Dùng để làm giảm tốc độ, dừng chuyển động của xe ô tô." }
		]
	},
	{
		id: 287,
		question: "Hãy nêu công dụng ly hợp (côn) của xe ô tô?",
		options: [
			{
				text: "Dùng để truyền mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình xe ô tô chuyển động."
			},
			{
				text: "Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô.",
				correct: true
			},
			{ text: "Dùng để truyền truyền động từ hộp số đến bánh xe chủ động của ô tô." }
		]
	},
	{
		id: 288,
		question: "Hãy nêu công dụng hộp số của xe ô tô?",
		options: [
			{
				text: "Truyền và tăng mô men xoắn giữa các trục vuông góc nhau, đảm bảo cho các bánh xe chủ động quay với tốc độ khác nhau khi sức cản chuyển động ở bánh xe hai bên không bằng nhau."
			},
			{
				text: "Truyền và thay đổi mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động, chuyển số êm dịu, dễ điều khiển."
			},
			{
				text: "Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, đảm bảo cho xe ô tô chuyển động lùi.",
				correct: true
			}
		]
	},
	{
		id: 289,
		question: "Hãy nêu công dụng hệ thống lái của xe ô tô?",
		options: [
			{
				text: "Dùng để thay đổi mô men từ động cơ tới các bánh xe chủ động khi xe ô tô chuyển động theo hướng xác định."
			},
			{
				text: "Dùng để thay đổi mô men giữa các trục vuông góc nhau khi xe ô tô chuyển động theo hướng xác định."
			},
			{
				text: "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
				correct: true
			}
		]
	},
	{
		id: 290,
		question: "Hãy nêu công dụng hệ thống phanh của xe ô tô?",
		options: [
			{
				text: "Dùng để giảm tốc độ, dừng chuyển động của xe ô tô và giữ cho xe ô tô đứng yên trên dốc.",
				correct: true
			},
			{
				text: "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định."
			},
			{
				text: "Dùng để truyền hoặc ngắt truyền động từ động cơ đến bánh xe chủ động của xe ô tô."
			}
		]
	},
	{
		id: 291,
		question: "Đèn phanh trên xe mô tô có tác dụng gì dưới đây?",
		options: [
			{
				text: "Có tác dụng cảnh báo cho các xe phía sau biết xe đang giảm tốc để chủ động tránh hoặc giảm tốc để tránh va chạm."
			},
			{
				text: "Có tác dụng định vị vào ban đêm với các xe từ phía sau tới để tránh va chạm."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 292,
		question:
			"Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
		options: [
			{ text: "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.", correct: true },
			{ text: "Áp suất lốp không đủ." },
			{ text: "Đang hãm phanh tay." },
			{ text: "Cần kiểm tra động cơ." }
		],
		image: "600-292.webp"
	},
	{
		id: 293,
		question:
			"Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
		options: [
			{ text: "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi." },
			{ text: "Áp suất lốp không đủ." },
			{ text: "Đang hãm phanh tay." },
			{ text: "Cần kiểm tra động cơ.", correct: true }
		],
		image: "600-293.webp"
	},
	{
		id: 294,
		question:
			"Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
		options: [
			{ text: "Báo hiệu thiếu dầu phanh." },
			{ text: "Áp suất lốp không đủ.", correct: true },
			{ text: "Đang hãm phanh tay." },
			{ text: "Sắp hết nhiên liệu." }
		],
		image: "600-294.webp"
	},
	{
		id: 295,
		question:
			"Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
		options: [
			{ text: "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.", correct: true },
			{ text: "Áp suất lốp không đủ." },
			{ text: "Đang hãm phanh tay." },
			{ text: "Sắp hết nhiên liệu." }
		],
		image: "600-295.webp"
	},
	{
		id: 296,
		question:
			"Khi khởi động xe ô tô số tự động có trang bị chìa khóa thông minh có cần đạp hết hành trình bàn đạp chân phanh hay không?",
		options: [
			{ text: "Phải đạp hết hành trình bàn đạp chân phanh.", correct: true },
			{ text: "Không cần đạp phanh." },
			{ text: "Tùy từng trường hợp." }
		],
		image: "600-296.webp"
	},
	{
		id: 297,
		question: "Ắc quy được trang bị trên xe ô tô có tác dụng gì dưới đây?",
		options: [
			{
				text: "Giúp người lái xe kịp thời tạo xung lực tối đa lên hệ thống phanh trong khoảnh khắc đầu tiên của tình huống khẩn cấp."
			},
			{ text: "Ổn định chuyển động của xe ô tô khi đi vào đường vòng." },
			{ text: "Hỗ trợ người lái xe khởi hành ngang dốc." },
			{
				text: "Để tích trữ điện năng, cung cấp cho các phụ tải khi máy phát chưa làm việc.",
				correct: true
			}
		]
	},
	{
		id: 298,
		question: "Máy phát điện được trang bị trên xe ô tô có tác dụng gì dưới đây?",
		options: [
			{
				text: "Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.",
				correct: true
			},
			{ text: "Ổn định chuyển động của xe ô tô khi đi vào đường vòng." },
			{ text: "Hỗ trợ người lái xe khởi hành ngang dốc." },
			{ text: "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc." }
		]
	},
	{
		id: 299,
		question: "Dây đai an toàn được trang bị trên xe ô tô có tác dụng gì dưới đây?",
		options: [
			{ text: "Ổn định chuyển động của xe ô tô khi đi vào đường vòng." },
			{
				text: "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
				correct: true
			},
			{ text: "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc." }
		]
	},
	{
		id: 300,
		question: "Túi khí được trang bị trên xe ô tô có tác dụng gì dưới đây?",
		options: [
			{
				text: "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại."
			},
			{
				text: "Giảm khả năng va đập của một số bộ phận cơ thể quan trọng với các vật thể trong xe."
			},
			{ text: "Hấp thụ một phần lực va đập lên người lái và hành khách." },
			{ text: "Cả ý 2 và ý 3.", correct: true }
		]
	},
	{
		id: 301,
		question:
			"Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây không tắt trong thời gian dài, báo hiệu tình trạng như thế nào của xe ô tô?",
		options: [
			{ text: "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép." },
			{ text: "Áp suất lốp không đủ." },
			{ text: "Đang hãm phanh tay." },
			{ text: "Hệ thống lái gặp trục trặc.", correct: true }
		],
		image: "600-301.webp"
	},
	{
		id: 302,
		question: "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây có tác dụng gì?",
		options: [
			{ text: "Dùng để kích (hay nâng) xe ô tô.", correct: true },
			{ text: "Vặn ốc lắp bánh xe." },
			{ text: "Ổn định chuyển động của xe ô tô khi đi vào đường vòng." },
			{
				text: "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại."
			}
		],
		image: "600-302.webp"
	},
	{
		id: 303,
		question: "Trên xe ô tô có trang bị thiết bị như hình vẽ, dùng để làm gì?",
		options: [
			{ text: "Thay lốp xe." },
			{ text: "Chữa cháy." },
			{ text: "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.", correct: true },
			{ text: "Vặn ốc để tháo lắp bánh xe." }
		],
		image: "600-303.webp"
	},
	{
		id: 304,
		question: "Trên xe ô tô có trang bị thiết bị như hình vẽ, dùng để làm gì?",
		options: [
			{ text: "Thay lốp xe." },
			{ text: "Chữa cháy trong các trường hợp hỏa hoạn.", correct: true },
			{ text: "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp." },
			{ text: "Cầm máu cho người bị nạn." }
		],
		image: "600-304.webp"
	}
]
