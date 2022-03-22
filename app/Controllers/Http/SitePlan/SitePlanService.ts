import RecordNotFoundException from 'App/Exceptions/RecordNotFoundException'
import SitePlanQuery from './SitePlanQuery'

export default class SitePlanService {
  private sitePlanQuery: SitePlanQuery

  constructor() {
    this.sitePlanQuery = new SitePlanQuery
  }

  public async isValidSitePlan(id: number) {
    const sitePlan = await this.sitePlanQuery.getSitePlan(id)
    if (!sitePlan) throw new RecordNotFoundException('Site plan Not Found')
  }

  public async getSitePlans(payload) {
    return await this.sitePlanQuery.getSitePlans(payload)
  }

  public async getSitePlan(id: number) {
    return await this.sitePlanQuery.getSitePlan(id)
  }

  public async storeSitePlan(payload) {
    return await this.sitePlanQuery.storeSitePlan(payload)
  }

  public async updateSitePlan(id: number, payload) {
    return await this.sitePlanQuery.updateSitePlan(id, payload)
  }

  public async deleteSitePlan(id) {
    return await this.sitePlanQuery.deleteSitePlan(id)
  }
}
