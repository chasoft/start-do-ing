/**
 * Chapter 1: Khái niệm và quy tắc giao thông đường bộ
 * 						166 questions (45 penalty questions)
 */

import { QuestionData } from "."

export const chapter1: Array<QuestionData> = [
	{
		id: 1,
		question:
			"Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?",
		options: [
			{ text: "Phần mặt đường và lề đường." },
			{ text: "Phần đường xe chạy.", correct: true },
			{ text: "Phần đường xe cơ giới." }
		]
	},
	{
		id: 2,
		question: `"Làn đường" là gì?`,
		options: [
			{
				text: "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy."
			},
			{
				text: "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
				correct: true
			},
			{ text: "Là đường cho xe ô tô chạy, dừng, đỗ an toàn." }
		]
	},
	{
		id: 3,
		question: `Khái niệm "Khổ giới hạn của đường bộ" được hiểu như thế nào là đúng?`,
		options: [
			{
				text: "Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
				correct: true
			},
			{
				text: "Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn."
			},
			{
				text: "Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn."
			}
		]
	},
	{
		id: 4,
		question: `Trong các khái niệm dưới đây, "dải phân cách" được hiểu như thế nào là đúng?`,
		options: [
			{
				text: "Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép."
			},
			{
				text: "Là bộ phận của đường để phân tách phần đường xe chạy và hành lang an toàn giao thông."
			},
			{
				text: "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
				correct: true
			}
		]
	},
	{
		id: 5,
		question: `"Dải phân cách" trên đường bộ gồm những loại nào?`,
		options: [
			{ text: "Dải phân cách gồm loại cố định và loại di động.", correct: true },
			{ text: "Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm." },
			{ text: "Dải phân cách gồm giá long môn và biển báo hiệu đường bộ." }
		]
	},
	{
		id: 6,
		question: "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?",
		options: [
			{ text: "Là người điều khiển xe cơ giới.", correct: true },
			{ text: "Là người điều khiển xe thô sơ." },
			{ text: "Là người điều khiển xe có súc vật kéo." }
		]
	},
	{
		id: 7,
		question:
			"Đường mà trên đó phương tiện tham gia giao thông được các phương tiện giao thông đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên là loại đường gì?",
		options: [
			{ text: "Đường không ưu tiên." },
			{ text: "Đường tỉnh lộ." },
			{ text: "Đường quốc lộ." },
			{ text: "Đường ưu tiên.", correct: true }
		]
	},
	{
		id: 8,
		question: `Khái niệm "phương tiện giao thông cơ giới đường bộ" được hiểu thế nào là đúng?`,
		options: [
			{
				text: "Gồm xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng."
			},
			{
				text: "Gồm xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo; xe mô tô hai bánh; xe mô tô ba bánh, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự.",
				correct: true
			}
		]
	},
	{
		id: 9,
		question: `Khái niệm "phương tiện giao thông thô sơ đường bộ" được hiểu thế nào là đúng?`,
		options: [
			{
				text: "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự.",
				correct: true
			},
			{
				text: "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng."
			},
			{
				text: "Gồm xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo."
			}
		]
	},
	{
		id: 10,
		question: `"Phương tiện tham gia giao thông đường bộ" gồm những loại nào?`,
		options: [
			{ text: "Phương tiện giao thông cơ giới đường bộ." },
			{ text: "Phương tiện giao thông thô sơ đường bộ và xe máy chuyên dùng." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 11,
		question: `"Người tham gia giao thông đường bộ" gồm những đối tượng nào?`,
		options: [
			{
				text: "Người điều khiển, người sử dụng phương tiện tham gia giao thông đường bộ."
			},
			{ text: "Người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 12,
		question: `"Người điều khiển phương tiện tham gia giao thông đường bộ" gồm những đối tượng nào dưới đây?`,
		options: [
			{ text: "Người điều khiển xe cơ giới, người điều khiển xe thô sơ." },
			{ text: "Người điều khiển xe máy chuyên dùng tham gia giao thông đường bộ." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 13,
		question: `Khái niệm "người điều khiển giao thông" được hiểu như thế nào là đúng?`,
		options: [
			{
				text: "Là người điều khiển phương tiện tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt."
			},
			{
				text: "Là cảnh sát giao thông, người được giao nhiệm vụ hướng dẫn giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
				correct: true
			},
			{
				text: "Là người tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt."
			}
		]
	},
	{
		id: 14,
		question: `Trong các khái niệm dưới đây, khái niệm "dừng xe" được hiểu như thế nào là đúng?`,
		options: [
			{
				text: "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian để cho người lên, xuống phương tiện; xếp dỡ hàng hóa hoặc thực hiện công việc khác."
			},
			{
				text: "Là trạng thái đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện; xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
				correct: true
			},
			{
				text: "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian giữa 02 lần vận chuyển hàng hóa hoặc hành khách."
			}
		]
	},
	{
		id: 15,
		question: `Khái niệm "đỗ xe" được hiểu như thế nào là đúng?`,
		options: [
			{
				text: "Là trạng thái đứng yên của phương tiện giao thông có giới hạn trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện đó; xếp dỡ hàng hóa hoặc thực hiện công việc khác."
			},
			{
				text: "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian.",
				correct: true
			}
		]
	},
	{
		id: 16,
		question: `Khái niệm "đường cao tốc" được hiểu như thế nào là đúng?`,
		options: [
			{
				text: "Đường dành riêng cho xe ô tô và một số loại xe chuyên dùng được phép đi vào theo quy định của Luật Giao thông đường bộ."
			},
			{
				text: "Có dải phân cách phân chia đường cho xe chạy hai chiều riêng biệt mà dải phân cách này xe không được đi lên trên; không giao nhau cùng mức với một hoặc một số đường khác."
			},
			{
				text: "Được bố trí đầy đủ trang thiết bị phục vụ, bảo đảm giao thông liên tục, an toàn, rút ngắn thời gian hành trình và chỉ cho xe ra, vào ở những điểm nhất định."
			},
			{ text: "Tất cả các ý trên.", correct: true }
		]
	},
	{
		id: 17,
		question: "Hành vi nào dưới đây bị nghiêm cấm?",
		options: [
			{ text: "Đỗ xe trên đường phố." },
			{ text: "Sử dụng xe đạp đi trên các tuyến quốc lộ có tốc độ cao." },
			{ text: "Làm hỏng (cố ý) cọc tiêu, gương cầu, dải phân cách.", correct: true },
			{ text: "Sử dụng còi và quay đầu xe trong khu dân cư." }
		],
		isPenalty: true
	},
	{
		id: 18,
		question:
			"Hành vi đưa xe cơ giới, xe máy chuyên dùng không bảo đảm tiêu chuẩn an toàn kỹ thuật và bảo vệ môi trường vào tham gia giao thông đường bộ có bị nghiêm cấm hay không?",
		options: [
			{ text: "Không nghiêm cấm." },
			{ text: "Bị nghiêm cấm.", correct: true },
			{ text: "Bị nghiêm cấm tùy theo các tuyến đường." },
			{ text: "Bị nghiêm cấm tùy theo loại xe." }
		],
		isPenalty: true
	},
	{
		id: 19,
		question: "Cuộc đua xe chỉ được thực hiện khi nào?",
		options: [
			{ text: "Diễn ra trên đường phố không có người qua lại." },
			{ text: "Được người dân ủng hộ." },
			{ text: "Được cơ quan có thẩm quyền cấp phép.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 20,
		question:
			"Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
		options: [
			{ text: "Bị nghiêm cấm.", correct: true },
			{ text: "Không bị nghiêm cấm." },
			{
				text: "Không bị nghiêm cấm, nếu có chất ma túy ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
			}
		],
		isPenalty: true
	},
	{
		id: 21,
		question:
			"Việc lái xe mô tô, ô tô, máy kéo ngay sau khi uống rượu, bia có được phép hay không?",
		options: [
			{ text: "Không được phép.", correct: true },
			{ text: "Chỉ được lái ở tốc độ chậm và quãng đường ngắn." },
			{ text: "Chỉ được lái nếu trong cơ thể có nồng độ cồn thấp." }
		],
		isPenalty: true
	},
	{
		id: 22,
		question:
			"Người điều khiển xe mô tô, ô tô, máy kéo trên đường mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
		options: [
			{ text: "Bị nghiêm cấm.", correct: true },
			{ text: "Không bị nghiêm cấm." },
			{
				text: "Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
			}
		],
		isPenalty: true
	},
	{
		id: 23,
		question: "Sử dụng rượu, bia khi lái xe, nếu bị phát hiện thì bị xử lý như thế nào?",
		options: [
			{ text: "Chỉ bị nhắc nhở." },
			{
				text: "Bị xử phạt hành chính hoặc có thể bị xử lý hình sự tùy theo mức độ vi phạm.",
				correct: true
			},
			{ text: "Không bị xử lý hình sự." }
		],
		isPenalty: true
	},
	{
		id: 24,
		question:
			"Theo Luật phòng chống tác hại của rượu, bia đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
		options: [
			{ text: "Người điều khiển: xe ô tô, me mô tô, xe đạp, xe gắn máy.", correct: true },
			{ text: "Người ngồi phía sau người điều khiển xe cơ giới." },
			{ text: "Người đi bộ." },
			{ text: "Cả ý 1 và ý 2." }
		],
		isPenalty: true
	},
	{
		id: 25,
		question:
			"Hành vi giao xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện để điều khiển xe tham gia giao thông có được phép hay không?",
		options: [
			{ text: "Chỉ được thực hiện nếu đã hướng dẫn đầy đủ." },
			{ text: "Không được phép.", correct: true },
			{ text: "Được phép tùy từng trường hợp." },
			{ text: "Chỉ được phép thực hiện với thành viên trong gia đình." }
		],
		isPenalty: true
	},
	{
		id: 26,
		question:
			"Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?",
		options: [
			{ text: "Bị nghiêm cấm tùy từng trường hợp." },
			{ text: "Không bị nghiêm cấm." },
			{ text: "Bị nghiêm cấm.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 27,
		question:
			"Khi lái xe trên đường, người lái xe cần quan sát và đảm bảo tốc độ phương tiện như thế nào?",
		options: [
			{ text: "Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng." },
			{ text: "Chỉ lớn hơn tốc độ tối đa cho phép vào ban đêm." },
			{ text: "Không vượt quá tốc độ cho phép.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 28,
		question:
			"Phương tiện giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
		options: [
			{ text: "Đi về phía bên trái." },
			{ text: "Đi về phía bên phải.", correct: true },
			{ text: "Đi ở giữa." }
		],
		isPenalty: true
	},
	{
		id: 29,
		question:
			"Trên đường có nhiều làn đường, khi điều khiển phương tiện ở tốc độ chậm bạn phải đi ở làn đường nào?",
		options: [
			{ text: "Đi ở làn bên phải trong cùng.", correct: true },
			{ text: "Đi ở làn phía bên trái." },
			{ text: "Đi ở làn giữa." },
			{
				text: "Đi ở bất cứ làn nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác."
			}
		],
		isPenalty: true
	},
	{
		id: 30,
		question:
			"Hành vi vượt xe tại các vị trí có tầm nhìn hạn chế, đường vòng, đầu dốc có bị nghiêm cấm hay không?",
		options: [
			{ text: "Không bị nghiêm cấm." },
			{ text: "Không bị nghiêm cấm khi rất vội." },
			{ text: "Bị nghiêm cấm.", correct: true },
			{ text: "Không bị nghiêm cấm khi khẩn cấp." }
		],
		isPenalty: true
	},
	{
		id: 31,
		question:
			"Khi lái xe trong khu đô thị và đông dân cư trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi như thế nào trong các trường hợp dưới đây?",
		options: [
			{ text: "Từ 22 giờ đêm đến 5 giờ sáng." },
			{ text: "Từ 5 giờ sáng đến 22 giờ tối.", correct: true },
			{ text: "Từ 23 giờ đêm đến 5 giờ sáng hôm sau." }
		]
	},
	{
		id: 32,
		question:
			"Người lái xe sử dụng đèn như thế nào khi lái xe trong khu đô thị và đông dân cư vào ban đêm?",
		options: [
			{ text: "Bất cứ đèn nào miễn là mắt nhìn rõ phía trước." },
			{ text: "Chỉ bật đèn chiếu xa (đèn pha) khi không nhìn rõ đường." },
			{
				text: "Đèn chiếu xa (đèn pha) khi đường vắng, đèn pha chiếu gần (đèn cốt) khi có xe đi ngược chiều."
			},
			{ text: "Đèn chiếu gần (đèn cốt).", correct: true }
		]
	},
	{
		id: 33,
		question:
			"Hành vi lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới có được phép hay không?",
		options: [
			{ text: "Được phép." },
			{ text: "Không được phép.", correct: true },
			{ text: "Được phép tùy từng trường hợp." }
		],
		isPenalty: true
	},
	{
		id: 34,
		question:
			"Trong trường hợp đặc biệt, để được lắp đặt, sử dụng còi, đèn không đúng với thiết kế của nhà sản xuất đối với từng loại xe cơ giới bạn phải đảm bảo yêu cầu nào dưới đây?",
		options: [
			{ text: "Phải đảm bảo phụ tùng do đúng nhà sản xuất đó cung cấp." },
			{ text: "Phải được chấp thuận của cơ quan có thẩm quyền.", correct: true },
			{ text: "Phải là xe đăng ký và hoạt động tại các khu vực có địa hình phức tạp." }
		]
	},
	{
		id: 35,
		question:
			"Việc sản xuất, mua bán, sử dụng biển số xe cơ giới, xe máy chuyên dùng được quy định như thế nào trong Luật Giao thông đường bộ?",
		options: [
			{ text: "Được phép sản xuất, sử dụng khi bị mất biển số." },
			{ text: "Được phép mua bán, sử dụng khi bị mất biển số." },
			{ text: "Nghiêm cấm sản xuất, mua bán, sử dụng trái phép.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 36,
		question:
			"Người lái xe không được vượt xe khác khi gặp trường hợp nào ghi ở dưới đây?",
		options: [
			{
				text: "Trên cầu hẹp có một làn xe. Nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; xe được quyền ưu tiên đang phát tín hiệu ưu tiên đi làm nhiệm vụ.",
				correct: true
			},
			{
				text: "Trên cầu có từ 02 làn xe trở lên; nơi đường bộ giao nhau không cùng mức với đường sắt; xe được quyền ưu tiên đang đi phía trước nhưng không phát tín hiệu ưu tiên."
			},
			{ text: "Trên đường có 2 làn đường được phân chia làn bằng vạch kẻ nét đứt." }
		],
		isPenalty: true
	},
	{
		id: 37,
		question:
			"Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt có được quay đầu xe hay không?",
		options: [
			{ text: "Được phép." },
			{ text: "Không được phép.", correct: true },
			{ text: "Tùy từng trường hợp." }
		],
		isPenalty: true
	},
	{
		id: 38,
		question:
			"Bạn đang lái xe, phía trước có một xe cảnh sát giao thông không phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
		options: [
			{ text: "Không được vượt." },
			{ text: "Được vượt khi đang đi trên cầu." },
			{
				text: "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông."
			},
			{ text: "Được vượt khi đảm bảo an toàn.", correct: true }
		]
	},
	{
		id: 39,
		question:
			"Bạn đang lái xe, phía trước có một xe cứu thương đang phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
		options: [
			{ text: "Không được vượt.", correct: true },
			{ text: "Được vượt khi đang đi trên cầu." },
			{
				text: "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông."
			},
			{ text: "Được vượt khi đảm bảo an toàn." }
		]
	},
	{
		id: 40,
		question: "Người lái xe không được quay đầu xe trong các trường hợp nào dưới đây?",
		options: [
			{
				text: "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt.",
				correct: true
			},
			{
				text: "Ở phía trước hoặc phía sau của phần đường dành cho người đi bộ qua đường, trên đường quốc lộ, tại nơi đường bộ giao nhau không cùng mức với đường sắt."
			},
			{ text: "Cả ý 1 và ý 2." }
		],
		isPenalty: true
	},
	{
		id: 41,
		question:
			"Bạn đang lái xe trong khu dân cư, có đông xe qua lại, nếu muốn quay đầu bạn cần làm gì để tránh ùn tắc và đảm bảo an toàn giao thông?",
		options: [
			{
				text: "Đi tiếp đến điểm giao cắt gần nhất hoặc nơi có biển báo cho phép quay đầu xe.",
				correct: true
			},
			{ text: "Bấm đèn khẩn cấp và quay đầu xe từ từ bảo đảm an toàn." },
			{ text: "Bấm còi liên tục khi quay đầu để cảnh báo các xe khác." },
			{ text: "Nhờ một người ra hiệu giao thông trên đường chậm lại trước khi quay đầu." }
		]
	},
	{
		id: 42,
		question: "Người lái xe không được lùi xe ở những khu vực nào dưới đây?",
		options: [
			{ text: "Ở khu vực cho phép đỗ xe." },
			{ text: "Ở khu vực cấm dừng và trên phần đường dành cho người đi bộ qua đường." },
			{
				text: "Nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, đường cao tốc."
			},
			{ text: "Cả ý 2 và ý 3.", correct: true }
		]
	},
	{
		id: 43,
		question:
			"Người điều khiển phương tiện giao thông trên đường phố có được dừng xe, đỗ xe trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước hay không?",
		options: [
			{ text: "Được dừng xe, đỗ xe trong trường hợp cần thiết." },
			{ text: "Không được dừng xe, đỗ xe.", correct: true },
			{ text: "Được dừng xe, không được đỗ xe." }
		],
		isPenalty: true
	},
	{
		id: 44,
		question:
			"Khi xe đã kéo 1 xe hoặc xe đã kéo 1 rơ moóc, bạn có được phép kéo thêm xe (kể cả xe thô sơ) hoặc rơ moóc thứ hai hay không?",
		options: [
			{ text: "Chỉ được thực hiện trên đường quốc lộ có hai làn xe một chiều." },
			{ text: "Chỉ được thực hiện trên đường cao tốc." },
			{ text: "Không được thực hiện vào ban ngày." },
			{ text: "Không được phép.", correct: true }
		]
	},
	{
		id: 45,
		question:
			"Người điều khiển xe mô tô hai bánh, ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
		options: [
			{ text: "Được phép." },
			{
				text: "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình."
			},
			{ text: "Tùy trường hợp." },
			{ text: "Không được phép.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 46,
		question:
			"Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy có được phép hay không?",
		options: [
			{ text: "Được phép." },
			{ text: "Tùy trường hợp." },
			{ text: "Không được phép.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 47,
		question:
			"Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?",
		options: [
			{
				text: "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe để quệt xuống đường khi xe đang chạy.",
				correct: true
			},
			{
				text: "Buông một tay; sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành."
			},
			{
				text: "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ."
			},
			{ text: "Chở người ngồi sau dưới 16 tuổi." }
		],
		isPenalty: true
	},
	{
		id: 48,
		question:
			"Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
		options: [
			{ text: "Được mang, vác tùy trường hợp cụ thể." },
			{ text: "Không được mang, vác.", correct: true },
			{ text: "Được mang, vác nhưng phải đảm bảo an toàn." },
			{ text: "Được mang, vác tùy theo sức khoẻ của bản thân." }
		],
		isPenalty: true
	},
	{
		id: 49,
		question:
			"Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được bám, kéo hoặc đẩy các phương tiện khác không?",
		options: [
			{ text: "Được phép." },
			{ text: "Được bám trong trường hợp phương tiện của mình bị hỏng." },
			{ text: "Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng." },
			{ text: "Không được phép.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 50,
		question:
			"Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được sử dụng ô khi trời mưa hay không?",
		options: [
			{ text: "Được sử dụng." },
			{ text: "Chỉ người ngồi sau được sử dụng." },
			{ text: "Không được sử dụng.", correct: true },
			{ text: "Được sử dụng nếu không có áo mưa." }
		],
		isPenalty: true
	},
	{
		id: 51,
		question:
			"Khi đang lên dốc người ngồi trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
		options: [
			{ text: "Chỉ được phép nếu cả hai đội mũ bảo hiểm." },
			{ text: "Không được phép.", correct: true },
			{ text: "Chỉ được thực hiện trên đường thật vắng." },
			{ text: "Chỉ được phép khi người đi xe đạp đã quá mệt." }
		],
		isPenalty: true
	},
	{
		id: 52,
		question:
			"Hành vi sử dụng xe mô tô để kéo, đẩy xe mô tô khác bị hết xăng đến trạm mua xăng có được phép hay không?",
		options: [
			{ text: "Chỉ được kéo nếu đã nhìn thấy trạm xăng." },
			{
				text: "Chỉ được thực hiện trên đường vắng phương tiện cùng tham gia giao thông."
			},
			{ text: "Không được phép.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 53,
		question:
			"Hành vi vận chuyển đồ vật cồng kềnh bằng xe mô tô, xe gắn máy khi tham gia giao thông có được phép hay không?",
		options: [
			{ text: "Không được vận chuyển.", correct: true },
			{ text: "Chỉ được vận chuyển khi đã chằng buộc cẩn thận." },
			{
				text: "Chỉ được vận chuyển vật cồng kềnh trên xe máy nếu khoảng cách về nhà ngắn hơn 2 km."
			}
		],
		isPenalty: true
	},
	{
		id: 54,
		question:
			"Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe ô tô tải, máy kéo có trọng tải từ 3.500 kg trở lên; xe hạng B2 kéo rơ moóc (FB2)?",
		options: [
			{ text: "19 tuổi." },
			{ text: "21 tuổi.", correct: true },
			{ text: "20 tuổi." }
		]
	},
	{
		id: 55,
		question:
			"Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh, xe mô tô ba bánh có dung tích xi lanh từ 50 cm3 trở lên và các loại xe có kết cấu tương tự; xe ô tô tải, máy kéo có trọng tải dưới 3.500 kg; xe ô tô chở người đến 9 chỗ ngồi?",
		options: [
			{ text: "16 tuổi." },
			{ text: "18 tuổi.", correct: true },
			{ text: "17 tuổi." }
		]
	},
	{
		id: 56,
		question:
			"Người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E), lái xe hạng D kéo rơ moóc (FD) phải đủ bao nhiêu tuổi trở lên?",
		options: [
			{ text: "23 tuổi." },
			{ text: "24 tuổi." },
			{ text: "27 tuổi.", correct: true },
			{ text: "30 tuổi." }
		]
	},
	{
		id: 57,
		question:
			"Tuổi tối đa của người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E) là bao nhiêu tuổi?",
		options: [
			{ text: "55 tuổi đối với nam và 50 tuổi đối với nữ.", correct: true },
			{ text: "55 tuổi đối với nam và nữ." },
			{ text: "60 tuổi đối với nam và 55 tuổi đối với nữ." },
			{ text: "45 tuổi đối với nam và 40 tuổi đối với nữ." }
		]
	},
	{
		id: 58,
		question:
			"Người lái xe chở người từ 10 đến 30 chỗ ngồi (hạng D), lái xe hạng C kéo rơ moóc (FC) phải đủ bao nhiêu tuổi trở lên?",
		options: [
			{ text: "23 tuổi." },
			{ text: "24 tuổi.", correct: true },
			{ text: "22 tuổi." },
			{ text: "18 tuổi." }
		]
	},
	{
		id: 59,
		question: "Người đủ 16 tuổi được điều khiển các loại xe nào dưới đây?",
		options: [
			{ text: "Xe mô tô 2 bánh có dung tích xi-lanh từ 50 cm3 trở lên." },
			{ text: "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.", correct: true },
			{ text: "Xe ô tô tải dưới 3.500 kg; xe chở người đến 9 chỗ ngồi." },
			{ text: "Tất cả các ý nêu trên." }
		]
	},
	{
		id: 60,
		question:
			"Người có Giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
		options: [
			{ text: "Xe mô tô có dung tích xi-lanh 125 cm3." },
			{ text: "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên.", correct: true },
			{ text: "Xe mô tô có dung tích xi-lanh 100 cm3." }
		]
	},
	{
		id: 61,
		question:
			"Người có Giấy phép lái xe mô tô hạng A1 được phép điều khiển loại xe nào dưới đây?",
		options: [
			{ text: "Xe mô tô hai bánh có dung tích xi-lanh từ 50 cm3 đến dưới 175 cm3." },
			{ text: "Xe mô tô ba bánh dùng cho người khuyết tật." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 62,
		question:
			"Người có Giấy phép lái xe mô tô hạng A2 được phép điều khiển loại xe nào dưới đây?",
		options: [
			{ text: "Xe mô tô ba bánh." },
			{
				text: "Xe mô tô hai bánh có dung tích xi-lanh từ 175 cm3 trở lên và các loại xe quy định cho Giấy phép lái xe hạng A1.",
				correct: true
			},
			{ text: "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg." }
		]
	},
	{
		id: 63,
		question:
			"Người có Giấy phép lái xe mô tô hạng A3 được phép điều khiển loại xe nào dưới đây?",
		options: [
			{ text: "Xe mô tô ba bánh.", correct: true },
			{ text: "Xe mô tô hai bánh có dung tích xi-lanh từ 175 cm3 trở lên." },
			{ text: "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg." }
		]
	},
	{
		id: 64,
		question: "Người có Giấy phép lái xe hạng B1 số tự động được điều khiển loại xe nào?",
		options: [
			{
				text: "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Không được hành nghề lái xe.",
				correct: true
			},
			{
				text: "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Được hành nghề lái xe kinh doanh vận tải."
			},
			{
				text: "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật."
			}
		]
	},
	{
		id: 65,
		question: "Người có Giấy phép lái xe hạng B1 được điều khiển loại xe nào?",
		options: [
			{
				text: "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Được hành nghề lái xe."
			},
			{
				text: "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Không được hành nghề lái xe.",
				correct: true
			},
			{
				text: "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật."
			}
		]
	},
	{
		id: 66,
		question: "Người có Giấy phép lái xe hạng B2 được điều khiển loại xe nào dưới đây?",
		options: [
			{
				text: "Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg."
			},
			{
				text: "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải dưới 3.500 kg.",
				correct: true
			},
			{
				text: "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg."
			}
		]
	},
	{
		id: 67,
		question: "Người có Giấy phép lái xe hạng C được điều khiển loại xe nào dưới đây?",
		options: [
			{
				text: "Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg."
			},
			{
				text: "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg."
			},
			{
				text: "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
				correct: true
			}
		]
	},
	{
		id: 68,
		question: "Người có Giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
		options: [
			{
				text: "Ô tô chở người đến 30 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
				correct: true
			},
			{
				text: "Xe ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg."
			},
			{
				text: "Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2."
			}
		]
	},
	{
		id: 69,
		question: "Người có Giấy phép lái xe hạng E được điều khiển loại xe nào dưới đây?",
		options: [
			{
				text: "Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2."
			},
			{
				text: "Ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
				correct: true
			},
			{
				text: "Xe kéo rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C, D, FB2, FD."
			}
		]
	},
	{
		id: 70,
		question: "Người có Giấy phép lái xe hạng FC được điều khiển loại xe nào dưới đây?",
		options: [
			{
				text: "Các loại xe được quy định tại Giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chở khách nối toa và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2 và FB2."
			},
			{
				text: "Các loại xe được quy định tại Giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2.",
				correct: true
			},
			{
				text: "Mô tô hai bánh, các loại xe được quy định tại Giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2."
			},
			{ text: "Tất cả các loại xe nêu trên." }
		]
	},
	{
		id: 71,
		question: "Người có Giấy phép lái xe hạng FE được điều khiển loại xe nào dưới đây?",
		options: [
			{
				text: "Các loại xe được quy định tại Giấy phép lái xe hạng E có kéo rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C, D, FB2, FD.",
				correct: true
			},
			{
				text: "Các loại xe được quy định tại Giấy phép lái xe hạng E có kéo rơ moóc, đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C, D, FB2, FD."
			},
			{ text: "Tất cả các loại xe nêu trên." }
		]
	},
	{
		id: 72,
		question:
			"Biển báo hiệu có dạng hình tròn, viền đỏ, nền trắng, trên nền có hình vẽ hoặc chữ số, chữ viết màu đen là loại biển gì dưới đây?",
		options: [
			{ text: "Biển báo nguy hiểm." },
			{ text: "Biển báo cấm.", correct: true },
			{ text: "Biển báo hiệu lệnh." },
			{ text: "Biển báo chỉ dẫn." }
		],
		image: "600-072.webp"
	},
	{
		id: 73,
		question:
			"Biển báo hiệu có dạng tam giác đều, viền đỏ, nền màu vàng, trên nền có hình vẽ màu đen là loại biển gì dưới đây?",
		options: [
			{ text: "Biển báo nguy hiểm.", correct: true },
			{ text: "Biển báo cấm." },
			{ text: "Biển báo hiệu lệnh." },
			{ text: "Biển báo chỉ dẫn." }
		],
		image: "600-073.webp"
	},
	{
		id: 74,
		question:
			"Biển báo hiệu hình tròn, có nền xanh lam, có hình vẽ màu trắng là loại biển gì dưới đây?",
		options: [
			{ text: "Biển báo nguy hiểm." },
			{ text: "Biển báo cấm." },
			{ text: "Biển báo hiệu lệnh phải thi hành.", correct: true },
			{ text: "Biển báo chỉ dẫn." }
		],
		image: "600-074.webp"
	},
	{
		id: 75,
		question:
			"Biển báo hiệu hình chữ nhật hoặc hình vuông hoặc hình mũi tên nền xanh lam là loại biển gì dưới đây?",
		options: [
			{ text: "Biển báo nguy hiểm." },
			{ text: "Biển báo cấm." },
			{ text: "Biển báo hiệu lệnh phải thi hành." },
			{ text: "Biển báo chỉ dẫn.", correct: true }
		],
		image: "600-075.webp"
	},
	{
		id: 76,
		question:
			"Khi tập lái xe ô tô, người tập lái xe phải thực hiện các điều kiện gì dưới đây?",
		options: [
			{ text: "Phải thực hành lái xe trên xe tập lái và có giáo viên bảo trợ tay lái." },
			{ text: `Phải mang theo phù hiệu "học viên tập lái xe".` },
			{
				text: "Phải mang theo Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, Giấy phép vận chuyển (nếu loại xe đó cần phải có)."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 77,
		question:
			"Khi dạy thực hành lái xe, giáo viên phải mang theo các giấy tờ gì dưới đây?",
		options: [
			{
				text: `Phải mang theo phù hiệu "Giáo viên dạy lái xe", giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, giấy phép xe tập lái do cơ quan có thẩm quyền cấp còn hiệu lực.`,
				correct: true
			},
			{
				text: `Phải mang theo phù hiệu "Học viên tập lái xe" và kế hoạch học tập của khóa học.`
			},
			{
				text: "Phải mang theo giấy chứng nhận Giáo viên dạy thực hành lái xe, biên lai thu phí bảo trì đường bộ."
			}
		]
	},
	{
		id: 78,
		question: "Xe ô tô tập lái phải đảm bảo các điều kiện gì dưới đây?",
		options: [
			{
				text: `Gắn 02 biển "TẬP LÁI" trước và sau xe, có hệ thống phanh phụ được lắp đặt bảo đảm hiệu quả phanh, được bố trí bên ghế ngồi của giáo viên dạy thực hành lái xe.`
			},
			{
				text: "Xe tập lái loại tải thùng có mui che mưa, che nắng, ghế ngồi cho học viên, có Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường phương tiện giao thông cơ giới đường bộ còn hiệu lực."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 79,
		question:
			"Việc sát hạch cấp Giấy phép lái xe ô tô phải thực hiện ở đâu và như thế nào?",
		options: [
			{
				text: "Tại các cơ sở đào tạo lái xe có đủ điều kiện và phải bảo đảm công khai, minh bạch."
			},
			{
				text: "Tại sân tập lái của cơ sở đào tạo lái xe và phải đảm bảo công khai, minh bạch."
			},
			{
				text: "Tại các trung tâm sát hạch lái xe có đủ điều kiện hoạt động và phải bảo đảm công khai, minh bạch.",
				correct: true
			}
		]
	},
	{
		id: 80,
		question:
			"Khi điều khiển xe chạy trên đường, người lái xe phải mang theo các loại giấy tờ gì?",
		options: [
			{
				text: "Giấy chứng nhận tốt nghiệp khóa đào tạo của hạng xe đang điều khiển, đăng ký xe, giấy phép lưu hành xe."
			},
			{
				text: "Giấy phép lái xe phù hợp với loại xe đó; lệnh vận chuyển, đăng ký xe, giấy chứng nhận kiểm tra chất lượng an toàn kỹ thuật và bảo vệ môi trường của xe cơ giới sau khi cải tạo; giấy phép vận chuyển (nếu loại xe đó cần phải có)."
			},
			{
				text: "Giấy phép lái xe phù hợp với loại xe đó , đăng ký xe, giấy chứng nhận kiểm định kỹ thuật và bảo vệ môi trường, giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới và giấy phép vận chuyển (nếu loại xe đó cần phải có), các giấy tờ phải còn giá trị sử dụng.",
				correct: true
			}
		]
	},
	{
		id: 81,
		question:
			"Khi sử dụng Giấy phép lái xe đã khai báo mất để điều khiển phương tiện cơ giới đường bộ, ngoài việc bị thu hồi Giấy phép lái xe, chịu trách nhiệm trước pháp luật, người lái xe không được cấp Giấy phép lái xe trong thời gian bao nhiêu năm?",
		options: [
			{ text: "02 năm." },
			{ text: "03 năm." },
			{ text: "05 năm.", correct: true },
			{ text: "04 năm." }
		]
	},
	{
		id: 82,
		question:
			"Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Người tham gia giao thông ở các hướng phải dừng lại." },
			{
				text: "Người tham gia giao thông ở các hướng được đi theo chiều gậy chỉ của cảnh sát giao thông."
			},
			{
				text: "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển phải dừng lại."
			},
			{
				text: "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển được đi tất cả các hướng.",
				correct: true
			}
		],
		image: "600-082.webp"
	},
	{
		id: 83,
		question:
			"Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{
				text: "Người tham gia giao thông ở các hướng đối diện cảnh sát giao thông được đi, các hướng khác cần phải dừng lại."
			},
			{
				text: "Người tham gia giao thông được rẽ phải theo chiều mũi tên màu xanh ở bục cảnh sát giao thông."
			},
			{
				text: "Người tham gia giao thông ở các hướng đều phải dừng lại trừ các xe đã ở trong khu vực giao nhau.",
				correct: true
			},
			{
				text: "Người ở hướng đối diện cảnh sát giao thông phải dừng lại, các hướng khác được đi trong đó có bạn."
			}
		],
		image: "600-083.webp"
	},
	{
		id: 84,
		question:
			"Trên đường giao thông, khi hiệu lệnh của người điều khiển giao thông trái với hiệu lệnh của đèn hoặc biển báo hiệu thì người tham gia giao thông phải chấp hành theo hiệu lệnh nào?",
		options: [
			{ text: "Hiệu lệnh của người điều khiển giao thông.", correct: true },
			{ text: "Hiệu lệnh của đèn điều khiển giao thông." },
			{ text: "Hiệu lệnh của biển báo hiệu đường bộ." },
			{
				text: "Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn."
			}
		],
		isPenalty: true
	},
	{
		id: 85,
		question:
			"Tại nơi có biển báo hiệu cố định lại có báo hiệu tạm thời thì người tham gia giao thông phải chấp hành hiệu lệnh của báo hiệu nào?",
		options: [
			{ text: "Biển báo hiệu cố định." },
			{ text: "Báo hiệu tạm thời.", correct: true }
		]
	},
	{
		id: 86,
		question:
			"Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?",
		options: [
			{
				text: "Cho xe đi trên bất kỳ làn đường nào hoặc giữa 02 làn đường nếu không có xe đi phía trước; khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn."
			},
			{
				text: "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn phải có tín hiệu báo trước và phải bảo đảm an toàn.",
				correct: true
			},
			{
				text: "Phải cho xe đi trong một làn đường, khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn."
			}
		]
	},
	{
		id: 87,
		question:
			"Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
		options: [
			{
				text: "Xe thô sơ phải đi trên làn đường bên trái ngoài cùng; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải."
			},
			{
				text: "Xe thô sơ phải đi trên làn đường bên phải trong cùng; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
				correct: true
			},
			{
				text: "Xe thô sơ đi trên làn đường phù hợp không gây cản trở giao thông; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải."
			}
		]
	},
	{
		id: 88,
		question:
			"Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
		options: [
			{ text: "Phải báo hiệu bằng đèn hoặc còi." },
			{ text: "Chỉ được báo hiệu bằng còi." },
			{ text: "Phải báo hiệu bằng cả còi và đèn." },
			{ text: "Chỉ được báo hiệu bằng đèn.", correct: true }
		]
	},
	{
		id: 89,
		question:
			"Khi điều khiển xe chạy trên đường biết có xe sau xin vượt nếu đủ điều kiện an toàn người lái xe phải làm gì?",
		options: [
			{
				text: "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe sau vượt."
			},
			{
				text: "Người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe sau vượt.",
				correct: true
			},
			{
				text: "Cho xe tránh về bên trái mình và ra hiệu cho xe sau vượt; nếu có chướng ngại vật phía trước hoặc thiếu điều kiện an toàn chưa cho vượt được phải ra hiệu cho xe sau biết; cấm gây trở ngại cho xe xin vượt."
			}
		]
	},
	{
		id: 90,
		question:
			"Trong khu dân cư, ở nơi nào cho phép người lái xe, người điều khiển xe máy chuyên dùng được quay đầu xe?",
		options: [
			{
				text: "Ở nơi đường giao nhau và nơi có biển báo cho phép quay đầu xe.",
				correct: true
			},
			{ text: "Ở nơi có đường rộng để cho các loại xe chạy một chiều." },
			{ text: "Ở bất kỳ nơi nào." }
		]
	},
	{
		id: 91,
		question:
			"Người lái xe phải làm gì khi quay đầu xe trên cầu, đường ngầm hay khu vực đường bộ giao nhau cùng mức với đường sắt?",
		options: [
			{ text: "Không được quay đầu xe.", correct: true },
			{
				text: "Lợi dụng chỗ rộng và phải có người làm tín hiệu sau xe để bảo đảm an toàn."
			},
			{ text: "Lợi dụng chỗ rộng có thể quay đầu được để quay đầu xe cho an toàn." }
		],
		isPenalty: true
	},
	{
		id: 92,
		question:
			"Khi muốn chuyển hướng, người lái xe phải thực hiện như thế nào để đảm bảo an toàn giao thông?",
		options: [
			{ text: "Quan sát gương, ra tín hiệu, quan sát an toàn và chuyển hướng." },
			{
				text: "Quan sát gương, giảm tốc độ, ra tín hiệu chuyển hướng, quan sát an toàn và chuyển hướng.",
				correct: true
			},
			{ text: "Quan sát gương, tăng tốc độ, ra tín hiệu và chuyển hướng." }
		]
	},
	{
		id: 93,
		question: "Khi lùi xe, người lái xe phải làm gì để bảo đảm an toàn?",
		options: [
			{ text: "Quan sát phía trước và cho lùi xe ở tốc độ chậm." },
			{ text: "Lợi dụng nơi đường giao nhau đủ chiều rộng để lùi." },
			{
				text: "Phải quan sát phía sau, có tín hiệu cần thiết và chỉ khi nào thấy không nguy hiểm mới được lùi.",
				correct: true
			}
		]
	},
	{
		id: 94,
		question:
			"Khi bạn nhìn thấy đèn phía sau xe ô tô có màu sáng trắng, ô tô đó đang trong trạng thái như thế nào?",
		options: [
			{ text: "Đang phanh." },
			{ text: "Đang bật đèn sương mù." },
			{ text: "Đang chuẩn bị lùi hoặc đang lùi.", correct: true },
			{ text: "Đang bị hỏng động cơ." }
		]
	},
	{
		id: 95,
		question:
			"Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
		options: [
			{
				text: "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe kia đi."
			},
			{
				text: "Xe xuống dốc phải nhường đường cho xe đang lên dốc; xe nào có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật đi trước."
			},
			{
				text: "Xe lên dốc phải nhường đường cho xe xuống dốc; xe nào không có chướng ngại vật phía trước phải nhường đường cho xe có chướng ngại vật đi trước."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 96,
		question:
			"Bạn đang lái xe trên đường hẹp, xuống dốc và gặp một xe đang đi lên dốc, bạn cần làm gì?",
		options: [
			{ text: "Tiếp tục đi vì xe lên dốc phải nhường đường cho mình." },
			{ text: "Nhường đường cho xe lên dốc.", correct: true },
			{ text: "Chỉ nhường đường khi xe lên dốc nháy đèn." }
		]
	},
	{
		id: 97,
		question:
			"Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải nhường đường như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Nhường đường cho xe đi ở bên phải mình tới." },
			{ text: "Nhường đường cho xe đi ở bên trái mình tới." },
			{
				text: "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới.",
				correct: true
			}
		]
	},
	{
		id: 98,
		question:
			"Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Phải nhường đường cho xe đi đến từ bên phải.", correct: true },
			{ text: "Xe báo hiệu xin đường trước, xe đó được đi trước." },
			{ text: "Phải nhường đường cho xe đi đến từ bên trái." }
		]
	},
	{
		id: 99,
		question:
			"Trên đoạn đường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chung với đường sắt thì loại phương tiện nào được quyền ưu tiên đi trước?",
		options: [
			{ text: "Phương tiện nào bên phải không vướng." },
			{ text: "Phương tiện nào ra tín hiệu xin đường trước." },
			{ text: "Phương tiện giao thông đường sắt.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 100,
		question:
			"Tại nơi đường bộ giao nhau cùng mức với đường sắt chỉ có đèn tín hiệu hoặc chuông báo hiệu, khi đèn tín hiệu màu đỏ đã bật sáng hoặc có tiếng chuông báo hiệu, người tham gia giao thông phải dừng lại ngay và giữ khoảng cách tối thiểu bao nhiêu mét tính từ ray gần nhất?",
		options: [{ text: "5 mét.", correct: true }, { text: "3 mét." }, { text: "4 mét." }]
	},
	{
		id: 101,
		question: "Người lái xe phải làm gì khi điều khiển xe vào đường cao tốc?",
		options: [
			{
				text: "Phải có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường; khi thấy an toàn mới cho xe nhập vào dòng xe ở làn đường sát mép ngoài; nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi vào làn đường của đường cao tốc.",
				correct: true
			},
			{
				text: "Phải có tín hiệu xin vào và phải nhanh chóng vượt xe đang chạy trên đường để nhập vào dòng xe ở làn đường sát mép ngoài; nếu có làn đường tăng tốc thì phải cho xe chạy qua làn đường đó để vào làn đường của đường cao tốc."
			}
		],
		isPenalty: true
	},
	{
		id: 102,
		question:
			"Trên đường cao tốc, người lái xe phải dừng xe, đỗ xe như thế nào để đảm bảo an toàn giao thông?",
		options: [
			{
				text: "Không được dừng xe, đỗ xe hoặc chỉ được dừng xe, đỗ xe ở nơi đường rộng; nếu dừng, đỗ xe ở nơi đường hẹp phải sử dụng còi báo hiệu để người lái xe khác biết."
			},
			{
				text: "Chỉ được dừng xe, đỗ xe ở nơi quy định; trường hợp buộc phải dừng xe, đỗ xe không đúng nơi quy định thì người lái xe phải đưa xe ra khỏi phần đường xe chạy, nếu không thể được thì phải báo hiệu để người lái xe khác biết.",
				correct: true
			},
			{
				text: "Chỉ được dừng xe, đỗ xe ở nơi đường rộng; trường hợp dừng xe, đỗ xe tại nơi đường hẹp phải đặt các chướng ngại vật trên đường để yêu cầu người lái xe khác giảm tốc độ để bảo đảm an toàn."
			}
		]
	},
	{
		id: 103,
		question:
			"Những trường hợp nào ghi ở dưới đây không được đi vào đường cao tốc trừ người, phương tiện, thiết bị phục vụ cho việc quản lý, bảo trì đường cao tốc?",
		options: [
			{
				text: "Người đi bộ, xe thô sơ, xe gắn máy, xe mô tô và máy kéo; xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn 70km/h.",
				correct: true
			},
			{ text: "Xe mô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 70km/h." },
			{ text: "Người đi bộ, xe thô sơ, xe gắn máy và xe ô tô." }
		]
	},
	{
		id: 104,
		question:
			"Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
		options: [
			{
				text: "Xe cơ giới, xe máy chuyên dùng phải bật đèn; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; chỉ được dừng xe, đỗ xe ở nơi quy định.",
				correct: true
			},
			{
				text: "Xe cơ giới phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết."
			},
			{
				text: "Xe máy chuyên dùng phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết."
			}
		]
	},
	{
		id: 105,
		question:
			"Xe quá tải trọng, quá khổ giới hạn tham gia giao thông cần tuân thủ quy định nào ghi ở dưới đây?",
		options: [
			{
				text: "Phải được cơ quan quản lý đường bộ có thẩm quyền cấp phép và phải thực hiện các biện pháp bắt buộc để bảo vệ đường bộ, bảo đảm an toàn giao thông.",
				correct: true
			},
			{
				text: "Chủ phương tiện và lái xe chỉ cần thực hiện biện pháp để hạn chế việc gây hư hại đường bộ."
			},
			{ text: "Được tham gia giao thông trên đường rộng." },
			{ text: "Chỉ được tham gia giao thông vào ban đêm." }
		]
	},
	{
		id: 106,
		question:
			"Việc nối giữa xe kéo với xe được kéo trong trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì phải dùng cách nào?",
		options: [
			{ text: "Dùng dây cáp có độ dài 10 mét." },
			{ text: "Dùng dây cáp có độ dài 5 mét." },
			{ text: "Dùng thanh nối cứng.", correct: true }
		]
	},
	{
		id: 107,
		question:
			"Xe kéo rơ moóc khi tham gia giao thông phải tuân thủ điều kiện nào ghi ở dưới đây?",
		options: [
			{
				text: "Phải có tổng tổng trọng lượng lớn hơn tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho rơ moóc.",
				correct: true
			},
			{
				text: "Phải có tổng tổng trọng lượng tương đương tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho xe kéo rơ moóc."
			},
			{ text: "Phải được lắp phanh phụ theo quy định để đảm bảo an toàn." }
		]
	},
	{
		id: 108,
		question: "Xe ô tô kéo xe khác thế nào là đúng quy tắc giao thông?",
		options: [
			{
				text: "Được kéo theo một xe ô tô hoặc một xe máy chyên dùng khác khi xe này không tự chạy được và phải đảm bảo an toàn; xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng.",
				correct: true
			},
			{
				text: "Được kéo theo một xe ô tô và xe máy chuyên dùng khác khi xe này không tự chạy được và phải đảm bảo an toàn; xe được kéo phải có người ngồi trên xe để kịp thời phát tín hiệu các trường hợp mất an toàn."
			},
			{
				text: "Được kéo theo một xe ô tô và xe máy chuyên dùng khác khi xe này không tự chạy được và hệ thống phanh bị hỏng, xe kéo nhau phải nối bằng dây cáp có độ dài phù hợp."
			}
		]
	},
	{
		id: 109,
		question:
			"Người ngồi trên xe mô tô 2 bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách khi nào?",
		options: [
			{ text: "Khi tham gia giao thông đường bộ.", correct: true },
			{ text: "Chỉ khi đi trên đường chuyên dùng; đường cao tốc." },
			{ text: "Khi tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ." }
		],
		isPenalty: true
	},
	{
		id: 110,
		question:
			"Người điều khiển xe mô tô hai bánh, xe gắn máy được phép chở tối đa 2 người trong những trường hợp nào?",
		options: [
			{ text: "Chở người bệnh đi cấp cứu; trẻ em dưới 14 tuổi." },
			{ text: "Áp giải người có hành vi vi phạm pháp luật." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 111,
		question:
			"Người điều khiển xe mô tô hai bánh, xe gắn máy không được thực hiện những hành vi nào dưới đây?",
		options: [
			{
				text: "Đi vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính), đi xe dàn hàng ngang.",
				correct: true
			},
			{
				text: "Chở 02 người; trong đó, có người bệnh đi cấp cứu hoặc trẻ em dưới 14 tuổi hoặc áp giải người có hành vi vi phạm pháp luật."
			},
			{
				text: "Điều khiển phương tiện tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ."
			}
		]
	},
	{
		id: 112,
		question:
			"Người điều khiển xe mô tô hai bánh, xe gắn máy có được đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính) hay không?",
		options: [
			{ text: "Được phép nhưng phải đảm bảo an toàn." },
			{ text: "Không được phép.", correct: true },
			{ text: "Được phép tùy từng hoàn cảnh, điều kiện cụ thể." }
		],
		isPenalty: true
	},
	{
		id: 113,
		question:
			"Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép (có thể dừng lại một cách an toàn) trong trường hợp nào dưới đây?",
		options: [
			{
				text: "Khi có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; khi chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế; khi qua nơi đường giao nhau, nơi đường bộ giao nhau với đường sắt; đường vòng; đường có địa hình quanh co, đèo dốc."
			},
			{
				text: "Khi qua cầu, cống hẹp; khi lên gần đỉnh dốc, khi xuống dốc, khi qua trường học, khu đông dân cư, khu vực đang thi công trên đường bộ; hiện trường xảy ra tai nạn giao thông."
			},
			{ text: "Khi điều khiển xe vượt xe khác trên đường quốc lộ, đường cao tốc." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 114,
		question:
			"Khi gặp một đoàn xe, một đoàn xe tang hay gặp một đoàn người có tổ chức theo đội ngũ, người lái xe phải xử lý như thế nào?",
		options: [
			{ text: "Từ từ đi cắt qua đoàn người, đoàn xe." },
			{ text: "Không được cắt ngang qua đoàn người, đoàn xe.", correct: true },
			{ text: "Báo hiệu từ từ cho xe đi cắt qua để bảo đảm an toàn." }
		],
		isPenalty: true
	},
	{
		id: 115,
		question:
			"Tại ngã ba hoặc ngã tư không có đảo an toàn, người lái xe phải nhường đường như thế nào là đúng trong các trường hợp dưới đây?",
		options: [
			{
				text: "Nhường đường cho người đi bộ đang đi trên phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ưu tiên, đường chính từ bất kỳ hướng nào tới; nhường đường cho xe ưu tiên, xe đi từ bên phải đến.",
				correct: true
			},
			{
				text: "Nhường đường cho người đi bộ đang đứng chờ đi qua phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ngược chiều, đường nhánh từ bất kỳ hướng nào tới; nhường đường cho xe đi từ bên trái đến."
			},
			{ text: "Không phải nhường đường." }
		]
	},
	{
		id: 116,
		question:
			"Khi điều khiển xe cơ giới, người lái xe phải bật đèn tín hiệu báo rẽ trong trường hợp nào dưới đây?",
		options: [
			{ text: "Khi cho xe chạy thẳng." },
			{ text: "Trước khi thay đổi làn đường.", correct: true },
			{ text: "Sau khi thay đổi làn đường." }
		]
	},
	{
		id: 117,
		question:
			"Trên đoạn đường hai chiều không có giải phân cách giữa, người lái xe không được vượt xe khác trong các trường hợp nào dưới đây?",
		options: [
			{ text: "Xe bị vượt bất ngờ tăng tốc độ và cố tình không nhường đường." },
			{ text: "Xe bị vượt giảm tốc độ và nhường đường." },
			{ text: "Phát hiện có xe đi ngược chiều." },
			{ text: "Cả ý 1 và ý 3.", correct: true }
		]
	},
	{
		id: 118,
		question:
			"Khi lái xe trên đường vắng mà cảm thấy buồn ngủ, người lái xe nên chọn cách xử lý như thế nào cho phù hợp?",
		options: [
			{ text: "Tăng tốc độ kết hợp với nghe nhạc và đi tiếp." },
			{
				text: "Quan sát, dừng xe tại nơi quy định; nghỉ cho đến khi hết buồn ngủ và đi tiếp.",
				correct: true
			},
			{ text: "Sử dụng một ít rượu và bia để hết buồn ngủ và đi tiếp." }
		],
		isPenalty: true
	},
	{
		id: 119,
		question:
			"Trên đường cao tốc, người lái xe xử lý như thế nào khi đã vượt quá lối ra của đường định rẽ?",
		options: [
			{ text: "Quay xe, chạy trên lề đường bên phải và rẽ khỏi đường cao tốc." },
			{ text: "Lùi xe sát lề đường bên phải và rẽ khỏi đường cao tốc." },
			{ text: "Tiếp tục chạy đến lối ra tiếp theo.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 120,
		question: "Người lái xe mô tô xử lý như thế nào khi cho xe mô tô phía sau vượt?",
		options: [
			{
				text: "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
				correct: true
			},
			{
				text: "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt."
			},
			{
				text: "Nếu đủ điều kiện an toàn, người lái xe phải tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua."
			}
		]
	},
	{
		id: 121,
		question:
			"Khi xe ô tô bị hỏng tại vị trí giao nhau giữa đường bộ và đường sắt, người lái xe xử lý như thế nào?",
		options: [
			{
				text: "Nhanh chóng đặt báo hiệu trên đường sắt cách tối thiểu 500 mét về hai phía để báo cho người điều khiển phương tiện đường sắt và tìm cách báo cho người quản lý đường sắt, nhà ga nơi gần nhất, đồng thời phải bằng mọi biện pháp nhanh chóng đưa ô tô hỏng ra khỏi phạm vi an toàn đường sắt.",
				correct: true
			},
			{
				text: "Nhanh chóng đặt biển cảnh báo nguy hiểm tại vị trí xe ô tô bị hỏng để đoàn tàu dừng lại."
			},
			{
				text: "Liên hệ ngay với đơn vị cứu hộ để đưa ô tô hỏng ra khỏi phạm vi an toàn đường sắt."
			}
		]
	},
	{
		id: 122,
		question:
			"Trong các trường hợp dưới đây, để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
		options: [
			{
				text: "Phải đội mũ bảo hiểm đạt chuẩn, có cài quai đúng quy cách, mặc quần áo gọn gàng; không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
				correct: true
			},
			{
				text: "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải đảm bảo an toàn."
			},
			{
				text: "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa."
			}
		]
	},
	{
		id: 123,
		question: "Đường bộ trong khu vực đông dân cư gồm những đoạn đường nào dưới đây?",
		options: [
			{
				text: "Là đoạn đường nằm trong khu công nghiệp có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới."
			},
			{
				text: "Là đoạn đường bộ nằm trong khu vực nội thành phố, nội thị xã, nội thị trấn và những đoạn đường có đông dân cư sinh sống sát dọc theo đường, có các hoạt động ảnh hưởng đến an toàn giao thông; được xác định bằng biển báo hiệu là đường khu đông dân cư.",
				correct: true
			},
			{
				text: "Là đoạn đường bộ nằm ngoài khu vực nội thành phố, nội thị xã có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới."
			}
		]
	},
	{
		id: 124,
		question:
			"Tốc độ tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự trên đường bộ (trừ đường cao tốc) không được vượt qua bao nhiêu km/h?",
		options: [
			{ text: "50 km/h." },
			{ text: "40 km/h.", correct: true },
			{ text: "60 km/h." }
		]
	},
	{
		id: 125,
		question:
			"Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
		options: [
			{ text: "60 km/h.", correct: true },
			{ text: "50 km/h." },
			{ text: "40 km/h." }
		]
	},
	{
		id: 126,
		question:
			"Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều không có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
		options: [
			{ text: "60 km/h." },
			{ text: "50 km/h.", correct: true },
			{ text: "40 km/h." }
		]
	},
	{
		id: 127,
		question:
			"Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
		options: [
			{ text: "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.", correct: true },
			{ text: "Xe gắn máy, xe máy chuyên dùng." },
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 128,
		question:
			"Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn cơ giới trở lên, loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
		options: [
			{ text: "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.", correct: true },
			{ text: "Xe gắn máy, xe máy chuyên dùng." },
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 129,
		question:
			"Trên đường bộ (trừ đường cao tốc) ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa, loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 90 km/h?",
		options: [
			{
				text: "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn."
			},
			{
				text: "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3,5 tấn.",
				correct: true
			},
			{ text: "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chuyên dùng, xe mô tô." }
		]
	},
	{
		id: 130,
		question:
			"Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 80 km/h?",
		options: [
			{ text: "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chuyên dùng, xe mô tô." },
			{
				text: "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
				correct: true
			},
			{ text: "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy." },
			{
				text: "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3,5 tấn."
			}
		]
	},
	{
		id: 131,
		question:
			"Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 70 km/h?",
		options: [
			{
				text: "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông).",
				correct: true
			},
			{ text: "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy." },
			{
				text: "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn."
			},
			{
				text: "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3,5 tấn."
			}
		]
	},
	{
		id: 132,
		question:
			"Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
		options: [
			{
				text: "Ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.",
				correct: true
			},
			{
				text: "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn."
			},
			{
				text: "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3,5 tấn."
			}
		]
	},
	{
		id: 133,
		question:
			"Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 80 km/h?",
		options: [
			{ text: "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy." },
			{
				text: "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn."
			},
			{
				text: "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3,5 tấn.",
				correct: true
			}
		]
	},
	{
		id: 134,
		question:
			"Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 70 km/h?",
		options: [
			{ text: "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy." },
			{
				text: "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
				correct: true
			},
			{
				text: "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3,5 tấn."
			}
		]
	},
	{
		id: 135,
		question:
			"Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
		options: [
			{ text: "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy." },
			{
				text: "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn."
			},
			{
				text: "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông).",
				correct: true
			}
		]
	},
	{
		id: 136,
		question:
			"Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
		options: [
			{ text: "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy." },
			{
				text: "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn."
			},
			{
				text: "Ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.",
				correct: true
			}
		]
	},
	{
		id: 137,
		question: `Khi tham gia giao thông trên đoạn đường không có biển báo "Cự ly tối thiểu giữa hai xe", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 60 km/h đến 80 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?`,
		options: [{ text: "35 m." }, { text: "55 m.", correct: true }, { text: "70 m." }]
	},
	{
		id: 138,
		question: `Khi tham gia giao thông trên đoạn đường không có biển báo "Cự ly tối thiểu giữa hai xe", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 80 km/h đến 100 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?`,
		options: [{ text: "35 m." }, { text: "55 m." }, { text: "70 m.", correct: true }]
	},
	{
		id: 139,
		question: `Khi tham gia giao thông trên đoạn đường không có biển báo "Cự ly tối thiểu giữa hai xe", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 100 km/h đến 120 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?`,
		options: [{ text: "55 m." }, { text: "70 m." }, { text: "100 m.", correct: true }]
	},
	{
		id: 140,
		question:
			"Khi điều khiển chạy với tốc độ dưới 60 km/h, để đảm bảo khoảng cách an toàn giữa hai xe, người lái xe phải điều khiển xe như thế nào?",
		options: [
			{ text: "Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước mình." },
			{
				text: "Đảm bảo khoảng cách an toàn theo mật độ phương tiện, tình hình giao thông thực tế."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 141,
		question:
			"Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
		options: [
			{ text: "Gặp biển báo nguy hiểm trên đường.", correct: true },
			{ text: "Gặp biển chỉ dẫn trên đường." },
			{ text: "Gặp biển báo hết mọi lệnh cấm." },
			{ text: "Gặp biển báo hết hạn chế tốc độ tối đa cho phép." }
		]
	},
	{
		id: 142,
		question:
			"Người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
		options: [
			{ text: "Khi vượt xe khác." },
			{ text: "Khi vượt xe khác tại đoạn đường được phép vượt." },
			{ text: "Khi xe sau xin vượt và đảm bảo an toàn.", correct: true },
			{ text: "Khi xe sau có tín hiệu vượt bên phải." }
		]
	},
	{
		id: 143,
		question:
			"Tại các điểm giao cắt giữa đường bộ và đường sắt, quyền ưu tiên thuộc về loại phương tiện nào dưới đây?",
		options: [
			{ text: "Xe cứu hỏa." },
			{ text: "Xe cứu thương." },
			{ text: "Phương tiện giao thông đường sắt.", correct: true },
			{ text: "Ô tô, mô tô và xe máy chuyên dùng." }
		],
		isPenalty: true
	},
	{
		id: 144,
		question: `Các phương tiện tham gia giao thông đường bộ (kể cả những xe có quyền ưu tiên) đều phải dừng lại bên phải đường của mình và trước vạch "dừng xe" tại các điểm giao cắt giữa đường bộ và đường sắt khi có báo hiệu dừng nào dưới đây?`,
		options: [
			{ text: "Hiệu lệnh của nhân viên gác chắn." },
			{ text: "Đèn đỏ sáng nháy, cờ đỏ, biển đỏ." },
			{ text: "Còi, chuông kêu, chắn đã đóng." },
			{ text: "Tất cả các ý trên.", correct: true }
		]
	},
	{
		id: 145,
		question:
			"Trên đoạn đường bộ giao nhau đồng mức với đường sắt, người không có nhiệm vụ có được tự ý mở chắn đường ngang khi chắn đã đóng hay không?",
		options: [
			{ text: "Không được phép.", correct: true },
			{ text: "Được phép nhưng phải đảm bảo an toàn." },
			{ text: "Được phép tùy từng hoàn cảnh và điều kiện cụ thể." }
		],
		isPenalty: true
	},
	{
		id: 146,
		question:
			"Tác dụng của mũ bảo hiểm đối với người ngồi trên xe mô tô hai bánh trong trường hợp xảy ra tai nạn giao thông là gì?",
		options: [
			{ text: "Để làm đẹp." },
			{ text: "Đẻ tránh mưa nắng." },
			{ text: "Để giảm thiểu chấn thương vùng đầu.", correct: true },
			{ text: "Để các loại phương tiện khác dễ quan sát." }
		]
	},
	{
		id: 147,
		question:
			"Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
		options: [
			{ text: "Thay đổi tốc độ của xe trên đường bộ." },
			{ text: "Thay đổi tay số của xe trên đường bộ." },
			{ text: "Lạng lách, đánh võng trên đường bộ.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 148,
		question:
			"Người lái xe phải nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường cho các xe nào nêu dưới đây?",
		options: [
			{
				text: "Xe chữa cháy, xe quân sự, xe công an, xe cứu thương, xe hộ đê sau khi thực hiện nhiệm vụ khẩn cấp, không có tín hiệu còi, cờ, đèn theo quy định của pháp luật."
			},
			{
				text: "Xe chữa cháy, xe quân sự, xe công an, xe cứu thương, xe hộ đê đi làm nhiệm vụ khẩn cấp có tín hiệu còi, cờ, đèn theo quy định của pháp luật.",
				correct: true
			},
			{
				text: "Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn."
			}
		]
	},
	{
		id: 149,
		question:
			"Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải xử lý như thế nào là đúng quy tắc giao thông?",
		options: [
			{ text: "Tăng tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên." },
			{ text: "Giảm tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên." },
			{
				text: "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
				correct: true
			}
		]
	},
	{
		id: 150,
		question:
			"Khi xe ô tô, mô tô đến gần vị trí giao nhau giữa đường bộ và đường sắt không có rào chắn, khi đèn tín hiệu màu đỏ đã bật sáng hoặc khi có tiếng chuông báo hiệu, người lái xe xử lý như thế nào?",
		options: [
			{ text: "Giảm tốc độ cho xe vượt qua đường sắt." },
			{ text: "Nhanh chóng cho xe vượt qua đường sắt trước khi tàu hỏa tới." },
			{ text: "Giảm tốc độ cho xe vượt qua đường sắt trước khi tàu hỏa tới." },
			{
				text: "Cho xe dừng ngay lại và giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất.",
				correct: true
			}
		],
		isPenalty: true
	},
	{
		id: 151,
		question:
			"Khi điều khiển xe trên đường vòng, khuất tầm nhìn người lái xe cần phải làm gì để đảm bảo an toàn?",
		options: [
			{
				text: "Đi đúng làn đường, đúng tốc độ quy định, không được vượt xe khác.",
				correct: true
			},
			{
				text: "Đi sang làn đường của xe ngược chiều để mở rộng tầm nhìn và vượt xe khác"
			},
			{
				text: "Cho xe đi sát bên phải làn đường, bật tín hiệu báo hiệu để vượt bên phải xe khác."
			}
		]
	},
	{
		id: 152,
		question:
			"Người lái xe phải xử lý như thế nào khi quan sát phía trước thấy người đi bộ đang sang đường tại nơi có vạch đường dành cho người đi bộ để đảm bảo an toàn?",
		options: [
			{ text: "Giảm tốc độ, đi từ từ để vượt qua trước người đi bộ." },
			{
				text: "Giảm tốc độ, có thể dừng lại nếu cần thiết trước vạch dừng xe để nhường đường cho người đi bộ qua đường.",
				correct: true
			},
			{ text: "Tăng tốc độ để vượt qua trước người đi bộ." }
		]
	},
	{
		id: 153,
		question:
			"Khi muốn lùi xe nhưng không quan sát được phía sau, cần làm gì để đảm bảo an toàn?",
		options: [
			{ text: "Phải lùi thật chậm." },
			{ text: "Có thể được lùi xe nhưng phải mở cửa xe." },
			{ text: "Không được lùi xe.", correct: true },
			{ text: "Bấm còi 3 lần liên tiếp trước khi lùi." }
		],
		isPenalty: true
	},
	{
		id: 154,
		question:
			"Người điều khiển phương tiện tham gia giao thông đường bộ phải giảm tốc độ để có thể dừng lại một cách an toàn trong các trường hợp nào dưới đây?",
		options: [
			{
				text: "Khi có người đi bộ, xe lăn của người khuyết tật qua đường; đến gần bến xe buýt, điểm dừng đỗ xe có khách đang lên, xuống xe."
			},
			{
				text: "Khi điều khiển phương tiện đi qua khu vực trạm kiểm soát tải trọng xe, trạm cảnh sát giao thông, trạm giao dịch thanh toán đối với các phương tiện sử dụng đường bộ."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		],
		isPenalty: true
	},
	{
		id: 155,
		question:
			"Tại những đoạn đường không bố trí biển báo hạn chế tốc độ, không bố trí biển báo khoảng cách an toàn tối thiểu giữa hai xe, người điều khiển phương tiện tham gia giao thông phải thực hiện quy định nào dưới đây để đảm bảo an toàn giao thông?",
		options: [
			{
				text: "Người điều khiển phương tiện tham gia giao thông không hạn chế tốc độ và khoảng cách an toàn tối thiểu giữa hai xe."
			},
			{
				text: "Người điều khiển phương tiện tham gia giao thông không hạn chế tốc độ và khoảng cách an toàn tối thiểu giữa hai xe vào ban đêm."
			},
			{
				text: "Người điều khiển phương tiện tham gia giao thông phải nghiêm chỉnh chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu giữa hai xe.",
				correct: true
			}
		]
	},
	{
		id: 156,
		question:
			"Khi tham gia giao thông trên đường cao tốc, người lái xe, người điều khiển xe máy chuyên dùng phải thực hiện như thế nào là đúng quy tắc giao thông?",
		options: [
			{
				text: "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe.",
				correct: true
			},
			{
				text: "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe chỉ vào ban ngày."
			},
			{
				text: "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe chỉ vào ban đêm."
			}
		]
	},
	{
		id: 157,
		question:
			"Theo Luật giao thông đường bộ, tín hiệu đèn giao thông gồm 3 màu nào dưới đây?",
		options: [
			{ text: "Đỏ - Vàng - Xanh.", correct: true },
			{ text: "Cam - Vàng - Xanh." },
			{ text: "Vàng - Xanh dương - Xanh lá." },
			{ text: "Đỏ - Cam - Xanh." }
		]
	},
	{
		id: 158,
		question:
			"Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện tham gia giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
		options: [
			{
				text: "Phải cho xe dừng lại trước vạch dừng, trường hợp đã đi quá vạch dừng hoặc đã quá gần vạch dừng nếu dừng lại thấy nguy hiểm thì được đi tiếp."
			},
			{
				text: "Trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát nhường đường cho người đi bộ qua đường."
			},
			{ text: "Nhanh chóng tăng tốc độ, vượt qua nút giao và chú ý đảm bảo an toàn." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 159,
		question:
			"Để báo hiệu cho xe phía trước biết xe mô tô của bạn muốn vượt, bạn phải có tín hiệu như thế nào dưới đây?",
		options: [
			{ text: "Ra tín hiệu bằng tay rồi cho xe vượt qua." },
			{ text: "Tăng ga mạnh để gây sự chú ý rồi cho xe vượt qua." },
			{ text: "Bạn phải có tín hiệu bằng đèn hoặc còi.", correct: true }
		]
	},
	{
		id: 160,
		question:
			"Khi tham gia giao thông trên đường cao tốc, người điều khiển phương tiện cơ giới có được dừng, đỗ xe trên phần đường xe chạy hay không?",
		options: [
			{ text: "Được dừng, đỗ." },
			{ text: "Không được dừng, đỗ.", correct: true },
			{ text: "Được dừng, đỗ nhưng phải đảm bảo an toàn." }
		]
	},
	{
		id: 161,
		question:
			"Khi xe gặp sự cố kỹ thuật trên đường cao tốc, bạn phải xử lý theo thứ tự như thế nào dưới đây để đảm bảo an toàn giao thông?",
		options: [
			{
				text: "Bật đèn tín hiệu khẩn cấp, dừng xe ngay lập tức và đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác."
			},
			{
				text: "Bật tín hiệu khẩn cấp, lập tức đưa xe vào làn đường xe chạy bên phải trong cùng, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác."
			},
			{
				text: "Bật đèn tín hiệu khẩn cấp, khi đủ điều kiện an toàn nhanh chóng đưa xe vào làn dừng đỗ khẩn cấp, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
				correct: true
			}
		],
		isPenalty: true
	},
	{
		id: 162,
		question:
			"Khi người lái xe ô tô dừng, đỗ sát theo lề đường, hè phố phía bên phải theo chiều đi của mình, bánh xe gần nhất không được cách lề đường, hè phố quá bao nhiêu mét trong các trường hợp dưới đây và không gây cản trở, nguy hiểm cho giao thông?",
		options: [
			{ text: "0,25 mét.", correct: true },
			{ text: "0,3 mét." },
			{ text: "0,4 mét." },
			{ text: "0,5 mét." }
		]
	},
	{
		id: 163,
		question:
			"Khi dừng, đỗ xe trên đường phố hẹp, người lái xe ô tô phải dừng, đỗ xe ở vị trí cách xe ô tô đang đỗ bên kia đường khoảng cách tối thiểu là bao nhiêu mét trong các trường hợp dưới đây để đảm bảo an toàn giao thông?",
		options: [
			{ text: "5 mét." },
			{ text: "10 mét." },
			{ text: "15 mét." },
			{ text: "20 mét.", correct: true }
		]
	},
	{
		id: 164,
		question:
			"Trên đường bộ, người lái xe ô tô có được phép dừng xe, đỗ xe song song với một xe khác đang dừng, đỗ hay không?",
		options: [
			{ text: "Được phép." },
			{ text: "Không được phép.", correct: true },
			{ text: "Chỉ được phép dừng, đỗ khi đường vắng." }
		]
	},
	{
		id: 165,
		question:
			"Người điều khiển xe mô tô phải giảm tốc độ và hết sức thận trọng khi qua những đoạn đường nào dưới đây?",
		options: [
			{ text: "Đường ướt, đường có sỏi cát trên nền đường." },
			{ text: "Đường hẹp có nhiều điểm giao cắt từ hai phía." },
			{ text: "Đường đèo dốc, vòng liên tục." },
			{ text: "Tất cả các ý nêu trên.", correct: true }
		]
	},
	{
		id: 166,
		question:
			"Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây để đảm bảo an toàn giao thông?",
		options: [
			{ text: " Tăng tốc độ để nhanh chóng vượt qua bến đỗ." },
			{
				text: "Giảm tốc độ đến mức an toàn có thể và quan sát người qua đường và từ từ vượt qua xe buýt.",
				correct: true
			},
			{ text: "Yêu cầu phải dừng lại phía sau xe buýt chờ xe rời bến mới đi tiếp." }
		]
	}
]
