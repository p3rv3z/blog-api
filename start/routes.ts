import Route from '@ioc:Adonis/Core/Route'

// ********* api endpoints ***********
import 'App/Controllers/Http/Auth/authRoutes'
import 'App/Controllers/Http/SitePlan/sitePlanRoutes'
import 'App/Controllers/Http/Website/websiteRoutes'
import 'App/Controllers/Http/Blog/blogRoutes'

Route.get('/', () => {
  return {
    greetings: 'Welcome to Blog API',
  }
})
