/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { ChapterSelector } from "./ChapterSelector"
import { QuestionData, allChapters } from "./data"
import { useSearchParams } from "@remix-run/react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

function Question({ data, className }: { data: QuestionData, className?: string }) {
	return (
		<div key={data.id} className={clsx("prose max-w-3xl text-slate-900 prose-sm sm:prose-base", className)}>
			<div>{data.question}</div>
			<ol>
				{data.options.map((o, idx) => {
					return <li key={idx}>{o.text}</li>
				})}
			</ol>
		</div>
	)
}

function Questions({ list }: { list: Array<QuestionData> }) {
	return (
		<>
			{
				list.map((item, idx) => {
					return <Question key={idx} data={item} />
				})
			}
		</>
	)
}

export function LearnTab() {
	const [searchParams] = useSearchParams()
	const selectedChapter = Number(searchParams.get("chapter") ?? 0)
	const questionList = allChapters[selectedChapter]
	return (
		<div className="">
			<ChapterSelector />
			<Questions list={questionList} />
		</div>
	)
}
