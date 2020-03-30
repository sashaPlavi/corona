<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/inc/Navbar";
//import Footer from "./components/inc/Footer";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  background: #f4f4f4;
  color: #f4f4f4;
  text-align: center;
}
</style>
