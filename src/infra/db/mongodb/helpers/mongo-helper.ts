import { Collection, MongoClient } from 'mongodb'

export class MongoHelper {
  private static client: MongoClient | null = null

  static async connect(uri: string) {
    this.client = await MongoClient.connect(uri)
  }

  static async disconnect() {
    if (this.client) {
      await this.client.close()
    }
  }

  static getCollection(collectionName: string): Collection {
    return this.client!.db().collection(collectionName)
  }

  static map(collection: any): any {
    const { _id, ...rest } = collection

    return { ...rest, id: _id.toString() }
  }
}
