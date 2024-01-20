import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { getBlockMetaData } from "~/utils";
import { type MetaFunction } from "@remix-run/cloudflare";
import type { CustomRouteHandle, LayoutId } from "~/utils/types";
import { PasswordGeneratorFeature } from "./feature";
import { Link } from "@remix-run/react";
import { PASSWORD_GENERATOR } from "./metadata";

const layoutId: LayoutId = "password-generator"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(layoutId);
	return [
		{ title },
		{ name: "description", content: description },
	];
};

export const handle: CustomRouteHandle = {
	layoutId: layoutId,
	breadcrumb: () => <Link to={PASSWORD_GENERATOR.to}>{PASSWORD_GENERATOR.title}</Link>,
};

export default function PasswordGeneratorRoute() {
	return (
		<>
			<PasswordGeneratorFeature layoutId={layoutId} />
		</>
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
