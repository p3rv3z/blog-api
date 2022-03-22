import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SitePlans extends BaseSchema {
  protected tableName = 'site_plans'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('plan_name', 191).notNullable()
      table.string('plan_desc', 191).notNullable()
      table.text('plan_features_meta').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
