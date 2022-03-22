import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '../../app/Models/User'

export default class UserSeederSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      fullName: 'Master',
      userType: 'MASTER',
      email: 'master@blog.com',
      password: 'password',
    })
  }
}
