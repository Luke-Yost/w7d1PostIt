import { dbContext } from "../db/DbContext"


class AlbumsService {

  async getAll() {
    const albums = await dbContext.Album.find()
    return albums
  }

  async getById(id) {
    const album = await dbContext.Album.findById(id)
  }

  createAlbum(body) {

  }

}


export const albumsService = new AlbumsService()