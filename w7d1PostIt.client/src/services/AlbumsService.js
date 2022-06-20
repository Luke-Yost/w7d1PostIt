import { AppState } from "../AppState";
import { api } from "./AxiosService"


class AlbumsService {


  async getAlbums() {
    const res = await api.get('albums')
    AppState.albums = res.data
    console.log(res.data);
  }

  async createAlbum(body) {
    const res = await api.post('albums', body)
    console.log(res.data);
  }
}

export const albumsService = new AlbumsService()