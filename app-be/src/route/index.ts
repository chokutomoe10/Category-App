import * as express from 'express'
import UserController from '../controllers/UserController'

const router = express.Router()

router.get("/users", UserController.find)
router.get("/users/:role", UserController.findByRole)

export default router