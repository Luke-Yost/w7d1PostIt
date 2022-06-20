import { dbContext } from "../db/DbContext"


class AlbumsService {

  async getAll() {
    const albums = await dbContext.Album.find().populate('creator', '_id name')
    return albums
  }

  async getById(id) {
    const album = await dbContext.Album.findById(id)
    return album
  }

  async createAlbum(body) {
    const album = await dbContext.Album.create(body)
    return album
  }

}


export const albumsService = new AlbumsService()