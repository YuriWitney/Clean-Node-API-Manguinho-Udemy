export class MissingParamError extends Error {
  constructor (missingParam: string) {
    super('MissingParamError')
  }
}
