import SitePlan from "App/Models/SitePlan"

export default class SitePlanQuery {
    public async getSitePlan(id: number) {
        return await SitePlan.find(id)
    }

    public async getSitePlans(payload) {
        const { page, limit } = payload
        return SitePlan.query().paginate(page, limit)
    }

    public async storeSitePlan(payload) {
        return SitePlan.create(payload)
    }

    public async updateSitePlan(id: number, payload) {
        return SitePlan.query().where('id', id).update(payload)
    }

    public async deleteSitePlan(id: number) {
        return SitePlan.query().where('id', id).delete()
    }
}
