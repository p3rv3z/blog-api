import Example from "App/Models/Example"

export default class ExampleQuery {
    public async getExample(id: number) {
        return await Example.find(id)
    }

    public async getExamples(payload) {
        const { page, limit } = payload
        return Example.query().paginate(page, limit)
    }

    public async storeExample(payload) {
        return Example.create(payload)
    }

    public async updateExample(id: number, payload) {
        return Example.query().where('id', id).update(payload)
    }

    public async deleteExample(id: number) {
        return Example.query().where('id', id).delete()
    }
}
