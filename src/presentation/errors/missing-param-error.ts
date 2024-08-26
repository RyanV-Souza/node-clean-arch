export class MissingParamError extends Error {
  constructor(public readonly param: string) {
    super(`Missing param: ${param}`)

    this.name = 'MissingParamError'
  }
}
