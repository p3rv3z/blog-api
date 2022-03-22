import Blog from 'App/Models/Blog'

export default class BlogQuery {
  public async getBlog(id: number) {
    return await Blog.find(id)
  }

  public async getBlogs(payload) {
    const { page, limit } = payload
    return Blog.query().paginate(page, limit)
  }

  public async storeBlog(payload) {
    return Blog.create(payload)
  }

  public async updateBlog(id: number, payload) {
    return Blog.query().where('id', id).update(payload)
  }

  public async deleteBlog(id: number) {
    return Blog.query().where('id', id).delete()
  }
}
