import RecordNotFoundException from 'App/Exceptions/RecordNotFoundException'
import ExampleQuery from './ExampleQuery'

export default class ExampleService {
  private exampleQuery: ExampleQuery

  constructor() {
    this.exampleQuery = new ExampleQuery
  }

  public async isValidExample(id: number) {
    const example = await this.exampleQuery.getExample(id)
    if (!example) throw new RecordNotFoundException('Site plan Not Found')
  }

  public async getExamples(payload) {
    return await this.exampleQuery.getExamples(payload)
  }

  public async getExample(id: number) {
    return await this.exampleQuery.getExample(id)
  }

  public async storeExample(payload) {
    return await this.exampleQuery.storeExample(payload)
  }

  public async updateExample(id: number, payload) {
    return await this.exampleQuery.updateExample(id, payload)
  }

  public async deleteExample(id) {
    return await this.exampleQuery.deleteExample(id)
  }
}
