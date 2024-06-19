import {Router} from 'express'
import {getAllLogins, getAllSexes} from '../../controllers/User/stats.controller'

const router = Router()

router.get('/', getAllLogins)
router.get('/sexes', getAllSexes )

export default router