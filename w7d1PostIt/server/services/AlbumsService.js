import { dbContext } from "../db/DbContext"


class AlbumsService {
  async getAll() {
    const albums = await dbContext.Album.find()
    return albums
  }


}


export const albumsService = new AlbumsService()