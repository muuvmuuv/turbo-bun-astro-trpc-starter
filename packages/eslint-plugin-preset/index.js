/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "plugin:sonarjs/recommended", "plugin:unicorn/recommended", "turbo"],
  plugins: ["simple-import-sort"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^\\u0000", "^node:"], ["^@?\\w"], ["^", "^src"], ["^\\."]],
      },
    ],
    "simple-import-sort/exports": "error",
    "no-constant-condition": "error",
    "no-unused-expressions": "error",
    "no-unreachable": "error",
    "no-cond-assign": "error",
    "no-sequences": "error",
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["tsdoc", "@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/strict"],
      rules: {
        "tsdoc/syntax": "error",
      },
    },
    {
      files: ["*.svelte"],
      plugins: ["tsdoc", "svelte3"],
      processor: "svelte3/svelte3",
      settings: {
        "svelte3/typescript": () => require("typescript"),
      },
      extends: ["plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/strict"],
      env: {
        browser: true,
      },
      rules: {
        "tsdoc/syntax": "error",
      },
    },
    {
      files: ["*.astro"],
      plugins: ["tsdoc"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/strict",
        "plugin:astro/recommended",
        "plugin:astro/jsx-a11y-strict",
      ],
      env: {
        browser: true,
      },
      rules: {
        "tsdoc/syntax": "error",
      },
    },
  ],
}
