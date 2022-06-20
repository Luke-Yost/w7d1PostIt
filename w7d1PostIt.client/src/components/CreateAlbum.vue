
<template>
  <form @submit.prevent="createAlbum()" action="">

    <div class="container mt-2">
      <div class="row">
        <div class="col-12 bg-dark text-light p-2 rounded">
          <h3>Create an album</h3>
          <div class="row">
            <div class="col-4">
              <label for="">Name</label>
              <input v-model="data.name" class="form-control" placeholder="name..." type="text">
            </div>
            <div class="col-4">
              <label for="">Cover Img</label>
              <input v-model="data.coverImg" class="form-control" placeholder="url..." type="text">
            </div>
            <div class="col-4 d-flex align-items center justify-content-end">
              <button type="submit" class="btn btn-outline-primary"> <i class="mdi mdi-send"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </form>

</template>


<script>
import { ref } from "vue"
import { albumsService } from "../services/AlbumsService"

export default {
  setup() {
    const data = ref({})
    return {
      data,
      async createAlbum(data) {
        console.log(data);
        const album = await albumsService.createAlbum(data)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
