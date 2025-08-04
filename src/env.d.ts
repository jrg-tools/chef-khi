/// <reference types="astro/client" />
/// <reference types="astro-clerk-auth/env" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly AWS_ACCESS_KEY_ID: string;
  readonly AWS_SECRET_ACCESS_KEY: string;
  readonly DATABASE_SYNC_URL: string;
  readonly DATABASE_TOKEN: string;
  readonly DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
