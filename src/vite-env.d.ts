/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DIRECTUS_URL: string
  readonly VITE_ENABLE_DIRECTUS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}