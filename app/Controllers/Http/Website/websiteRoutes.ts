import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'WebsiteController.getWebsites')
  Route.get('/:id', 'WebsiteController.getWebsite')
  Route.post('/', 'WebsiteController.storeWebsite')
  Route.post('/:id', 'WebsiteController.updateWebsite')
  Route.post('/:id/delete', 'WebsiteController.deleteWebsite')
})
  .prefix('/websites')
  .middleware('auth')
  .namespace('App/Controllers/Http/Website')
