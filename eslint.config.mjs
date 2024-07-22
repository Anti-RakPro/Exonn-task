import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];



// import { Linter } from "eslint";
// import reactPlugin from "eslint-plugin-react";
// import typescriptPlugin from "@typescript-eslint/eslint-plugin";
// import prettierPlugin from "eslint-plugin-prettier";
// import airbnbConfig from "eslint-config-airbnb";
// import typescriptParser from "@typescript-eslint/parser";
//
// const config = new Linter.Config({
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "airbnb",
//     "plugin:@typescript-eslint/recommended",
//     "prettier",
//     "plugin:prettier/recommended",
//   ],
//   parser: typescriptParser,
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: {
//     react: reactPlugin,
//     "@typescript-eslint": typescriptPlugin,
//     prettier: prettierPlugin,
//   },
//   rules: {
//     "prettier/prettier": "error",
//     "react/jsx-filename-extension": [
//       1,
//       { extensions: [".tsx"] },
//     ],
//     "import/extensions": [
//       "error",
//       "ignorePackages",
//       {
//         ts: "never",
//         tsx: "never",
//       },
//     ],
//   },
//   settings: {
//     "import/resolver": {
//       node: {
//         extensions: [".js", ".jsx", ".ts", ".tsx"],
//       },
//     },
//   },
// });
//
// export default config;