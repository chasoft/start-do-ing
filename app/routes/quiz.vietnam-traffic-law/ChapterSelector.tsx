import { useState } from "react"
import { Input, InputBase, Combobox, useCombobox, Button } from "@mantine/core"

const groceries = ["🍎 Apples", "🍌 Bananas", "🥦 Broccoli", "🥕 Carrots", "🍫 Chocolate"]

function ComboboxSelector() {
	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption()
	})

	const [value, setValue] = useState<string | null>(null)

	const options = groceries.map((item) => (
		<Combobox.Option value={item} key={item}>
			{item}
		</Combobox.Option>
	))

	return (
		<Combobox
			store={combobox}
			onOptionSubmit={(val) => {
				setValue(val)
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
					{value || <Input.Placeholder>Pick value</Input.Placeholder>}
				</InputBase>
			</Combobox.Target>

			<Combobox.Dropdown>
				<Combobox.Options>{options}</Combobox.Options>
			</Combobox.Dropdown>
		</Combobox>
	)
}

export function ChapterSelector() {
	return (
		<>
			<div className="flex gap-2 sm:hidden">
				<Button>Previous</Button>
				<ComboboxSelector />
				<Button>Next</Button>
			</div>
			<Button.Group className="hidden sm:block">
				{groceries.map((item, idx) => (
					<Button key={idx}>{item}</Button>
				))}
			</Button.Group>
		</>
	)
}
