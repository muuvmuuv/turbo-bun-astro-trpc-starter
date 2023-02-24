// eslint-disable-next-line unicorn/prefer-module, no-undef
module.exports = {
  semi: false,
  proseWrap: "always",
  printWidth: 120,
  pluginSearchDirs: ["."],
  overrides: [
    {
      files: "*.md",
      options: {
        printWidth: 90,
      },
    },
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
