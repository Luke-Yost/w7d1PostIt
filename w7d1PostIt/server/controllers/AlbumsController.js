import { AuthHandler } from "../handlers/AuthHandler";
import BaseController from "../utils/BaseController";
import { Auth0Provider } from '@bcwdev/auth0provider'
import { albumsService } from "../services/AlbumsService";



export class AlbumsController extends BaseController {

  constructor() {
    super('albums')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
    // .use(Auth0Provider.getAuthorizedUserInfo)
    // .post('', this.createAlbum)
    // .put('/:id', this.editAlbum)

  }



  async getAll(req, res, next) {
    try {
      const albums = await albumsService.getAll()
      res.send(albums)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const album = await albumsService.getById(req.params.id)
      res.send(album)
    } catch (error) {
      next(error)
    }
  }

  async reateAlbum(req, res, next) {
    try {
      const album = await albumsService.createAlbum(req.body)
    } catch (error) {
      next(error)
    }
  }

  // editAlbum(req, res, next) {
  //   try {

  //   } catch (error) {
  //     next(error)
  //   }
  // }
}