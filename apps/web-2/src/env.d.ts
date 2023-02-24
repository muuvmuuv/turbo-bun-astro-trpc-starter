/// <reference types="astro/client" />

// eslint-disable-next-line unicorn/prevent-abbreviations
interface ImportMetaEnv {
  readonly PUBLIC_RPC_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
