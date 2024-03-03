/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { NumberInput as NumInput } from "@mantine/core"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import cn from "./NumberInput.module.css"
// import { SetStateActionWithReset } from '@types/react';

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function NumberInput({
	value,
	min,
	max,
	label,
	placeholder,
	onChange
}: {
	value: number
	min?: number
	max?: number
	label?: string
	placeholder?: string
	onChange: (e: string | number) => void
}) {
	return (
		<NumInput
			variant="filled"
			label={label}
			placeholder={placeholder}
			value={value}
			min={min}
			max={max}
			onChange={onChange}
			classNames={cn}
			className="w-full"
		/>
	)
}
