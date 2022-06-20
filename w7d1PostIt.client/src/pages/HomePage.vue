<template>

  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-3" v-for="a in albums">
        <AlbumCard :album="a"></AlbumCard>
      </div>
      <div class="col-12">
        <CreateAlbum v-if="user.name"></CreateAlbum>
      </div>
    </div>
  </div>

</template>

<script>
import { computed, onMounted } from "vue"
import { AppState } from "../AppState"
import { albumsService } from "../services/AlbumsService"
import AlbumCard from "../components/AlbumCard.vue"
import CreateAlbum from "../components/CreateAlbum.vue"

export default {
  setup() {
    onMounted(async () => {
      await albumsService.getAlbums();
    });
    return {
      albums: computed(() => AppState.albums),
      user: computed(() => AppState.user)
    };
  },
  components: { AlbumCard, CreateAlbum }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
