import { AuthHandler } from "../handlers/AuthHandler";
import BaseController from "../utils/BaseController";
import { Auth0Provider } from '@bcwdev/auth0provider'
import { albumsService } from "../services/AlbumsService";
import { albumMembersService } from "../services/AlbumMembersService";



export class AlbumsController extends BaseController {

  constructor() {
    super('api/albums')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get("/:id/albumMembers", this.getMembersByAlbum)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createAlbum)
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

  async getMembersByAlbum(req, res, next) {
    try {
      const members = await albumMembersService.getMembersByAlbum(req.params.id)
      res.send(members)
    } catch (error) {
      next(error)
    }
  }

  async createAlbum(req, res, next) {
    req.body.creatorId = req.userInfo.id
    try {
      const album = await albumsService.createAlbum(req.body)
      res.send(album)
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