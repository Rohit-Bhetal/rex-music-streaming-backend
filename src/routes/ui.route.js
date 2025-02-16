import { Router } from "express"
import { themeImageController } from "../controller/themeImage.controller.js"

const router = Router()

router.get('/uiImages',themeImageController)

export default router