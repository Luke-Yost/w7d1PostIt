import { dbContext } from "../db/DbContext"


class AlbumsService {
  async getAll() {
    const albums = await dbContext.get()
  }


}


export const albumsService = new AlbumsService()