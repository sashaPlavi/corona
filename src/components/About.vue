<template>
  <div class="about">
    <div class="showcase"></div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style>
.about {
  height: 100vh;
  color: #333;
}
.showcase {
  background-image: url("../assets/pills.jpg");
  height: 80vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
