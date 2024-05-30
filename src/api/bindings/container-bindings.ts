import { Container } from "inversify";
import { ContainerTypes } from "./container-types";
import {IuserController} from '../../api/contracts/iuser-controller'
import userController from '../../api/controllers/userController'
import { IUserService } from "../applications/contracts/i-user-services";
import  userService from "../applications/services/userService";
import { IUserRepository } from "../repositories/contracts/i-user-repository";
import UserRepository from "../repositories/user-repository";
let container = new Container();

container
.bind<IuserController>(ContainerTypes.userController)
.to(userController);
container
.bind<IUserService>(ContainerTypes.userService)
.to(userService);
container
.bind<IUserRepository>(ContainerTypes.UserRepository)
.to(UserRepository);

export { container };