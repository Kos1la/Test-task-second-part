import Router from 'express'
import ActionController from "./ActionController.js";

const actionRouter = new Router()

actionRouter.post('/actions',ActionController.logAction)
actionRouter.get('/actions',ActionController.getActions)

export default actionRouter