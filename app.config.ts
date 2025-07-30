import { z } from 'zod'

const envSchema = z.object({
  MX_SPACE_TOKEN: z.string(),
  TG_BOT_TOKEN: z.string(),
  GH_WEBHOOK_SECRET: z.string(),
  MX_SPACE_API_ENDPOINT: z.string().url(),
  MX_SPACE_GATEWAY_ENDPOINT: z.string().url(),
  MX_SPACE_WEBHOOK_SECRET: z.string(),
})

console.log('env validating...')
const env = envSchema.parse(process.env)

export const appConfig = {
  mxSpace: {
    apiEndpoint: env.MX_SPACE_API_ENDPOINT,
    gateway: env.MX_SPACE_GATEWAY_ENDPOINT,
    // gateway: 'http://127.0.0.1:2333/system',
    token: env.MX_SPACE_TOKEN,

    webhookSecret: env.MX_SPACE_WEBHOOK_SECRET,

    watchGroupIds: [
      // -1001752013670,
      -1001819189781
    ],
    watchChannelId: -1001819189781,
  },

  ownerId: 1857614828,

  bot: {
    token: env.TG_BOT_TOKEN,
  },

  githubHook: {
    secret: env.GH_WEBHOOK_SECRET,
    watchGroupIds: [-1001819189781],
  },
  bilibili: {
    live: {
      id: 23706226,
    },
    watchGroupIds: [-1001819189781],
  },
}
