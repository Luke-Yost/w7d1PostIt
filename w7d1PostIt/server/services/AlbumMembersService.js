import { dbContext } from "../db/DbContext"



class AlbumMembersService {
  async getMembersByAlbum(albumId) {
    const albumMembers = await dbContext.AlbumMember.find(albumId)
      .populate('account')
      .populate('album')
    return albumMembers
  }
  async createAlbumMember(body) {
    const albumMember = await dbContext.AlbumMember.create(body)
    albumMember.populate('account')
    albumMember.populate('album')
    return albumMember
  }

}

export const albumMembersService = new AlbumMembersService()