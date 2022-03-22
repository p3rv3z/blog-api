import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SitePlanService from './SitePlanService';
import SitePlanValidator from './SitePlanValidator';

export default class SitePlanController {
  private sitePlanService: SitePlanService
  private sitePlanValidator: SitePlanValidator

  constructor() {
    this.sitePlanService = new SitePlanService()
    this.sitePlanValidator = new SitePlanValidator()
  }

  public async getSitePlans(ctx: HttpContextContract) {
    return this.sitePlanService.getSitePlans(ctx.request.all())
  }

  public async getSitePlan({ params }: HttpContextContract) {
      await this.sitePlanService.isValidSitePlan(params.id)
      return this.sitePlanService.getSitePlan(params.id)
    }

  public async storeSitePlan({ request, response }: HttpContextContract) {
    try {
      const payload = await this.sitePlanValidator.validateSitePlanSchema(request)
      return await this.sitePlanService.storeSitePlan(payload)
    } catch (error) {
      if (error.code === 'E_VALIDATION_FAILURE')
        return response.status(422).send(error.messages)
      else
        return response.status(400).send({ msg: 'Site plan creating unsuccessfull' })
    }
  }

  public async updateSitePlan({ request, params, response }: HttpContextContract) {
    try {
      await this.sitePlanService.isValidSitePlan(params.id)
      const payload = await this.sitePlanValidator.validateSitePlanSchema(request)
      return await this.sitePlanService.updateSitePlan(params.id, payload)
    } catch (error) {
      if (error.code === 'E_RECORD_NOT_FOUND')
        return response.status(404).send({ msg: 'Site plan not found' })
      else if (error.code === 'E_VALIDATION_FAILURE')
        return response.status(422).send(error.messages)
      else
        return response.status(400).send({ msg: 'Site plan updating unsuccessfull' })
    }
  }

  public async deleteSitePlan({ params, response }: HttpContextContract) {
    await this.sitePlanService.isValidSitePlan(params.id)
    try {
      await this.sitePlanService.deleteSitePlan(params.id)
      return response.status(200).send('Site plan deleted successfully')
    } catch (error) {
      if (error.code === 'E_RECORD_NOT_FOUND')
        return response.status(404).send({ msg: 'Site plan not found' })
      else
        return response.status(400).send({ msg: 'Site plan deleting unsuccessfull' })
    }

  }
}
