import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.post('register', 'AuthController.register')
    Route.post('login', 'AuthController.login')
  })

  Route.group(() => {
    Route.post('logout', 'AuthController.logout')
    Route.get('get-user', 'AuthController.getUser')
  }).middleware('auth')

})
  .prefix('auth')
  .namespace('App/Controllers/Http/Auth')

// Route.group(()=>{
//   Route.post('/register', 'Teacher/Auth/AuthController.register')
//   Route.post('/accountVerify', 'Teacher/Auth/AuthController.accountVerify')
//   Route.post('/resendAccountVarificationCode', 'Teacher/Auth/AuthController.resendAccountVarificationCode')
//   Route.post('/login', 'Teacher/Auth/AuthController.login')
//   Route.post('/sendPasswordResetCode', 'Teacher/Auth/AuthController.sendPasswordResetCode')
//   Route.post('/verifyPassworResetCode', 'Teacher/Auth/AuthController.verifyPassworResetCode')
//   Route.post('/passwordReset', 'Teacher/Auth/AuthController.passwordReset')
//   Route.get('/getUser', 'Teacher/Auth/AuthController.getUser')
//   Route.post('/webhook', 'Teacher/Auth/AuthController.webhook')

// }).prefix('teacher/auth')
