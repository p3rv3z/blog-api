import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('full_name', 191).notNullable()
      table.string('user_type', 191).notNullable().comment('ADMIN, SITE_OWNER and EDITOR')
      table.string('profile_pic', 191).nullable()
      
      // table.string('username', 191).notNullable()
      table.string('email', 191).notNullable()
      table.string('password', 191).notNullable()

      table.string('code', 191).nullable()
      table.string('remember_me_token', 191).nullable()
      table.string('access_token', 191).nullable()
      
      // table.string('status', 191).notNullable().comment('VERIFIED')
      table.timestamp('last_login', { useTz: true }).nullable()
      table.timestamp('last_active', { useTz: true }).nullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
