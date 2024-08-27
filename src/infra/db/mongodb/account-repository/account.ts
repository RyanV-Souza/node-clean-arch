import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const collection = MongoHelper.getCollection('accounts')

    const result = await collection.insertOne(accountData)

    const account = await collection.findOne({ _id: result.insertedId })

    if (!account) {
      throw new Error('Account not found')
    }

    const { _id, ...rest } = account

    const formattedAccount = { ...rest, id: _id.toString() } as AccountModel

    return formattedAccount
  }
}
