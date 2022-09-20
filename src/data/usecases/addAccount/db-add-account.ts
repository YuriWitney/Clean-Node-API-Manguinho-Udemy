import { AddAccount, Encrypter, AddAccountModel, AccountModel, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashePassword = await this.encrypter.encrypt(accountData.password)
    const accountWithHashedPassword = Object.assign({}, accountData, { password: hashePassword })
    await this.addAccountRepository.add(accountWithHashedPassword)

    return await new Promise(resolve => resolve(null))
  }
}
