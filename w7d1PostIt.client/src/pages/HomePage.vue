<template>

  <div class="container">
    <div class="row">

    </div>
  </div>

</template>

<script>
import { onMounted } from "vue"
import { AppState } from "../AppState"
import { albumsService } from "../services/AlbumsService"

export default {
  setup() {
    onMounted(async () => {
      await albumsService.getAlbums()
    })

    return {
      posts: AppState.posts
    }
  }
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
