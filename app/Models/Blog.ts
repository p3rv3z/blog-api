import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Website from './Website'

export default class Blog extends BaseModel {
  // properties
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public short_desc: string

  @column()
  public content: string

  @column()
  public image?: string

  @column()
  public banner?: string

  @column()
  public categoryName: string

  @column()
  public subCategoryName: string

  @column()
  public seoMetaData?: string

  @column()
  public leftSideAdCode?: string

  @column()
  public rightSideAdCode?: string

  @column()
  public contentAdCode: string

  @column()
  public status: string

  @column.dateTime()
  public publishedAt?: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // relationships
  @column()
  public authorId: number
  @belongsTo(() => User, {
    localKey: 'authorId',
  })
  public user: BelongsTo<typeof User>

  @column()
  public websiteId: number
  @belongsTo(() => Website)
  public website: BelongsTo<typeof Website>
}
