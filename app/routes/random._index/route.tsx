import { TRouteHandle } from "~/data/constants"

export const handle: TRouteHandle = {
	layoutId: "random"
};

export default function RandomIndexRoute() {
	return (
		<div className="bg-orange-300 p-4 h-full">
			<h2 className="text-2xl font-bold">Random Index</h2>
		</div>
	)
}