import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthValidator {

  public async validateRegisterSchema(request: HttpContextContract['request']) {
    const registerUserSchema = schema.create({
      full_name: schema.string({ escape: true, trim: true }),

      user_type: schema.string(),

      email: schema.string({}, [
        rules.email({ sanitize: true, ignoreMaxLength: false }),
        rules.unique({ table: 'users', column: 'email' }),
      ]),

      password: schema.string({ escape: true, trim: true }, [
        rules.minLength(6),
        rules.maxLength(16),
        rules.confirmed()
      ]),
    })

    const msg = {
      'full_name.required': 'Full name is required',

      'user_type.required': 'User type is required',

      'email.required': 'Email is required',
      'email.email': 'Invalid email address',
      'email.unique': 'Email already exists',

      'password.required': 'Password is required',
      'password.minLength': 'Password must be at least 6 charecters long',
      'password.maxLength': 'Password must be at less or equal 16 charecters long',
      'password_confirmation.confirmed': "Password and confirm password doesn't match",
    }

    return await request.validate({ schema: registerUserSchema, messages: msg })
  }

  public async validateLoginSchema(request: HttpContextContract['request']) {
    const loginUserSchema = schema.create({
      email: schema.string({ trim: true }, [rules.email({ sanitize: true, }),]),
      password: schema.string({ trim: true, }),
    })

    const msg = {
      'email.required': 'Email is required',
      'password.required': 'Password is required',
    }

    return await request.validate({ schema: loginUserSchema, messages: msg })
  }



}
