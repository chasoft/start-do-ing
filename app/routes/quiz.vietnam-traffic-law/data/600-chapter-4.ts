/**
 * Chapter 4: Kỹ thuật lái xe
 * 						56 questions (11 penalty questions)
 */

import { QuestionData } from "."

export const chapter4: Array<QuestionData> = [
	{
		id: 214,
		question:
			"Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
		options: [
			{
				text: "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
				correct: true
			},
			{
				text: "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ."
			},
			{
				text: "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe."
			}
		],
		isPenalty: true
	},
	{
		id: 215,
		question:
			"Khi vào số để khởi hành xe ô tô có số tự động, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?",
		options: [
			{
				text: "Đạp bàn đạp phanh chân hết hành trình, vào số và nhả phanh tay, kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
				correct: true
			},
			{
				text: "Đạp bàn đạp để tăng ga với mức độ phù hợp, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh."
			}
		]
	},
	{
		id: 216,
		question:
			"Khi nhả hệ thống phanh dừng cơ khí điều khiển bằng tay (phanh tay), người lái xe cần phải thực hiện các thao tác nào?",
		options: [
			{
				text: "Dùng lực tay phải kéo cần phanh tay về phía sau hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm."
			},
			{
				text: "Dùng lực tay phải bóp khóa hãm đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải kéo cần phanh tay về phía sau đồng thời bóp khóa hãm.",
				correct: true
			},
			{
				text: "Dùng lực tay phải đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm."
			}
		]
	},
	{
		id: 217,
		question:
			"Khi khởi hành ô tô sử dụng hộp số cơ khí trên đường bằng, người lái xe cần thực hiện các thao tác nào theo trình tự dưới đây?",
		options: [
			{
				text: "Kiểm tra an toàn xung quanh xe ô tô; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp (côn) và giữ trong khoảng 3 giây; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát, sau đó vừa tăng ga vừa nhả hết ly hợp để cho xe ô tô chuyển động."
			},
			{
				text: "Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp và giữ trong khỏang 3 giây, sau đó vừa tăng ga vừa nhả hết ly hợp (côn) để cho xe ô tô chuyển động.",
				correct: true
			}
		]
	},
	{
		id: 218,
		question:
			"Khi quay đầu xe, người lái xe cần phải quan sát và thực hiện các thao tác nào để đảm bảo an toàn giao thông?",
		options: [
			{
				text: "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm đưa đuôi xe về phía an toàn.",
				correct: true
			},
			{
				text: "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe; quay đầu xe với tốc độ tối đa; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đuôi xe về phía nguy hiểm và đầu xe về phía an toàn."
			}
		]
	},
	{
		id: 219,
		question:
			"Khi tránh nhau trên đường hẹp, người lái xe cần phải chú ý những điểm nào để đảm bảo an toàn giao thông?",
		options: [
			{
				text: "Không nên đi cố vào đường hẹp; xe đi ở phía sườn núi nên dừng lại trước để nhường đường; khi dừng xe nhường đường phải đỗ ngay ngắn."
			},
			{
				text: "Trong khi tránh nhau không nên đổi số; khi tránh nhau ban đêm, phải tắt đèn pha bật đèn cốt."
			},
			{ text: "Khi tránh nhau ban đêm, phải thường xuyên bật đèn pha tắt đèn cốt." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 220,
		question:
			"Khi điều khiển ô tô lên dốc cao, người lái xe cần thực hiện các thao tác nào?",
		options: [
			{
				text: "Tăng lên số cao từ chân dốc, điều chỉnh ga cho xe nhanh lên dốc; đến gần đỉnh dốc phải tăng ga để xe nhanh chóng qua dốc; về số thấp, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết."
			},
			{
				text: "Về số thấp từ chân dốc, điều chỉnh ga cho xe từ từ lên dốc; đến gần đỉnh dốc phải đi chậm, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
				correct: true
			}
		]
	},
	{
		id: 221,
		question:
			"Khi điều khiển ô tô xuống dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
		options: [
			{
				text: "Tăng lên số cao, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ."
			},
			{
				text: "Về số thấp, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
				correct: true
			},
			{
				text: "Về số không (0), nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ."
			}
		],
		isPenalty: true
	},
	{
		id: 222,
		question:
			"Khi xuống dốc, muốn dừng xe, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
		options: [
			{
				text: "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp nửa ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân và kéo phanh tay.",
				correct: true
			},
			{
				text: "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên trái; đạp hết hành trình ly hợp (côn) và nhả bàn đạp ga để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được tại chỗ dừng; khi xe đã dừng, đạp và giữ phanh chân."
			},
			{
				text: "Có tín hiệu rẽ trái, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số không (N) để xe đi đến chỗ dừng, khi xe đã dừng, kéo phanh tay."
			}
		]
	},
	{
		id: 223,
		question:
			"Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để đảm bảo an toàn?",
		options: [
			{
				text: "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng coi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
				correct: true
			},
			{
				text: "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng và giảm tốc độ sau khi qua đường vòng."
			}
		]
	},
	{
		id: 224,
		question:
			"Khi điều khiển xe ô tô rẽ phải ở chỗ đường giao nhau, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
		options: [
			{
				text: "Có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe sang làn đường bên trái; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau."
			},
			{
				text: "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
				correct: true
			},
			{
				text: "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; tăng tốc độ và quan sát an toàn phía bên trái để điều khiển xe qua chỗ đường giao nhau."
			}
		]
	},
	{
		id: 225,
		question:
			"Khi điều khiển xe ô tô rẽ trái ở chỗ đường giao nhau, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
		options: [
			{
				text: "Cách chỗ rẽ một khoảng cách an toàn giảm tốc độ, có tín hiệu rẽ trái xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái; cho xe chạy chậm tới phía trong của tâm đường giao nhau mới rẽ trái để điều khiển xe qua chỗ đường giao nhau.",
				correct: true
			},
			{
				text: "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái, tăng tốc độ để xe nhanh chóng qua chỗ đường giao nhau; có tín hiệu xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi làn đường sang phải để mở rộng vòng cua."
			}
		]
	},
	{
		id: 226,
		question:
			"Khi điều khiển xe sử dụng hộp số cơ khí vượt qua rãnh lớn cắt ngang mặt đường, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
		options: [
			{
				text: "Gài số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tăng số, tăng tốc độ để bánh xe sau vượt qua rãnh."
			},
			{
				text: "Tăng ga, tăng số để hai bánh xe trước và bánh xe sau vượt qua khỏi rãnh và chạy bình thường."
			},
			{
				text: "Gài số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh.",
				correct: true
			}
		]
	},
	{
		id: 227,
		question:
			"Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
		options: [
			{
				text: "Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu."
			},
			{
				text: "Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe cần phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ và không thay đổi số trong quá trình vượt qua đường sắt để tránh động cơ chết máy cho xe cho vượt qua."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 228,
		question:
			"Khi điều khiển xe ô tô tự đổ, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
		options: [
			{
				text: `Khi chạy trên đường xấu, nhiều ổ gà nên chạy chậm để thùng xe không bị lắc mạnh, không gây hiện tượng lệch "ben"; khi chạy vào đường vòng, cần giảm tốc độ, không lấy lái gấp và không phanh gấp.`
			},
			{
				text: "Khi chạy trên đường quốc lộ, đường bằng phẳng không cần hạ hết thùng xe xuống."
			},
			{
				text: `Khi đổ hàng phải chọn vị trí có nền đường cứng và phẳng, dừng hẳn xe, kéo chặt phanh tay; sau đó mới điều khiển cơ cấu nâng "ben" để đổ hàng, đổ xong hàng mới hạ thùng xuống.`
			},
			{ text: "Cả ý 1 và ý 3.", correct: true }
		]
	},
	{
		id: 229,
		question:
			"Khi điều khiển xe tăng số, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
		options: [
			{
				text: "Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.",
				correct: true
			},
			{
				text: "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, vù ga phải phù hợp với tốc độ."
			}
		]
	},
	{
		id: 230,
		question:
			"Khi điều khiển xe giảm số, người lái xe cần phải chú ý những điểm gì để đảm bảo an toàn?",
		options: [
			{
				text: "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải giảm thứ tự từ cao đến thấp, phối hợp các động tác phải nhịp nhàng, chính xác."
			},
			{
				text: "Không được nhìn xuống buồng lái, cần phải giảm thứ tự từ cao đến thấp, phối hợp các động tác phải nhịp nhàng, chính xác, vù ga phải phù hợp với tốc độ.",
				correct: true
			}
		]
	},
	{
		id: 231,
		question:
			"Để giảm tốc độ khi ô tô đi xuống đường dốc dài, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?",
		options: [
			{
				text: "Nhả bàn đạp ga, đạp ly hợp (côn) hết hành trình, đạp mạnh phanh chân để giảm tốc độ."
			},
			{
				text: "Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
				correct: true
			},
			{
				text: "Nhả bàn đạp ga, tăng lên số cao, đạp phanh chân với mức độ phù hợp để giảm tốc độ."
			}
		],
		isPenalty: true
	},
	{
		id: 232,
		question:
			"Khi điều khiển ô tô qua đường ngập nước, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
		options: [
			{
				text: "Tăng lên số cao, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước."
			},
			{
				text: "Đạp ly hợp (côn) hết hành trình, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước."
			},
			{
				text: "Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
				correct: true
			}
		]
	},
	{
		id: 233,
		question:
			"Khi điều khiển xe ô tô tới gần xe chạy ngược chiều vào ban đêm, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
		options: [
			{
				text: "Chuyển từ đèn chiếu xa sang đèn chiếu gần; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
				correct: true
			},
			{
				text: "Chuyển từ đèn chiếu gần sang đèn chiếu xa; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình."
			},
			{
				text: "Chuyển từ đèn chiếu xa sang đèn chiếu gần; nhìn thẳng vào đèn của xe chạy ngược chiều để tránh xe đảm bảo an toàn."
			}
		]
	},
	{
		id: 234,
		question:
			"Khi điều khiển xe ô tô trên đường trơn cần chú ý những điểm gì để đảm bảo an toàn?",
		options: [
			{
				text: "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, giữ đều ga, đánh lái ngoặt và phanh gấp khi cần thiết."
			},
			{
				text: "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm (sử dụng số L hoặc 1, 2 đối với xe số tự động), gài cần (nếu có), giữ đều ga, không lấy nhiều lái, không đánh lái ngoặt và phanh gấp.",
				correct: true
			}
		]
	},
	{
		id: 235,
		question:
			"Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
		options: [
			{ text: "Phanh tay đang hãm hoặc thiếu dầu phanh.", correct: true },
			{ text: "Nhiệt độ nước làm mát quá mức cho phép." },
			{ text: "Cửa xe đang mở." }
		],
		image: "600-235.webp"
	},
	{
		id: 236,
		question:
			"Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
		options: [
			{ text: "Phanh tay đang hãm." },
			{ text: "Thiếu dầu phanh." },
			{ text: "Nhiệt độ nước làm mát tăng quá mức cho phép." },
			{ text: "Dầu bôi trơn bị thiếu.", correct: true }
		],
		image: "600-236.webp"
	},
	{
		id: 237,
		question:
			"Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
		options: [
			{ text: "Cửa xe đóng chưa chặt hoặc có cửa xe chưa đóng.", correct: true },
			{ text: "Bộ nạp ắc quy gặp sự cố kỹ thuật." },
			{ text: "Dầu bôi trơn bị thiếu." },
			{ text: "Cả ý 2 và ý 3." }
		],
		image: "600-237.webp"
	},
	{
		id: 238,
		question:
			"Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
		options: [
			{ text: "Thiếu dầu phanh, phanh tay đang hãm." },
			{ text: "Hệ thống túi khí an toàn gặp sự cố." },
			{ text: "Lái xe và người ngồi ghế trước chưa cài dây an toàn.", correct: true },
			{ text: "Cửa đóng chưa chặt, có cửa chưa đóng." }
		],
		image: "600-238.webp"
	},
	{
		id: 239,
		question:
			"Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
		options: [
			{ text: "Báo hiệu thiếu dầu phanh." },
			{ text: "Áp suất lốp không đủ." },
			{ text: "Đang hãm phanh tay." },
			{ text: "Sắp hết nhiên liệu.", correct: true }
		],
		image: "600-239.webp"
	},
	{
		id: 240,
		question:
			"Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
		options: [
			{ text: "Xăng và dầu diesel." },
			{ text: "Xăng sinh học và khí sinh học.", correct: true },
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 241,
		question: "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?",
		options: [
			{ text: "Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi xe chạy." },
			{
				text: "Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 242,
		question:
			"Khi đã đỗ xe ô tô sát lề đường bên phải, người lái xe phải thực hiện các thao tác nào dưới đây khi mở cửa xuống xe để đảm bảo an toàn?",
		options: [
			{
				text: "Quan sát tình hình giao thông phía trước và sau, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
				correct: true
			},
			{
				text: "Mở cánh cửa và quan sát tình hình giao thông phía trước, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô."
			},
			{ text: "Mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô." }
		],
		isPenalty: true
	},
	{
		id: 243,
		question:
			"Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điêu khiển giao thông, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
		options: [
			{
				text: "Tạm dừng xe tại vị trí cách đường sắt tối thiểu 5 mét, hạ kính cửa, tắt các thiết bị âm thanh trên xe, quan sát, nếu không có tàu chạy qua, về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua.",
				correct: true
			},
			{
				text: "Tại vị trí cách đường sắt tối thiểu 5 mét quan sát phía trước., nếu tàu còn cách xa, tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt."
			}
		]
	},
	{
		id: 244,
		question:
			"Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe thực hiện thao tác: tạm dừng xe tại vị trí cách đường sắt tối thiểu 5 mét, hạ kính cửa, tắt các thiết bị âm thanh trên xe, quan sát và nếu không có tàu chạy qua thì về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua để đảm bảo an toàn là đúng hay không?",
		options: [
			{ text: "Không đúng." },
			{ text: "Đúng.", correct: true },
			{
				text: "Không cần thiết, vì nếu nhìn thấy tàu còn cách xa, người lái xe có thể tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt."
			}
		]
	},
	{
		id: 245,
		question:
			"Khi điều khiển xe ô tô có hộp số tự động đi vào đường trơn trượt, lầy lội, người lái xe phải xử lý như thế nào để đảm bảo an toàn trong các trường hợp dưới đây?",
		options: [
			{ text: "Về số thấp, kết hợp phanh chân để giảm tốc độ.", correct: true },
			{ text: "Giữ nguyên tay số D, kết hợp phanh tay để giảm tốc độ." },
			{ text: "Về số N (số 0), kết hợp phanh chân để giảm tốc độ." }
		],
		isPenalty: true
	},
	{
		id: 246,
		question:
			"Khi động cơ ô tô đã khởi động, muốn điều chỉnh ghế của người lái, người lái xe phải để cần số ở vị trí nào?",
		options: [
			{ text: "Vị trí N hoặc vị trí P hoặc số 0.", correct: true },
			{ text: "Vị trí D hoặc số 1." },
			{ text: "Vị trí R." }
		]
	},
	{
		id: 247,
		question:
			"Khi điều khiển xe ô tô có hộp số tự động, người lái xe sử dụng chân như thế nào là đúng để đảm bảo an toàn?",
		options: [
			{
				text: "Không sử dụng chân trái; chân phải điều khiển bàn đạp phanh và bàn đạp ga.",
				correct: true
			},
			{ text: "Chân trái điều khiển bàn đạp phanh, chân phải điều khiển bàn đạp ga." },
			{
				text: "Không sử dụng chân phải; chân trái điều khiển bàn đạp phanh và bàn đạp ga."
			}
		]
	},
	{
		id: 248,
		question:
			"Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào?",
		options: [
			{ text: "Tăng tốc độ, chạy gần xe trước, nhìn đèn hậu để định hướng." },
			{
				text: "Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần.",
				correct: true
			},
			{ text: "Tăng tốc độ, bật đèn pha vượt qua xe chạy trước." }
		],
		isPenalty: true
	},
	{
		id: 249,
		question:
			"Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào để đảm bảo an toàn?",
		options: [
			{ text: "Giảm tốc độ, nếu cần thiết có thể dừng xe lại.", correct: true },
			{ text: "Bật đèn pha chiếu xa và giữ nguyên tốc độ." },
			{ text: "Tăng tốc độ, bật đèn pha đối diện xe phía trước." }
		]
	},
	{
		id: 250,
		question:
			"Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
		options: [
			{ text: "Sử dụng phanh trước." },
			{ text: "Sử dụng phanh sau." },
			{
				text: "Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước.",
				correct: true
			}
		]
	},
	{
		id: 251,
		question: `Khi lái xe ô tô trên mặt đường có nhiều "ổ gà", người lái xe phải thực hiện thao tác như thế nào để đảm bảo an toàn?`,
		options: [
			{ text: "Giảm tốc độ, về số thấp và giữ đều ga.", correct: true },
			{ text: "Tăng tốc độ cho xe lướt qua nhanh." },
			{ text: `Tăng tốc độ, đánh lái liên tục để tránh "ổ gà".` }
		]
	},
	{
		id: 252,
		question:
			"Khi điều khiển xe ô tô gặp mưa to hoặc sương mù, người lái xe phải làm gì để đảm bảo an toàn?",
		options: [
			{
				text: "Bật đèn chiếu gần và đèn vàng, điều khiển gạt nước, điều khiển ô tô đi với tốc độ chậm để có thể quan sát được; tìm chỗ an toàn dừng xe, bật đèn dừng khẩn cấp báo hiệu cho các xe khác biết.",
				correct: true
			},
			{
				text: "Bật đèn chiếu xa và đèn vàng, điều khiển gạt nước, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa hoặc sương mù."
			},
			{ text: "Tăng tốc độ, bật đèn pha vượt qua xe chạy phía trước." }
		]
	},
	{
		id: 253,
		question:
			"Điều khiển xe ô tô trong trời mưa, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
		options: [
			{
				text: "Giảm tốc độ, tăng cường quan sát, không nên phanh gấp, không nên tăng ga hay đánh vô lăng đột ngột, bật đèn pha gần, mở chế độ gạt nước ở chế độ phù hợp để đảm bảo quan sát.",
				correct: true
			},
			{
				text: "Phanh gấp khi xe đi vào vũng nước và tăng ga ngay sau khi ra khỏi vũng nước."
			},
			{ text: "Bật đèn chiếu xa, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa." }
		]
	},
	{
		id: 254,
		question:
			"Khi lùi xe, người lái xe phải xử lý như thế nào để đảm bảo an toàn giao thông?",
		options: [
			{
				text: "Quan sát bên trái, bên phải, phía sau xe, có tín hiệu cần thiết và lùi xe với tốc độ phù hợp.",
				correct: true
			},
			{ text: "Quan sát phía trước xe và lùi xe với tốc độ nhanh." },
			{ text: "Quan sát bên trái và phía trước của xe và lùi xe với tốc độ nhanh." }
		]
	},
	{
		id: 255,
		question: "Điều khiển xe ô tô trong khu vực đông dân cư cần lưu ý điều gì dưới đây?",
		options: [
			{
				text: "Giảm tốc độ đến mức an toàn, quan sát, nhường đường cho người đi bộ; giữ khoảng cách an toàn với các xe phía trước."
			},
			{
				text: "Đi đúng làn đường quy định; chỉ được chuyển làn đường ở nơi cho phép, nhưng phải quan sát."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 256,
		question:
			"Khi điều khiển xe ô tô nhập vào đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để đảm bảo an toàn giao thông?",
		options: [
			{
				text: "Quan sát, phát tín hiệu và lái xe nhập vào làn đường tăng tốc, nhường đường cho các xe đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì tăng tốc độ cho xe nhập vào làn đường cao tốc.",
				correct: true
			},
			{
				text: "Phát tín hiệu, quan sát các xe đang chạy phía trước, nếu đảm bảo các điều kiện an toàn thì tăng tốc độ cho xe nhập ngay vào làn đường cao tốc."
			},
			{
				text: "Phát tín hiệu và lái xe nhập vào làn đường tăng tốc, quan sát các xe phía sau đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì giảm tốc độ, từ từ cho xe nhập vào làn đường cao tốc."
			}
		]
	},
	{
		id: 257,
		question:
			"Khi điều khiển xe ô tô ra khỏi đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để đảm bảo an toàn giao thông?",
		options: [
			{
				text: `Quan sát phía trước để tìm biển báo chỉ dẫn "Lối ra đường cao tốc", kiểm tra tình trạng giao thông phía sau và bên phải, nếu đảm bảo điều kiện an toàn thì phát tín hiệu và điều khiển xe chuyển dần sang làn đường giảm tốc và ra khỏi đường cao tốc.`,
				correct: true
			},
			{
				text: `Quan sát phía trước để tìm biển báo chỉ dẫn "Lối ra đường cao tốc", trường hợp vượt qua "Lối ra đường cao tốc" thì phát tín hiệu, di chuyển sang làn đường giảm tốc và lùi xe quay trở lại.`
			}
		]
	},
	{
		id: 258,
		question:
			"Người lái xe được dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc trong trường hợp nào dưới đây?",
		options: [
			{
				text: "Xe gặp sự cố, tai nạn, hoặc trường hợp khẩn cấp không thể di chuyển bình thường.",
				correct: true
			},
			{ text: "Để nghỉ ngơi, đi vệ sinh, chụp ảnh, làm việc riêng..." },
			{ text: "Cả ý 1 và ý 2." }
		],
		isPenalty: true
	},
	{
		id: 259,
		question:
			"Trong trường hợp bất khả kháng, khi dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc người lái xe phải xử lý như thế nào dưới đây là đúng quy tắc giao thông?",
		options: [
			{ text: "Bật đèn cảnh báo sự cố, di chuyển phương tiện đến vị trí sát lề đường." },
			{
				text: "Sử dụng các thiết bị cảnh báo như chóp nón, biển báo, đèn chớp... đặt phía sau xe để cảnh báo các phương tiện khác."
			},
			{
				text: "Gọi số điện thoại khẩn cấp của đường cao tốc để được hỗ trợ nếu xe gặp sự cố, tai nạn hoặc các trường hợp khẩn cấp không thể di chuyển bình thường."
			},
			{ text: "Tất cả các ý nêu trên.", correct: true }
		]
	},
	{
		id: 260,
		question:
			"Khi điều khiển ô tô xuống đường dốc dài, độ dốc cao, người lái xe số tự động cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
		options: [
			{
				text: "Nhả bàn đạp ga, về số thấp (sử dụng số L hoặc 1, 2), đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
				correct: true
			},
			{
				text: "Nhả bàn đạp ga, về số không (N) đạp phanh chân và kéo phanh tay để giảm tốc độ."
			}
		],
		isPenalty: true
	},
	{
		id: 261,
		question:
			"Khi đi từ đường nhánh ra đường chính, người lái xe phải xử lý như thế nào là đúng quy tắc giao thông?",
		options: [
			{
				text: "Giảm tốc độ, nhường đường cho xe trên đường chính từ bất kỳ hướng nào tới.",
				correct: true
			},
			{
				text: "Nháy đèn, bấm còi để xe đi trên đường chính biết và tăng tốc độ cho xe đi ra đường chính."
			},
			{
				text: "Quan sát xe đang đi trên đường chính, nếu là xe có kích thước lớn hơn thì nhường đường, xe có kích thước nhỏ hơn thì tăng tốc độ cho xe đi ra đường chính."
			}
		],
		isPenalty: true
	},
	{
		id: 262,
		question:
			"Khi đang lái xe mô tô và ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?",
		options: [
			{
				text: "Giảm tốc độ để đảm bảo an toàn với xe phía trước và sử dụng điện thoại để liên lạc."
			},
			{
				text: "Giảm tốc độ để dừng xe ở nơi cho phép dừng xe sau đó sử dụng điện thoại để liên lạc.",
				correct: true
			},
			{ text: "Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc." }
		],
		isPenalty: true
	},
	{
		id: 263,
		question:
			"Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
		options: [
			{ text: "Sử dụng còi." },
			{ text: "Phanh đồng thời cả phanh trước và phanh sau." },
			{ text: "Chỉ sử dụng phanh trước.", correct: true }
		]
	},
	{
		id: 264,
		question:
			"Người ngồi trên xe ô tô cần thực hiện những thao tác mở cửa như thế nào dưới đây để xuống xe một cách an toàn?",
		options: [
			{
				text: "Quan sát gương chiếu hậu hoặc xoay người quan sát phía trước và phía sau để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, dùng tay cách xa cửa hơn mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.",
				correct: true
			},
			{
				text: "Quan sát tình hình giao thông phía trước, không cần quan sát phía sau và bên mở cửa; mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô."
			}
		]
	},
	{
		id: 265,
		question:
			"Khi điều khiển xe mô tô quay đầu, người lái xe cần thực hiện như thế nào để đảm bảo an toàn?",
		options: [
			{
				text: "Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại."
			},
			{ text: "Chỉ quay đầu xe tại những nơi được phép quay đầu." },
			{
				text: "Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới."
			},
			{ text: "Tất cả các ý nêu trên.", correct: true }
		]
	},
	{
		id: 266,
		question:
			"Tay ga trên xe mô tô hai bánh có tác dụng gì trong các trường hợp dưới đây?",
		options: [
			{ text: "Để điều khiển xe chạy về phía trước." },
			{ text: "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe." },
			{ text: "Để điều khiển xe chạy lùi." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 267,
		question:
			"Gương chiếu hậu của xe mô tô hai bánh, có tác dụng gì trong các trường hợp dưới đây?",
		options: [
			{ text: "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái." },
			{ text: "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải." },
			{
				text: "Để quan sát an toàn phía sau cả bên trái và bên phải trước khi chuyển hướng.",
				correct: true
			},
			{
				text: "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng."
			}
		]
	},
	{
		id: 268,
		question:
			"Để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào trong các trường hợp dưới đây?",
		options: [
			{ text: "Tăng ga thật mạnh, giảm ga từ từ." },
			{ text: "Tăng ga thật mạnh, giảm ga thật nhanh." },
			{ text: "Tăng ga từ từ, giảm ga thật nhanh.", correct: true },
			{ text: "Tăng ga từ từ, giảm ga từ từ." }
		]
	},
	{
		id: 269,
		question:
			"Kỹ thuật cơ bản để giữ thăng bằng khi điều khiển xe mô tô đi trên đường gồ ghề như thế nào trong các trường hợp dưới đây?",
		options: [
			{
				text: "Đứng thẳng trên giá gác chân lái sau đó hơi gập đầu gối và khủy tay, đi chậm để không nẩy quá mạnh.",
				correct: true
			},
			{ text: "Ngồi lùi lại phía sau, tăng ga vượt nhanh qua đoạn đường xóc." },
			{
				text: "Ngồi lệch sang bên trái hoặc bên phải để lấy thăng bằng qua đoạn đường gồ ghề."
			}
		]
	}
]
