import express from 'express';
import Users from '../api/controllers/userController'; // Adjust the import path as necessary
import { container } from "../api/bindings/container-bindings";
import {IuserController} from '../api/contracts/iuser-controller'
import { ContainerTypes } from "../api/bindings/container-types"
import "reflect-metadata";
const router = express.Router();
const usersController = new Users();

export default function userDetailsRouter() {
    const elasticController = container.get<IuserController>(
        ContainerTypes.userController
      );
    // Define your routes
    router.get('/getUsers', async (req, res) => {
        try {
            const result = await elasticController.createUsers(req,res)
            res.send(result);
        } catch (error) {
            res.status(500).send('Error fetching users'); 
        }
    });

    return router;
}
