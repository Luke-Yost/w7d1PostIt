import { Logger } from "sass"
import BaseController from '../utils/BaseController'

export class PicturesController extends BaseController{
  constructor(){
    super('api/pictures')
    this.router 
    .get('',this.getAll)
  }
  async getAll(req, res, next) {
    try {
      const pictures = await picturesService.getAll(req.query)
      return res.send(pictures)
    } catch (error) {
      next(error)
    }
  }
}