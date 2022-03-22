import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BlogService from './BlogService'
import BlogValidator from './BlogValidator'

export default class BlogController {
  private blogService: BlogService
  private blogValidator: BlogValidator

  constructor() {
    this.blogService = new BlogService()
    this.blogValidator = new BlogValidator()
  }

  public async getBlogs(ctx: HttpContextContract) {
    return this.blogService.getBlogs(ctx.request.all())
  }

  public async getBlog({ params }: HttpContextContract) {
    await this.blogService.isValidBlog(params.id)
    return this.blogService.getBlog(params.id)
  }

  public async storeBlog({ request, auth, response }: HttpContextContract) {
    try {
      const payload = await this.blogValidator.validateBlogSchema(request)
      return await this.blogService.storeBlog(auth.user, payload)
    } catch (error) {
      if (error.code === 'E_VALIDATION_FAILURE') return response.status(422).send(error.messages)

      return response.status(400).send({ msg: 'Blog creating unsuccessful' })
    }
  }

  public async updateBlog({ request, params, response }: HttpContextContract) {
    try {
      await this.blogService.isValidBlog(params.id)
      const payload = await this.blogValidator.validateBlogSchema(request)
      await this.blogService.updateBlog(params.id, payload)
      return response.status(200).send({ msg: 'Blog deleted successfully' })
    } catch (error) {
      if (error.code === 'E_RECORD_NOT_FOUND')
        return response.status(404).send({ msg: 'Blog not found' })
      else if (error.code === 'E_VALIDATION_FAILURE')
        return response.status(422).send(error.messages)

      return response.status(400).send({ msg: 'Blog updating unsuccessful' })
    }
  }

  public async deleteBlog({ params, response }: HttpContextContract) {
    await this.blogService.isValidBlog(params.id)
    try {
      await this.blogService.deleteBlog(params.id)
      return response.status(200).send({ msg: 'Blog deleted successfully' })
    } catch (error) {
      if (error.code === 'E_RECORD_NOT_FOUND')
        return response.status(404).send({ msg: 'Blog not found' })

      return response.status(400).send({ msg: 'Blog deleting unsuccessful' })
    }
  }
}
