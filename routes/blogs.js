import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as blogsCtrl from '../controllers/blogs.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, blogsCtrl.index)
router.get('/:blogId', checkAuth, blogsCtrl.show)
router.post('/', checkAuth, blogsCtrl.create)
router.post('/:blogId/comments', checkAuth, blogsCtrl.createComment)
router.put('/:blogId', checkAuth, blogsCtrl.update)
router.delete('/:blogId', checkAuth, blogsCtrl.delete)

export { router }
