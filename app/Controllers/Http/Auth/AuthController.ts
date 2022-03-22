import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthService from './AuthService';
import AuthValidator from './AuthValidator';

export default class AuthController {
  private authService: AuthService
  private authValidator: AuthValidator
  constructor() {
    this.authService = new AuthService()
    this.authValidator = new AuthValidator()
  }

  public async register(ctx: HttpContextContract) {
    try {
      const payload = await this.authValidator.validateRegisterSchema(ctx.request)
      await this.authService.register(payload);
      return ctx.response.status(200).send({ msg: 'Registered successfully' })
    } catch (error) {
      let status = 400;
      let msg = { msg: 'Registration unsuccessfull!' }

      if (error.code === 'E_VALIDATION_FAILURE') {
        status = 422
        msg = error.messages
      }

      return ctx.response.status(status).send(msg)
    }
  }

  public async login(ctx: HttpContextContract) {
    try {
      await this.authValidator.validateLoginSchema(ctx.request)
      await this.authService.login(ctx)
      return ctx.response.status(200).send({msg: 'Logged in successfully'})
    } catch (error) {
      let status = 400;
      let msg = { msg: 'Invalid credentials!' }

      if (error.code === 'E_VALIDATION_FAILURE') {
        status = 422
        msg = error.messages
      }

      return ctx.response.status(status).send(msg)
    }
  }

  public async getUser({ auth, response }: HttpContextContract) {
    try {
      return await auth.use('web').authenticate()
    } catch (error) {
      return response.status(400).send({ msg: "You are not login!" })
    }
  }

  public async logout({auth, response}: HttpContextContract) {
    await auth.logout()
    return response.status(200).send({msg: 'Logged out successfully'})
  }

}
