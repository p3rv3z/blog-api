import Website from "App/Models/Website"

export default class WebsiteQuery {
    public async getWebsite(id: number) {
        return await Website.find(id)
    }

    public async getWebsites(payload) {
        const { page, limit } = payload
        return Website.query().paginate(page, limit)
    }

    public async storeWebsite(payload) {
        return Website.create(payload)
    }

    public async updateWebsite(id: number, payload) {
        return Website.query().where('id', id).update(payload)
    }

    public async deleteWebsite(id: number) {
        return Website.query().where('id', id).delete()
    }
}
