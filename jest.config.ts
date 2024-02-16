import { compilerOptions } from "./tsconfig.json"
import { pathsToModuleNameMapper } from "ts-jest"
import type { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
	testEnvironment: "node",
	roots: ["<rootDir>"],
	preset: "ts-jest",
	modulePaths: [compilerOptions.baseUrl],
	moduleFileExtensions: ["ts", "tsx", "js"],
	moduleNameMapper: {
		...pathsToModuleNameMapper(compilerOptions.paths, {
			prefix: "<rootDir>/"
		})
	},
	testPathIgnorePatterns: ["/node_modules/"],
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest"
	}
}

export default jestConfig
