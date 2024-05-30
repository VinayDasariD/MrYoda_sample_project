import { IuserEntity } from "../../entities/userEntity";

export interface IAddonRepository {
  createAddon(
    businessLogo: IuserEntity
  ): Promise<IuserEntity>;
}
