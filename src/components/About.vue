<template>
  <div class="about">
    <div class="showcase"></div>
    <h3>About Project</h3>
    <p>
      As of March 2020,
      the outbreak of coronavirus disease (COVID-19) has been declared a Public Health Emergency of International Concern,
      and the virus has spread to many countries and territories. While COVID-19 continues to spread,
      it is important that communities take action to prevent further transmission,
      reduce the impacts of the outbreak and support control measures.
    </p>
    <p>We as a company wish to provide additional data about COVID19 and raise awareness on the seriousness of the situation and personal responsibility of each of us</p>
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
  margin: 1rem;
  background-image: url("../assets/pills.jpg");
  height: 60vh;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
