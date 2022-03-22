import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UnauthorizedAccessException extends Exception {
    public async handle(error: this, { response }: HttpContextContract) {
        response.status(401).send({
            msg: 'Unauthorized Access'
        })
      }
}
