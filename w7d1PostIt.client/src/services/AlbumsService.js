import { api } from "./AxiosService"


class AlbumsService {


  async getAlbums() {
    const res = await api.get('albums')
    console.log(res.data);
  }

  async createAlbum(body) {
    const res = await api.post('albums', body)
    console.log(res.data);
  }
}

export const albumsService = new AlbumsService()