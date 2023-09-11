<template>
  <div class="image-viewer">
    <img :src="imageUrl" :alt="imageAlt" :class="imageClass" :style="{ width: imageSize }" />
  </div>
</template>

<script>
    export default {
        name: "ImageViewer",
        props: {
          imageUrl: String,
          imageSize: String,
          imageAlt: String,
          imageClass: String,
        }
    }
</script>

<style scoped>
.image-viewer {
  padding: 10%;
  /* Add styles for the container div if needed */
}
</style>