import { MongoHelper as sut } from './mongo-helper'
describe('MongoHelper', () => {
  beforeAll(async () => {
    await sut.connect(globalThis.__MONGO_URI__)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  it('should reconnect if mongodb is down', async () => {
    let accountCollection = await sut.getCollection('accounts')

    expect(accountCollection).toBeDefined()
    await sut.disconnect()

    accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeDefined()
  })
})
