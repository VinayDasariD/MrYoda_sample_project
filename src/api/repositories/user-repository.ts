import { injectable } from "inversify";
import { IuserEntity } from "../infrastructure/entities/userEntity";
import { IUserRepository } from "./contracts/i-user-repository";
@injectable()
class UserRepository implements IUserRepository {
    async createAddon(addonEntity: IuserEntity): Promise<IuserEntity> {
       console.log(addonEntity)
       return addonEntity
      }
    
}
export default UserRepository