import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'SitePlanController.getSitePlans')
  Route.get('/:id', 'SitePlanController.getSitePlan')
  Route.post('/', 'SitePlanController.storeSitePlan')
  Route.post('/:id', 'SitePlanController.updateSitePlan')
  Route.post('/:id/delete', 'SitePlanController.deleteSitePlan')
})
  .prefix('/site-plans')
  .middleware('auth')
  .namespace('App/Controllers/Http/SitePlan')
