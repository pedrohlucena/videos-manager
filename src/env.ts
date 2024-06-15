import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    GOOGLE_CLOUD_YOUTUBE_V3_API_KEY: z.string(),
  },

  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },

  runtimeEnv: {
    GOOGLE_CLOUD_YOUTUBE_V3_API_KEY:
      process.env.GOOGLE_CLOUD_YOUTUBE_V3_API_KEY,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
})
