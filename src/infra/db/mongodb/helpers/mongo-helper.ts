import { Collection, MongoClient } from 'mongodb'

export class MongoHelper {
  private static client: MongoClient | null = null
  private static uri: string | null = null

  static async connect(uri: string) {
    this.client = await MongoClient.connect(uri)
    this.uri = uri
  }

  static async disconnect() {
    if (this.client) {
      await this.client.close()
      this.client = null
    }
  }

  static async getCollection(collectionName: string): Promise<Collection> {
    if (!this.client) await this.connect(this.uri!)

    return this.client!.db().collection(collectionName)
  }

  static map(collection: any): any {
    const { _id, ...rest } = collection

    return { ...rest, id: _id.toString() }
  }
}
