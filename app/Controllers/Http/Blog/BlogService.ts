import RecordNotFoundException from 'App/Exceptions/RecordNotFoundException'
import BlogQuery from './BlogQuery'

export default class BlogService {
  private blogQuery: BlogQuery

  constructor() {
    this.blogQuery = new BlogQuery()
  }

  public async isValidBlog(id: number) {
    const blog = await this.blogQuery.getBlog(id)
    if (!blog) throw new RecordNotFoundException('Blog not found')
  }

  public async getBlogs(payload) {
    return await this.blogQuery.getBlogs(payload)
  }

  public async getBlog(id: number) {
    return await this.blogQuery.getBlog(id)
  }

  public async storeBlog(user, payload) {
    payload.author_id = user.id
    return await this.blogQuery.storeBlog(payload)
  }

  public async updateBlog(id: number, payload) {
    return await this.blogQuery.updateBlog(id, payload)
  }

  public async deleteBlog(id) {
    return await this.blogQuery.deleteBlog(id)
  }
}
