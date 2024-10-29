import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return new Promise((resolve) => resolve('hashed_password'))
  },
}))

const salt = 12
const makeSut = (): BcryptAdapter => new BcryptAdapter(salt)

describe('BcryptAdapter', () => {
  it('Should call bcrypt with correct values', async () => {
    const sut = makeSut()
    const bcryptSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt('password')
    expect(bcryptSpy).toHaveBeenCalledWith('password', salt)
  })

  it('Should return a hash on successful encryption', async () => {
    const sut = makeSut()
    console.log('oi')

    const hash = await sut.encrypt('password')
    expect(hash).toBe('hashed_password')
  })

  it('Shoudl throw if bcrypt throws', async () => {
    const sut = makeSut()
    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => {
      throw new Error()
    })

    await expect(sut.encrypt('password')).rejects.toThrow()
  })
})
