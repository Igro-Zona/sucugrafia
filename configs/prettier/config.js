// @ts-check

import settings from "./settings.js";
import overrides from "./overrides.js";

/** @type {import("./types.js").Config} */
const config = {
	...settings,
	overrides: overrides,
};
export default config;
