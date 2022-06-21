import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { albumMembersService } from "../services/AlbumMembersService"
import BaseController from '../utils/BaseController'


export class AlbumMembersController extends BaseController {
  constructor() {
    super('api/')
    this.router
      .get("albums/:id/albumMembers", this.getMembersByAlbum)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('albumMembers', this.createAlbumMember)
  }

  async getMembersByAlbum(req, res, next) {
    try {
      const members = await albumMembersService.getMembersByAlbum(req.params.id)
      res.send(members)
    } catch (error) {
      next(error)
    }
  }

  async createAlbumMember(req, res, next) {
    try {
      const member = await albumMembersService.createAlbumMember(req.body)
      res.send(member)
    } catch (error) {
      next(error)
    }
  }
}