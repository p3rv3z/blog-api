import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Website from './Website'
import Blog from './Blog'

export default class User extends BaseModel {
  // properties
  @column({ isPrimary: true })
  public id: number

  @column()
  public fullName: string
  @column()
  public userType: string
  @column()
  public profilePic?: string

  // @column()
  // public username: string
  @column()
  public email: string
  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberToken?: string
  @column({ serializeAs: null })
  public code?: string

  // @column()
  // public status: string
  @column.dateTime({ autoCreate: true })
  public lastLogin?: DateTime
  @column.dateTime({ autoCreate: true })
  public lastActive?: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  //relationships
  @hasMany(() => Website)
  public websites: HasMany<typeof Website>

  @hasMany(() => Blog, {
    foreignKey: 'authorId',
  })
  public blogs: HasMany<typeof Blog>

  // decorators
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
