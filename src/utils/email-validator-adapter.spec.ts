import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true
  },
}))

const makeSut = () => new EmailValidatorAdapter()

describe('EmailValidatorAdapter', () => {
  it('Should return false if validation returns false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    expect(sut.isValid('invalid@email.com')).toBe(false)
  })

  it('Should return true if validation returns true', () => {
    const sut = makeSut()
    expect(sut.isValid('valid@email.com')).toBe(true)
  })

  it('Should call validator with correct email', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('valid@email.com')
    expect(isEmailSpy).toHaveBeenCalledWith('valid@email.com')
  })
})
