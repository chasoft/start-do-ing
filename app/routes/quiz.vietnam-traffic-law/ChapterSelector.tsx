import { Input, InputBase, Combobox, useCombobox, Button } from "@mantine/core"
import { ChapterId, chapters, chapterQuantity, chapterIds, firstChapter } from "./data"
import { useTabsSearchParams } from "~/utils"

function ComboboxSelector() {
	const [selectedChapter, onChapterChange] = useTabsSearchParams({
		keys: chapterIds,
		defaultKey: firstChapter,
		paramKey: "chapter"
	})

	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption()
	})

	const options = chapters.map((chapter) => (
		<Combobox.Option value={chapter.id.toString()} key={chapter.id}>
			{chapter.title}
		</Combobox.Option>
	))

	return (
		<Combobox
			store={combobox}
			onOptionSubmit={(val) => {
				const selectedChapter = Number(val)
				onChapterChange(selectedChapter.toString())
				combobox.closeDropdown()
			}}
			classNames={{
				group: "grow"
			}}
		>
			<Combobox.Target>
				<InputBase
					component="button"
					type="button"
					pointer
					rightSection={<Combobox.Chevron />}
					rightSectionPointerEvents="none"
					onClick={() => combobox.toggleDropdown()}
				>
					{chapters[Number(selectedChapter) - 1].title || (
						<Input.Placeholder>Pick value</Input.Placeholder>
					)}
				</InputBase>
			</Combobox.Target>

			<Combobox.Dropdown>
				<Combobox.Options>{options}</Combobox.Options>
			</Combobox.Dropdown>
		</Combobox>
	)
}

export function ChapterSelector() {
	const [selectedChapter, onChapterChange] = useTabsSearchParams({
		keys: chapterIds,
		defaultKey: firstChapter,
		paramKey: "chapter"
	})

	const onChapterChanged = (chapter: ChapterId) => {
		onChapterChange(chapter.toString())
	}
	const onNextChapter = () => {
		const nextChapter = (Number(selectedChapter) % chapterQuantity) + 1
		onChapterChange(nextChapter.toString())
	}
	const onPrevChapter = () => {
		const prevChapter =
			selectedChapter === firstChapter ? chapterQuantity : Number(selectedChapter) - 1
		onChapterChange(prevChapter.toString())
	}
	console.log({ selectedChapter, firstChapter })
	return (
		<>
			<div className="flex gap-2 sm:hidden">
				<Button variant="outline" onClick={onPrevChapter}>
					Previous
				</Button>
				<ComboboxSelector />
				<Button variant="outline" onClick={onNextChapter}>
					Next
				</Button>
			</div>
			<Button.Group className="hidden sm:block">
				{chapters.map((chapter) => (
					<Button
						key={chapter.id}
						variant={selectedChapter == chapter.id ? "" : "outline"}
						color={chapter.color}
						onClick={() => onChapterChanged(chapter.id)}
					>
						{`Chương ${chapter.id}`}
					</Button>
				))}
			</Button.Group>
		</>
	)
}
