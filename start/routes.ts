import Route from '@ioc:Adonis/Core/Route'

// ********* api endpoints ***********
import 'App/Controllers/Http/Auth/auth'
import 'App/Controllers/Http/SitePlan/sitePlan'
import 'App/Controllers/Http/Website/website'

Route.get('/', () => {
  return {
    greetings: '******Welcome to Blog API******'
  }
})
