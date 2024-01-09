export async function loader() {
	return "RandomIndexRoute"
}

export default function RandomIndexRoute() {
	return (
		<div className="bg-orange-300 p-4">
			<h2 className="text-2xl font-bold">Random Index</h2>
		</div>
	)
}