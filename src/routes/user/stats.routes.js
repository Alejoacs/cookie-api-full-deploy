import {Router} from 'express'
import {getAllLogins} from '../../controllers/User/stats.controller'

const router = Router()

router.get('/', getAllLogins)

export default router