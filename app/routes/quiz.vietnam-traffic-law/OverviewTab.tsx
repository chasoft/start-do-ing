/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import remarkGfm from "remark-gfm"
import Markdown from "react-markdown"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const intro = `
## Tài liệu 600 câu hỏi B2

Là tài liệu học lý thuyết lái xe B2 gồm 600 câu hỏi trắc nghiệm được Tổng Cục Đường Bộ Việt Nam ban hành. Tài liệu này được biên soạn theo đúng chương trình đào tạo lái xe ô tô hiện hành, bao gồm các nội dung:

- Luật giao thông đường bộ
- Kỹ thuật lái xe
- Văn hóa giao thông
- Cấu tạo và sửa chữa xe
- Kỹ năng xử lý tình huống giao thông

Mỗi câu hỏi trong tài liệu 600 câu hỏi lý thuyết lái xe B2 chỉ có một đáp án đúng. Tài liệu 600 câu B2 là tài liệu quan trọng và cần thiết cho các bạn thi bằng lái xe ô tô hạng **B1, B2, C,...** Việc ôn tập kỹ tài liệu này sẽ giúp bạn nắm vững kiến thức lý thuyết ô tô cần thiết để thi đậu phần thi **lý thuyết B2**.

600 câu hỏi lý thuyết thi bằng lái xe B2 được chia làm **8 chương**, với mỗi chương sẽ tập trung ôn luyện những nội dung câu hỏi khác nhau bao gồm:

- **Chương 1**: [Khái niệm và quy tắc giao thông đường bộ](/quiz/vietnam-traffic-law?tab=learn&chapter=1)
- **Chương 2**: [Nghiệp vụ vận tải](/quiz/vietnam-traffic-law?tab=learn&chapter=2)
- **Chương 3**: [Văn hóa giao thông và đạo đức người lái xe](/quiz/vietnam-traffic-law?tab=learn&chapter=3)
- **Chương 4**: [Kỹ thuật lái xe](/quiz/vietnam-traffic-law?tab=learn&chapter=4)
- **Chương 5**: [Cấu tạo và sửa chữa](/quiz/vietnam-traffic-law?tab=learn&chapter=5)
- **Chương 6**: [Hệ thống biển báo hiệu đường bộ](/quiz/vietnam-traffic-law?tab=learn&chapter=6)
- **Chương 7**: [Sa hình và kỹ năng xử lý tình huống giao thông](/quiz/vietnam-traffic-law?tab=learn&chapter=7)
- **Chương 8**: [Tình huống mất an toàn giao thông nghiêm trọng (câu hỏi điểm liệt)](/quiz/vietnam-traffic-law?tab=learn&chapter=8)

## Phần thi thử lý thuyết B2

Đề thi lý thuyết bằng lái xe B2 gồm 35 câu, thời gian làm bài 22 phút. Mỗi câu có 1 đáp án đúng. bạn phải làm đúng ít nhất **32/35** câu và không làm sai câu điểm liệt thì mới đạt yêu cầu. Mỗi đề thi thử lý thuyết B2 cũng sẽ bao gồm:

- 1 câu hỏi phần Khái niệm
- 7 câu hỏi về Quy tắc giao thông
- 1 câu hỏi Nghiệp vụ vận tải
- 1 câu về Tốc độ khoảng cách
- 1 câu hỏi về Văn hóa và Đạo đức người lái xe
- 2 câu hỏi về Kỹ thuật lái xe
- 1 câu hỏi về Cấu tạo sửa chữa
- 10 câu hỏi Biển báo
- 10 câu hỏi Sa hình kèm theo 
- 1 câu hỏi Điểm liệt _(tình huống gây mất an toàn giao thông nghiêm trọng)_
`

export function OverviewTab() {
	return (
		<div className="">
			<Markdown
				className="prose prose-sm max-w-3xl text-slate-900 sm:prose-base"
				remarkPlugins={[remarkGfm]}
			>
				{intro}
			</Markdown>
		</div>
	)
}
