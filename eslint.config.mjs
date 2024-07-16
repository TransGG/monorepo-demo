import pluginJs from "@eslint/js";
import eslintPluginSvelte from "eslint-plugin-svelte";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    files: ["apps/**/*.*", "packages/**/*.*"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
