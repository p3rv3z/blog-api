import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExampleValidator {

  public async validateExampleSchema(request: HttpContextContract['request']) {
    const exampleSchema = schema.create({
      plan_name: schema.string(),
      plan_desc: schema.string(),
      plan_features_meta: schema.string.optional(),
    })

    const msg = {
      'plan_name.required': 'Plan Name is required',
      'plan_desc.required': 'Plan Description is required',
    }

    return await request.validate({ schema: exampleSchema, messages: msg })
  }
}
