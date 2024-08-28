import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

console.log(env)

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default

    app.listen(env.port, () => {
      console.log('Server is running on port ' + env.port)
    })
  })
  .catch((error) => {
    console.error(error)
  })
