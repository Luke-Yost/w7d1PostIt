
<template>
  <div class="row">
    <div class="col-12">
      <div class="bg-dark p-3 rounded">
        <img class="img-fluid" :src="album.coverImg" alt="">
        <p>{{ album.name }}</p>
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