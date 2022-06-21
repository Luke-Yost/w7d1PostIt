import { Logger } from "sass"
import { picturesService } from "../services/PicturesService"
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
export class PicturesController extends BaseController{
  constructor(){
    super('api/pictures')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    // .get('',this.getAll)
    .post('', this.create)
    .put('/:id', this.update)
    .delete('/:id', this.delete)
  }
  async getAll(req, res, next) {
    try {
      const pictures = await picturesService.getAll(req.query)
      return res.send(pictures)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const picture = await picturesService.create(req.body)
      return res.send(picture)
    } catch (error) {
      next(error)
    }
  }
  async update(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const picture = await picturesService.update(req.params.id, req.body)
      return res.send(picture)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      const picture = await picturesService.delete(req.params.id, req.userInfo.id)
      return res.send(picture)
    } catch (error) {
      next(error)
    }
  }
}