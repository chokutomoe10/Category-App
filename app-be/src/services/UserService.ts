import { Repository } from "typeorm";
import { User } from '../entities/User';
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

class UserService {
    private readonly userRepository: Repository<User> = AppDataSource.getRepository(User);

    async find(req: Request, res: Response) {
        try {
        const users = await this.userRepository.find(
            {
                order: { id: 'ASC' },
            }
        )
        return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findByRole(req: Request, res: Response) {
        const role = req.params.role
        const user = await this.userRepository.find({
            where: {role}
        })
        return res.status(200).json(user)
    }
}

export default new UserService()