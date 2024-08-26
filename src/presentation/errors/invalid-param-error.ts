export class InvalidParamError extends Error {
  constructor(public readonly param: string) {
    super(`Invalid param: ${param}`)

    this.name = 'InvalidParamError'
  }
}
