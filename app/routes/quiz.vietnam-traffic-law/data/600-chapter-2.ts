/**
 * Chapter 2: Nghiệp vụ vận tải
 * 						16 questions (04 penalty questions)
 */

import { QuestionData } from "."

export const chapter2: Array<QuestionData> = [
	{
		id: 167,
		question: "Người lái xe khách, xe buýt cần thực hiện những nhiệm vụ gì dưới đây?",
		options: [
			{
				text: "Luôn có ý thức về tính tổ chức, kỷ luật, thực hiện nghiêm biểu đồ xe chạy được phân công; thực hiện đúng hành trình, lịch trình, đón trả khách đúng nơi quy định; giúp đỡ hành khách đi xe, đặc biệt là những người khuyết tật, người già, trẻ em và phụ nữ có thai, có con nhỏ.",
				correct: true
			},
			{
				text: "Luôn có ý thức về tính tổ chức, kỷ luật, thực hiện linh hoạt biểu đồ xe chạy được phân công để tiết kiệm chi phí; thực hiện đúng hành trình, lịch trình khi có khách đi xe, đón trả khách ở những nơi thuận tiện cho hành khách đi xe."
			}
		]
	},
	{
		id: 168,
		question: "Trong hoạt động vận tải đường bộ, các hành vi nào dưới đây bị nghiêm cấm?",
		options: [
			{ text: "Vận chuyển hàng nguy hiểm nhưng có giấy phép." },
			{
				text: "Vận chuyển động vật hoang dã nhưng thực hiện đủ các quy định có liên quan."
			},
			{
				text: "Vận chuyển hàng hóa cấm lưu thông; vận chuyển trái phép hàng nguy hiểm, động vật hoang dã.",
				correct: true
			}
		]
	},
	{
		id: 169,
		question: "Trong hoạt động vận tải khách, những hành vi nào dưới đây bị nghiêm cấm?",
		options: [
			{ text: "Cạnh tranh nhau nhằm tăng lợi nhuận." },
			{ text: "Giảm giá để thu hút khách." },
			{
				text: "Đe dọa, xúc phạm, tranh giành, lôi kéo hành khách; bắt ép hành khách sử dụng dịch vụ ngoài ý muốn; xuống khách nhằm trốn tránh phát hiện xe chở quá số người quy định.",
				correct: true
			},
			{ text: "Tất cả các ý trên." }
		]
	},
	{
		id: 170,
		question:
			"Thời gian làm việc của người lái xe ô tô không được lái xe liên tục quá bao nhiêu giờ trong trường hợp nào dưới đây?",
		options: [
			{ text: "Không quá 4 giờ.", correct: true },
			{ text: "Không quá 6 giờ." },
			{ text: "Không quá 8 giờ." },
			{ text: "Liên tục tùy thuộc vào sức khỏe và khả năng của người lái xe." }
		]
	},
	{
		id: 171,
		question:
			"Thời gian làm việc trong một ngày của người lái xe ô tô không được vượt quá bao nhiêu giờ trong trường hợp dưới đây?",
		options: [
			{ text: "Không quá 8 giờ." },
			{ text: "Không quá 10 giờ.", correct: true },
			{ text: "Không quá 12 giờ." },
			{ text: "Không hạn chế tùy thuộc vào sức khỏe và khả năng của người lái xe." }
		]
	},
	{
		id: 172,
		question: "Người lái xe khách phải chấp hành những quy định nào dưới đây?",
		options: [
			{
				text: "Đón, trả khách đúng nơi quy định, không trở hành khách trên mui, trong khoang hành lý hoặc để hành khách đu bám bên ngoài xe."
			},
			{
				text: "Không chở hàng nguy hiểm, hàng có mùi hôi thối hoặc động vật, hàng hóa khác có ảnh hưởng đến sức khỏe của hành khách."
			},
			{
				text: "Chở hành khách trên mui; để hàng hóa trong khoang chở khách, chở quá số người theo quy định."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 173,
		question: "Lái xe kinh doanh vận tải khách phải có trách nhiệm gì sau đây?",
		options: [
			{
				text: "Kiểm tra các điều kiện bảo đảm an toàn của xe trước khi khởi hành; kiểm tra việc sắp xếp, chằng buộc hành lý, hàng hóa bảo đảm an toàn."
			},
			{ text: "Đóng cửa lên xuống của xe trước và trong khi xe chạy." },
			{ text: "Đón trả khách tại vị trí do khách hàng yêu cầu." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 174,
		question: "Người kinh doanh vận tải hành khách có những quyền hạn nào dưới đây?",
		options: [
			{
				text: "Tự ý thay đổi vị trí đón, trả khách theo hợp đồng vận chuyển hoặc đón thêm người ngoài danh sách hành khách đã ký."
			},
			{
				text: "Từ chối vận chuyển trước khi phương tiện rời bến, rời vị trí đón trả khách theo hợp đồng vận chuyển những người đã có vé hoặc người trong danh sách hợp đồng có hành vi gây rối trật tự công cộng, gây cản trở công việc kinh doanh vận tải, ảnh hưởng đến sức khỏe, tài sản của người khác, gian lận vé hoặc hành khách đang bị dịch bệnh nguy hiểm.",
				correct: true
			},
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 175,
		question:
			"Hành khách có các quyền gì khi đi trên xe ô tô vận tải khách theo tuyến cố định?",
		options: [
			{
				text: "Được vận chuyển theo đúng hợp đồng vận tải, cam kết của người kinh doanh về chất lượng vận tải; được miễn cước hành lý với trọng lượng không quá 20 kg và với kích thước phù hợp với thiết kế của xe; được từ chối chuyến đi trước khi phương tiện khởi hành và được trả lại tiền vé theo quy định của Bộ Giao thông vận tải.",
				correct: true
			},
			{
				text: "Được vận chuyển theo hợp đồng vận tải, cam kết của người kinh doanh về vận tải; được miễn cước hành lý với trọng lượng không quá 50 kg và với kích thước không quá cồng kềnh; được từ chối chuyến đi trước khi phương tiện khởi hành và được trả lại tiền vé."
			}
		]
	},
	{
		id: 176,
		question: "Hành khách có các nghĩa vụ gì khi đi trên xe ô tô vận tải hành khách?",
		options: [
			{
				text: "Mua vé và trả cước, phí vận tải hành lý mang theo quá mức quy định; có mặt tại nơi xuất phát đúng thời gian thỏa thuận; chấp hành quy định về vận chuyển; thực hiện đúng hướng dẫn của lái xe, nhân viên phục vụ trên xe về các quy định bảo đảm trật tự, an toàn giao thông.",
				correct: true
			},
			{
				text: "Được mang theo hành lý, hàng hóa mà pháp luật cấm lưu thông khi đã trả cước, phí vận tải."
			},
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 177,
		question: "Người kinh doanh vận tải hàng hóa có các quyền gì ở dưới đây?",
		options: [
			{
				text: "Yêu cầu người thuê vận tải cung cấp thông tin cần thiết về hàng hóa để ghi vào giấy vận chuyển và có quyền kiểm tra tính xác thực của các thông tin đó.",
				correct: true
			},
			{
				text: "Yêu cầu xếp hàng hóa vận chuyển trên xe vượt quá chiều cao quy định nhưng phải được chằng buộc chắc chắn."
			},
			{ text: "Yêu cầu xếp hàng hóa vượt tải trọng 10%." }
		]
	},
	{
		id: 178,
		question: "Người kinh doanh vận tải hàng hóa có các nghĩa vụ gì dưới đây?",
		options: [
			{
				text: "Cung cấp phương tiện và thực hiện thời gian, địa điểm giao hàng hóa cho người nhận hàng theo điều kiện của người kinh doanh vận tải; chịu trách nhiệm về hậu quả mà người làm công, người đại diện gây ra do thực hiện yêu cầu của người kinh doanh vận tải phù hợp với quy định của pháp luật."
			},
			{
				text: "Bồi thường thiệt hại cho người thuê vận tải do mất mát, hư hỏng hàng hóa xảy ra trong quá trình vận tải từ lúc nhận hàng đến lúc giao hàng; bồi thường thiệt hại do người làm công, người đại diện gây ra trong khi thực hiện công việc được người kinh doanh vận tải giao; chịu trách nhiệm về hậu quả mà người làm công, người đại diện gây ra do thực hiện yêu cầu của người kinh doanh vận tải trái với quy định của pháp luật.",
				correct: true
			},
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 179,
		question: "Người thuê vận tải hàng hóa có các quyền hạn gì dưới đây?",
		options: [
			{
				text: "Từ chối xếp hàng lên phương tiện mà phương tiện đó không đúng thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải giao hàng đúng thời gian, địa điểm đã thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải bồi thường thiệt hại theo quy định của pháp luật.",
				correct: true
			},
			{
				text: "Từ chối xếp hàng hóa lên phương tiện khi thấy phương tiện đó không phù hợp với yêu cầu; yêu cầu người kinh doanh vận tải giao hàng trước thời hạn đã thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải bồi thường thiệt hại khi người kinh doanh vận tải gây thiệt hại."
			}
		]
	},
	{
		id: 180,
		question: "Người thuê vận tải hàng hóa có các nghĩa vụ gì dưới đây?",
		options: [
			{
				text: "Chuẩn bị đầy đủ các giấy tờ hợp pháp về hàng hóa trước khi giao hàng hóa cho người kinh doanh vận tải; đóng gói hàng hóa đúng quy cách, ghi ký hiệu, mã hiệu hàng hóa đầy đủ, rõ ràng; giao hàng hóa cho người kinh doanh vận tải đúng thời gian, địa điểm và nội dung khác ghi trong giấy gửi hàng.",
				correct: true
			},
			{
				text: "Chuẩn bị đầy đủ các giấy tờ hợp pháp về phương tiện vận chuyển hàng hóa và giao cho người lái xe; xếp hàng hóa lên phương tiện vận chuyển đảm bảo an toàn; giao hàng hóa cho người nhận hàng đúng thời gian, địa điểm."
			},
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 181,
		question: "Người nhận hàng có các quyền gì dưới đây?",
		options: [
			{
				text: "Nhận và kiểm tra hàng hóa nhận được theo giấy vận chuyển hoặc chứng từ tương đương khác; yêu cầu người kinh doanh vận tải thanh toán chi phí phát sinh do giao hàng hóa chậm.",
				correct: true
			},
			{
				text: "Yêu cầu hoặc thông báo cho người thuê vận tải để yêu cầu người lái xe bồi thường thiệt hại do mất mát, hư hỏng hàng hóa; nhận hàng hóa không theo giấy vận chuyển hoặc chứng từ tương đương khác."
			},
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 182,
		question: "Người nhận hàng có các nghĩa vụ gì dưới đây?",
		options: [
			{ text: "Nhận hàng hóa đúng thời gian, địa điểm đã thỏa thuận." },
			{
				text: "Xuất trình giấy vận chuyển và giấy tờ tùy thân cho người kinh doanh vận tải trước khi nhận hàng hóa; thanh toán chi phí phát sinh do nhận hàng chậm."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 183,
		question: "Hàng siêu trường, siêu trọng được hiểu như thế nào là đúng?",
		options: [
			{ text: "Là hàng có kích thước vượt quá kích thước và trọng lượng của xe." },
			{
				text: "Là hàng có kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng có thể tháo rời."
			},
			{
				text: "Là hàng có kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng không thể tháo rời ra được.",
				correct: true
			}
		]
	},
	{
		id: 184,
		question: "Việc vận chuyển động vật sống phải tuân theo những quy định nào dưới đây?",
		options: [
			{
				text: "Tùy theo loại động vật sống, người kinh doanh vận tải yêu cầu người thuê vận tải áp tải để chăm sóc trong quá trình vận tải."
			},
			{
				text: "Người thuê vận tải chịu trách nhiệm về việc xếp dỡ động vật sống theo hướng dẫn của người kinh doanh vận tải; trường hợp người thuê vận tải không thực hiện được thì phải trả cước, phí xếp, dỡ cho người kinh doanh vận tải."
			},
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 185,
		question: "Xe vận chuyển hàng nguy hiểm phải chấp hành những quy định nào dưới đây?",
		options: [
			{
				text: "Phải có giấy phép do cơ quan có thẩm quyền cấp, xe vận chuyển hàng nguy hiểm không được dừng, đỗ nơi đông người, những nơi dễ xảy ra nguy hiểm.",
				correct: true
			},
			{
				text: "Phải được chuyên chở trên xe chuyên dùng để vận chuyển hàng nguy hiểm; xe vận chuyển hàng nguy hiểm phải chạy liên tục không được dừng, đỗ trong quá trình vận chuyển."
			},
			{ text: "Cả ý 1 và ý 2." }
		]
	},
	{
		id: 186,
		question:
			"Trong đô thị, người lái xe buýt, xe chở hàng phải thực hiện những quy định nào dưới đây?",
		options: [
			{
				text: "Người lái xe buýt phải chạy đúng tuyến, đúng lịch trình và dừng đỗ đúng nơi quy định; người lái xe chở hàng phải hoạt động đúng tuyến, phạm vi và thời gian quy định đối với từng loại xe.",
				correct: true
			},
			{
				text: "Người lái xe buýt, xe chở hàng đón, trả khách, hàng hóa theo thỏa thuận giữa hành khách, chủ hàng và người lái xe."
			}
		]
	},
	{
		id: 187,
		question:
			"Việc vận chuyển hàng hóa bằng xe ô tô phải chấp hành các quy định nào dưới đây?",
		options: [
			{
				text: "Hàng hóa vận chuyển trên xe phải được sắp xếp gọn gàng và chằng buộc chắc chắn."
			},
			{ text: "Khi vận chuyển hàng rời phải che đậy, không để rơi vãi." },
			{ text: "Cả ý 1 và ý 2.", correct: true }
		]
	},
	{
		id: 188,
		question: "Những ký hiệu hàng hóa dưới đây, ký hiệu nào chống mưa?",
		options: [
			{ text: "Hình 1." },
			{ text: "Hình 2.", correct: true },
			{ text: "Hình 3." }
		],
		image: "600-188.webp"
	},
	{
		id: 189,
		question:
			"Ký hiệu chuyên dùng nào biểu hiện hàng chuyên chở phải tránh ánh nắng mặt trời?",
		options: [{ text: "Hình 1.", correct: true }, { text: "Hình 2." }],
		image: "600-189.webp"
	},
	{
		id: 190,
		question: "Hình nào dưới đây biểu hiện hàng chuyên chở dễ vỡ phải cẩn thận?",
		options: [{ text: "Hình 1.", correct: true }, { text: "Hình 2." }],
		image: "600-190.webp"
	},
	{
		id: 191,
		question: "Hình nào dưới đây đòi hỏi hàng phải xếp theo hướng thẳng đứng?",
		options: [
			{ text: "Hình 1." },
			{ text: "Hình 2." },
			{ text: "Hình 3.", correct: true }
		],
		image: "600-191.webp"
	},
	{
		id: 192,
		question: "Hình nào dưới đây biểu hiện hàng chuyên chở là chất lỏng?",
		options: [{ text: "Hình 1." }, { text: "Hình 2.", correct: true }],
		image: "600-192.webp"
	}
]
