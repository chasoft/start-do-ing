import { useMatches } from "@remix-run/react";

function Block({ className, children }: { className?: string, children?: React.ReactNode }) {
	return (
		<div className={`${className ?? ""} cursor-pointer rounded-lg bg-blue-200 transition-all hover:bg-blue-300`}>
			<div className="p-4">
				{children}
			</div>
		</div>
	)
}

export function HomeGrid({ children }: { children?: React.ReactNode }) {
	const matches = useMatches();
	return (
		<div className="grid grid-cols-5 gap-4">
			<Block className="col-span-3">
				{JSON.stringify(matches)}
			</Block>
			{/* <Block className="aspect-h-2 aspect-w-2" />
			<Block className="aspect-h-2 aspect-w-2" /> */}
			<Block className="aspect-h-2 aspect-w-2" />
			<Block className="aspect-h-2 aspect-w-2" />
			<Block />
			<div className="col-span-3 grid grid-cols-subgrid gap-4">
				<Block className="col-start-1 col-span-3 bg-blue-700">
					{children}
				</Block>
			</div>
			<Block className="aspect-h-2 aspect-w-2" />
		</div>
	)
}