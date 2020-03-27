<template>
  <div class="coronaItem">
    {{ coronaC.Country }}
    <p>total comfirmed - {{ coronaC.TotalConfirmed }}</p>
    <p>New Confirmed - {{ coronaC.NewConfirmed }}</p>
    <p>New Deaths - {{ coronaC.NewDeaths }}</p>
    <p>Total Deaths - {{ coronaC.TotalDeaths }}</p>
  </div>
</template>

<script>
//console.log(corona);

export default {
  name: "CoronaItems",
  props: ["coronaC"]
};
</script>

<style scoped>
.coronaItem {
  border: 1px solid #ccc;
  background: #5b6b7c;

  padding: 1rem;
  text-align: center;
  color: #f4f4f4;
}
</style>
