import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RecordNotFoundException extends Exception {
    constructor() {
        super('Record Not Found', 404, 'E_RECORD_NOT_FOUND')
    }
    
    public async handle(error: this, ctx: HttpContextContract) {
        ctx.response.status(error.status).send({ msg: error.message })
    }
}
