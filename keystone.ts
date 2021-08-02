import 'dotenv/config'
import { createAuth } from '@keystone-next/auth'
import { config, createSchema } from '@keystone-next/keystone/schema'
import { User } from './schemas/User'
import { Installment } from './schemas/Installment'
import { Question } from './schemas/Question'
import { QuestionImage } from './schemas/QuestionImage'
import { withItemData, statelessSessions } from '@keystone-next/keystone/session'

const databaseUrl = process.env.DATABASE_URL
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365,
  secret: process.env.COOKIE_SECRET
} 
const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password']
    // TODO: Add initial roles
  }
})

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true
      }
    },
    db: {
      adapter: 'mongoose',
      url: databaseUrl,
      async onConnect(keystone) {
        console.log('Connected to the database!')
      },
    },
    lists: createSchema({
      User,
      Installment,
      Question,
      QuestionImage
    }),
    ui: {
      isAccessAllowed: ({ session }) => {
        console.log(session)
        return !!session?.data
      }
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id`
    })
  })
)