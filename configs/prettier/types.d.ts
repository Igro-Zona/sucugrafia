import type { Config as PrettierConfig, Options } from "prettier";

export type Settings = Options;
export type Plugins = PrettierConfig["plugins"];
export type Overrides = PrettierConfig["overrides"];
export type Config = PrettierConfig;
