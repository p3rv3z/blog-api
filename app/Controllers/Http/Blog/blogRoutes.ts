import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'BlogController.getBlogs')
  Route.get('/:id', 'BlogController.getBlog')
  Route.post('/', 'BlogController.storeBlog')
  Route.post('/:id', 'BlogController.updateBlog')
  Route.post('/:id/delete', 'BlogController.deleteBlog')
})
  .prefix('/blogs')
  .middleware('auth')
  .namespace('App/Controllers/Http/Blog')
