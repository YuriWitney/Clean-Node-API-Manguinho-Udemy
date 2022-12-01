import { badRequest } from '../../helpers/http-helper'
import { HttpRequest } from '../../protocols'
import { LoginController } from './login'

describe('Login Controller', () => {
  it('Should return 400 if no email is provided', async () => {
    const sut = new LoginController()
    const httpRequest: HttpRequest = {
      body: {
        password: 'any_password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse).toBe(badRequest())
  })
})
