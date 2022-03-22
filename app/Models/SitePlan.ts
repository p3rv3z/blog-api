import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Website from './Website';

export default class SitePlan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public planName: string

  @column()
  public planDesc: string

  @column()
  public planFeaturesMeta?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Website)
  public websites: HasMany<typeof Website>
}
