import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account'
describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(globalThis.__MONGO_URI__)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  const makeSut = () => new AccountMongoRepository()

  it('Should return an account on success', async () => {
    const sut = makeSut()

    const account = await sut.add({
      name: 'test',
      email: 'test@test.com',
      password: 'test',
    })

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('test')
    expect(account.email).toBe('test@test.com')
    expect(account.password).toBe('test')
  })
})
