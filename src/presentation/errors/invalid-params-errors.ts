export class InvalidParamError extends Error {
  constructor (invalidParam: string) {
    super(`Ivalid Param: ${invalidParam}`)
    this.name = 'InvalidParamError'
  }
}
