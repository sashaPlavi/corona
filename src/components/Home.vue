<template>
  <div class="home">
    <div class="showcase">
      <h1>Raise Awerness During COVID19</h1>
    </div>
    <div class="awarness">
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          expedita libero ullam beatae tenetur quibusdam necessitatibus ut
          cupiditate? Eum error ut sint exercitationem cum perspiciatis ab fugit
          laborum commodi veritatis! lor
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit odit
          laboriosam, iure impedit necessitatibus quaerat fugit vitae animi
          maiores esse sit amet neque. Non accusamus voluptatem explicabo
          nostrum assumenda asperiores.
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit
          facere hic veritatis, alias a consequuntur non. Nostrum deleniti
          voluptatum reprehenderit sequi corrupti magni minus nihil incidunt.
          Consectetur, illum neque.
        </p>
      </div>
    </div>
    home page
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.showcase {
  background-image: url("../assets/lego.jpg");
  height: 80vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}
.showcase h1 {
  font-size: 3rem;
  text-align: center;
  padding-top: 1rem;
  margin: 0;
}
.awarness {
  display: flex;
  color: #333;
}
.awarness div {
  padding: 1rem;
  text-align: left;
}
</style>
