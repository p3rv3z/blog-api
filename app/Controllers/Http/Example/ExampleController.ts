import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ExampleService from './ExampleService'
import ExampleValidator from './ExampleValidator'

export default class ExampleController {
  private exampleService: ExampleService
  private exampleValidator: ExampleValidator

  constructor() {
    this.exampleService = new ExampleService()
    this.exampleValidator = new ExampleValidator()
  }

  public async getExamples(ctx: HttpContextContract) {
    return this.exampleService.getExamples(ctx.request.all())
  }

  public async getExample(ctx: HttpContextContract) {
    return this.exampleService.getExample(ctx.params.id)
  }

  public async storeExample({ request, response }: HttpContextContract) {
    try {
      const payload = await this.exampleValidator.validateExampleSchema(request)
      return await this.exampleService.storeExample(payload)
    } catch (error) {
      if (error.code === 'E_VALIDATION_FAILURE') return response.status(422).send(error.messages)
      else return response.status(400).send({ msg: 'Site plan creating unsuccessful' })
    }
  }

  public async updateExample({ request, params, response }: HttpContextContract) {
    try {
      await this.exampleService.isValidExample(params.id)
      const payload = await this.exampleValidator.validateExampleSchema(request)
      return await this.exampleService.updateExample(params.id, payload)
    } catch (error) {
      if (error.code === 'E_RECORD_NOT_FOUND')
        return response.status(404).send({ msg: 'Site plan not found' })
      else if (error.code === 'E_VALIDATION_FAILURE')
        return response.status(422).send(error.messages)
      else return response.status(400).send({ msg: 'Site plan updating unsuccessful' })
    }
  }

  public async deleteExample({ params, response }: HttpContextContract) {
    await this.exampleService.isValidExample(params.id)
    try {
      await this.exampleService.deleteExample(params.id)
      return response.status(200).send('Site plan deleted successfully')
    } catch (error) {
      if (error.code === 'E_RECORD_NOT_FOUND')
        return response.status(404).send({ msg: 'Site plan not found' })
      else return response.status(400).send({ msg: 'Site plan deleting unsuccessful' })
    }
  }
}
