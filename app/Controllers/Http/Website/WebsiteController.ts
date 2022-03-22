import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import WebsiteService from './WebsiteService';
import WebsiteValidator from './WebsiteValidator';

export default class WebsiteController {
  private websiteService: WebsiteService
  private websiteValidator: WebsiteValidator

  constructor() {
    this.websiteService = new WebsiteService()
    this.websiteValidator = new WebsiteValidator()
  }

  public async getWebsites(ctx: HttpContextContract) {
    return this.websiteService.getWebsites(ctx.request.all())
  }

  public async getWebsite({params}: HttpContextContract) {
    await this.websiteService.isValidWebsite(params.id)
    return this.websiteService.getWebsite(params.id)
  }

  public async storeWebsite({ request, response }: HttpContextContract) {
    try {
      const payload = await this.websiteValidator.validateWebsiteSchema(request)
      return await this.websiteService.storeWebsite(payload)
    } catch (error) {
      if (error.code === 'E_VALIDATION_FAILURE')
        return response.status(422).send(error.messages)
      else
        return response.status(400).send({ msg: 'Site plan creating unsuccessfull' })
    }
  }

  public async updateWebsite({ request, params, response }: HttpContextContract) {
    try {
      await this.websiteService.isValidWebsite(params.id)
      const payload = await this.websiteValidator.validateWebsiteSchema(request)
      return await this.websiteService.updateWebsite(params.id, payload)
    } catch (error) {
      if (error.code === 'E_RECORD_NOT_FOUND')
        return response.status(404).send({ msg: 'Site plan not found' })
      else if (error.code === 'E_VALIDATION_FAILURE')
        return response.status(422).send(error.messages)
      else
        return response.status(400).send({ msg: 'Site plan updating unsuccessfull' })
    }
  }

  public async deleteWebsite({ params, response }: HttpContextContract) {
    await this.websiteService.isValidWebsite(params.id)
    try {
      await this.websiteService.deleteWebsite(params.id)
      return response.status(200).send('Site plan deleted successfully')
    } catch (error) {
      if (error.code === 'E_RECORD_NOT_FOUND')
        return response.status(404).send({ msg: 'Site plan not found' })
      else
        return response.status(400).send({ msg: 'Site plan deleting unsuccessfull' })
    }

  }
}
