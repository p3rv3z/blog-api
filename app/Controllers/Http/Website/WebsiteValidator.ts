import { schema, rules } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WebsiteValidator {

  public async validateWebsiteSchema(request: HttpContextContract['request']) {
    const websiteSchema = schema.create({
      site_name: schema.string(),
      site_desc: schema.string(),
      site_link: schema.string(),
      site_subdomain: schema.string(),
      site_current_plan: schema.string(),
      header_code: schema.string(),
      footer_code: schema.string(),
      user_id: schema.number([
        rules.unsigned(),
        rules.exists({ table: 'users', column: 'id' })
      ]),
      site_plan_id: schema.number([
        rules.unsigned(),
        rules.exists({ table: 'site_plans', column: 'id' })
      ]),
    })

    const msg = {
      'site_name.required': 'Site Name is required',
      'site_desc.required': 'Site Description is required',
      'site_link.required': 'Site Link is required',
      'site_subdomain.required': 'Site subdomain is required',
      'site_current_plan.required': 'Site current plan is required',
      'header_code.required': 'Header code is required',
      'footer_code.required': 'Footer code is required',
      'user_id.required': 'User id is required',
      'site_plan_id.required': 'Site plan id is required',
    }

    return await request.validate({ schema: websiteSchema, messages: msg })
  }
}
