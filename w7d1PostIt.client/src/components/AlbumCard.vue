
<template>
  <div class="row mt-2">
    <div class="col-12">
      <div class="bg-dark p-2 rounded">
        <img class="img-fluid" :src="album.coverImg" alt="">
        <p>{{ album.name }}</p>
        <p>{{ album.creator.name }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: { album: { type: Object, required: true } },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>