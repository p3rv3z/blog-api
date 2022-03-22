import AuthQuery from './AuthQuery';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RecordNotFoundException from 'App/Exceptions/RecordNotFoundException';

export default class AuthService {
  private authQuery: AuthQuery

  constructor() {
    this.authQuery = new AuthQuery
  }

  public async isValidUser(request: HttpContextContract['request']) {
    const user = await this.authQuery.getUserByField('email', request.input('email'))

    if (!user) {
      throw new RecordNotFoundException('Email Not Found');
    }
  }

  public async register(payload) {
    delete payload.password_confirmation
    return await this.authQuery.register(payload)
  }


  public async login({ request, auth }: HttpContextContract) {
    await this.isValidUser(request)
    const { email, password } = request.all()
    await auth.use('web').attempt(email, password)
  }
}
