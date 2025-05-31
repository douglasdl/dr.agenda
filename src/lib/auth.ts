import { db } from '@/db'
import * as schema from '@/db/schema'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true,
    schema,
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    // apple: {
    //   clientId: process.env.APPLE_CLIENT_ID as string,
    //   clientSecret: process.env.APPLE_CLIENT_SECRET as string,
    //   // Optional
    //   appBundleIdentifier: process.env.APPLE_APP_BUNDLE_IDENTIFIER as string,
    // },
  },
  // Add appleid.apple.com to trustedOrigins for Sign In with Apple flows
  // trustedOrigins: ['https://appleid.apple.com'],
  user: {
    modelName: 'usersTable',
  },
  session: {
    modelName: 'sessionsTable',
  },
  account: {
    modelName: 'accountsTable',
  },
  verification: {
    modelName: 'verificationsTable',
  },
  emailAndPassword: {
    enabled: true,
  },
})
