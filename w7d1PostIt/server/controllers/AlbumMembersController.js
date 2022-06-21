import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { albumMembersService } from "../services/AlbumMembersService"
import BaseController from '../utils/BaseController'


export class AlbumMembersController extends BaseController {
  constructor() {
    super('api/albumMembers')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createAlbumMember)
  }



  async createAlbumMember(req, res, next) {
    try {
      const member = await albumMembersService.createAlbumMember(req.body)
      return res.send(member)
    } catch (error) {
      next(error)
    }
  }
}