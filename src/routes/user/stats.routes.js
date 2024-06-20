import { Router } from 'express'
import { getAllLogins, getAllSexes, getAllPosts } from '../../controllers/User/stats.controller.js'

const router = Router()

router.get('/', getAllLogins)
router.get('/sexes', getAllSexes)
router.get('/posts', getAllPosts)

export default router