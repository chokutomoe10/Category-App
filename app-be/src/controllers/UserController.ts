import { Request, Response } from 'express'
import UserService from '../services/UserService'

class UserController {
    find(req: Request, res: Response){
        UserService.find(req, res)
    }

    findByRole(req: Request, res: Response){
        UserService.findByRole(req, res)
    }
}

export default new UserController()