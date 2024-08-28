import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Signup routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(globalThis.__MONGO_URI__)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accounts = await MongoHelper.getCollection('accounts')

    await accounts.deleteMany({})
  })

  it('Should return an account on success', async () => {
    const response = await request(app).post('/api/signup').send({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
      passwordConfirmation: '123456',
    })

    expect(response.status).toBe(200)
  })
})
