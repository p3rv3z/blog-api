import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Websites extends BaseSchema {
  protected tableName = 'websites'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 191).notNullable()
      table.string('desc', 191).notNullable()
      table.string('link', 191).unique().notNullable()
      table.string('subdomain', 191).notNullable()
      table.string('current_plan', 191).notNullable()
      table.text('header_code').notNullable()
      table.text('footer_code').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table
        .integer('site_plan_id')
        .unsigned()
        .references('site_plans.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
