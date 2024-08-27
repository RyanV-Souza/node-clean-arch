import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return new Promise((resolve) => resolve('hashed_password'))
  },
}))

describe('BcryptAdapter', () => {
  it('Should call bcrypt with correct values', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const bcryptSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt('password')
    expect(bcryptSpy).toHaveBeenCalledWith('password', salt)
  })

  it('Should return a hash on successful encryption', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)

    const hash = await sut.encrypt('password')
    expect(hash).toBe('hashed_password')
  })
})
