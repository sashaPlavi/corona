<template>
  <div class="footer">
    <p>bitwise softwer &copy; {{ new Date().getFullYear() }}</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  background: #35495e;
  color: #f4f4f4;
}
.footer p {
  padding: 0.2rem;
}
</style>
