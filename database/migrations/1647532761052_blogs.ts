import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Blogs extends BaseSchema {
  protected tableName = 'blogs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 191).notNullable()
      table.string('slug', 191).unique().notNullable()
      table.string('short_desc', 191).notNullable()
      table.text('content').notNullable()
      table.string('image', 191).nullable()
      table.string('banner', 191).nullable()
      table.string('status').notNullable()
      table.string('category_name').notNullable()
      table.string('sub_category_name').notNullable()
      table.text('seo_meta_data').nullable()
      table.string('left_side_ad_code').nullable()
      table.string('right_side_ad_code').nullable()
      table.string('content_ad_code').nullable()
      table.dateTime('published_at').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table
        .integer('author_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table
        .integer('website_id')
        .unsigned()
        .references('websites.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
