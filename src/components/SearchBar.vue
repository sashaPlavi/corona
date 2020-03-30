<template>
  <div class="row">
    <form @submit="onSubmit">
      <input type="text" v-model="contry" placeholder="Search by country" />
      <input class="submit" type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {
      contry: ""
    };
  },
  methods: {
    ...mapActions(["filterCountry"]),
    onSubmit(e) {
      e.preventDefault();
      this.filterCountry(this.contry);
    }
  }
};
</script>

<style scoped>
input {
  padding: 0.5rem;
  width: 50%;
}
.submit {
  margin: 1rem;
  background: #35495e;
  color: #f4f4f4;
  border: none;
}
div {
  text-align: center;
  padding: 0.5rem;
  margin: 20px;
  border-radius: 4px;
}
</style>
