import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BlogValidator {
  public async validateBlogSchema(request: HttpContextContract['request']) {
    const blogSchema = schema.create({
      title: schema.string(),
      slug: schema.string(),
      short_desc: schema.string(),
      content: schema.string(),
      image: schema.string.optional(),
      banner: schema.string.optional(),
      status: schema.string(),
      category_name: schema.string(),
      sub_category_name: schema.string(),
      seo_meta_data: schema.string.optional(),
      left_side_ad_code: schema.string.optional(),
      right_side_ad_code: schema.string.optional(),
      content_ad_code: schema.string.optional(),
      // published_at: schema.date.optional(),
      // author_id: schema.number([rules.unsigned(), rules.exists({ table: 'users', column: 'id' })]),
      website_id: schema.number([
        rules.unsigned(),
        rules.exists({ table: 'websites', column: 'id' }),
      ]),
    })

    const msg = {
      'title.required': 'Title is required',
      'slug.required': 'Slug is required',
      'short_desc.required': 'Short description is required',
      'content.required': 'Content is required',
      'status.required': 'Status is required',
      'category_name.required': 'Category name is required',
      'sub_category_name.required': 'Sub category name is required',
      // 'author_id.required': 'Author is required',
      'website_id.required': 'Website is required',
    }

    return await request.validate({ schema: blogSchema, messages: msg })
  }
}
