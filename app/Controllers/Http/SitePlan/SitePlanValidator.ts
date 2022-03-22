import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SitePlanValidator {

  public async validateSitePlanSchema(request: HttpContextContract['request']) {
    const sitePlanSchema = schema.create({
      plan_name: schema.string(),
      plan_desc: schema.string(),
      plan_features_meta: schema.string.optional(),
    })

    const msg = {
      'plan_name.required': 'Plan Name is required',
      'plan_desc.required': 'Plan Description is required',
    }

    return await request.validate({ schema: sitePlanSchema, messages: msg })
  }
}
