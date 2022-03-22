import User from "App/Models/User"

export default class AuthQuery {
    public async register(user) {
        return User.create(user);
    }

    public async getUserByField(field: string, value: string): Promise<User | null> {
        return User.query().where(field, value).first()
    }
}
