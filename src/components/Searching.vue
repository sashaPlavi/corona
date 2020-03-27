<template>
  <div class="search">
    <SearchBar></SearchBar>

    <ul v-for="(country, ind) in sngCountry" :key="ind">
      <li class="day">
        <p>date - {{ new Date(country.Date).toLocaleDateString() }}</p>
        <p>country - {{ country.Country }}</p>

        <p>comfirmed cases - {{ country.Cases }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import { mapGetters } from "vuex";
export default {
  name: "Searching",
  components: {
    SearchBar
  },
  computed: {
    ...mapGetters(["sngCountry", "isSearching"])
  }
};
</script>

<style scoped>
.search {
  height: 100vh;
  border: 1px solid black;
}

ul {
  list-style: none;
}
li {
  padding: 1rem;
  background: #65c49a;
}
</style>
