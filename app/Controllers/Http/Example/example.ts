import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'ExampleController.getExamples')
  Route.get('/:id', 'ExampleController.getExample')
  Route.post('/', 'ExampleController.storeExample')
  Route.post('/:id', 'ExampleController.updateExample')
  Route.post('/:id/delete', 'ExampleController.deleteExample')
})
  .prefix('/examples')
  .middleware('auth')
  .namespace('App/Controllers/Http/Example')
