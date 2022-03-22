import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import SitePlan from './SitePlan'
import Blog from './Blog'

export default class Website extends BaseModel {
  // properties
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public desc: string

  @column()
  public link: string

  @column()
  public subdomain: string

  @column()
  public currentPlan: string

  @column()
  public headerCode: string

  @column()
  public footerCode: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // relationships
  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public sitePlanId: number

  @belongsTo(() => SitePlan)
  public sitePlan: BelongsTo<typeof SitePlan>

  @hasMany(() => Blog)
  public blogs: HasMany<typeof Blog>
}
