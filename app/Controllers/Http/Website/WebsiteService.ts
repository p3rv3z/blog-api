import RecordNotFoundException from 'App/Exceptions/RecordNotFoundException'
import WebsiteQuery from './WebsiteQuery'

export default class WebsiteService {
  private websiteQuery: WebsiteQuery

  constructor() {
    this.websiteQuery = new WebsiteQuery
  }

  public async isValidWebsite(id: number) {
    const website = await this.websiteQuery.getWebsite(id)
    if (!website) throw new RecordNotFoundException('Website Not Found')
  }

  public async getWebsites(payload) {
    return await this.websiteQuery.getWebsites(payload)
  }

  public async getWebsite(id: number) {
    return await this.websiteQuery.getWebsite(id)
  }

  public async storeWebsite(payload) {
    return await this.websiteQuery.storeWebsite(payload)
  }

  public async updateWebsite(id: number, payload) {
    return await this.websiteQuery.updateWebsite(id, payload)
  }

  public async deleteWebsite(id) {
    return await this.websiteQuery.deleteWebsite(id)
  }
}
