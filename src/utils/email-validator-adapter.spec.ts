import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true
  },
}))

describe('EmailValidatorAdapter', () => {
  it('Should return false if validation returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    expect(sut.isValid('invalid@email.com')).toBe(false)
  })

  it('Should return true if validation returns true', () => {
    const sut = new EmailValidatorAdapter()
    expect(sut.isValid('valid@email.com')).toBe(true)
  })
})
