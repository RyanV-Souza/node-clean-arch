import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidatorAdapter', () => {
  it('Should return false if validation returns false', () => {
    const sut = new EmailValidatorAdapter()
    expect(sut.isValid('invalid')).toBe(false)
  })
})
