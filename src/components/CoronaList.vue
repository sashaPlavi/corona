<template>
  <div>
    <div class="coronaLi">
      <h1>Countries Afected By Covid19</h1>

      <p>date : {{ new Date(allCorona.Date).toLocaleDateString() }}</p>
      <button @click="nextPage">next page</button>
      <button @click="prewPage">prewious page</button>
    </div>
    <div class="coronaList">
      <CoronaItems
        v-for="corona in allCorona.Countries"
        :coronaC="corona"
        :start="indStart"
        :end="indEnd"
        :key="corona.id"
      ></CoronaItems>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CoronaItems from "./CoronaItems";

export default {
  name: "CoronaList",

  components: {
    CoronaItems
  },

  methods: {
    ...mapActions(["fetchAllCorona", "nextPage", "prewPage"])
  },
  computed: {
    ...mapGetters([
      "allCorona",
      "coronaPage",
      "indStart",
      "indEnd",
      "arrPerPage"
    ])
  },
  created() {
    this.fetchAllCorona();
  }
};
</script>

<style scoped>
.coronaLi {
  color: #f4f4f4;
  background: #35495e;
  margin: 1rem;
  padding: 1rem;
}
.coronaList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}
ul {
  list-style: none;
}
.day {
  background: #35495e;
  padding: 1rem;
}
</style>
