<template>
  <div class="home">
    <h1>Raise Awareness During COVID19 Pandemic</h1>
    <div class="showcase"></div>
    <div class="awarness">
      <div>
        <h3>Stay At Home</h3>
        <p>Only go outside for food, health reasons or work (but only if you cannot work from home).</p>
        <p>If you go out, stay 2 metres (6ft) away from other people at all times.</p>
        <p>Wash your hands as soon as you get home.</p>
        <p>Do not meet others, even friends or family.</p>
        <p>You can spread the virus even if you don’t have symptoms.</p>
      </div>
      <div>
        <h3>What is social distancing?</h3>
        <p>
          Social distancing measures are steps you can take to reduce social interaction between people. This will help reduce the transmission of coronavirus (COVID-19).
          They are to:
        </p>
        <p>Avoid contact with someone who is displaying symptoms of coronavirus (COVID-19). These symptoms include high temperature and/or new and continuous cough</p>
        <p>Avoid non-essential use of public transport when possible</p>
        <p>Work from home, where possible. Your employer should support you to do this. Please refer to employer guidance for more information</p>
        <p>Avoid large and small gatherings in public spaces, noting that pubs, restaurants,</p>
        <p>leisure centres and similar venues are currently shut as infections spread easily in closed spaces where people gather together.</p>
      </div>
      <div>
        <h3>Handwashing and respiratory hygiene</h3>
        <p>There are general principles you can follow to help prevent the spread of respiratory viruses, including:</p>
        <p>washing your hands more often - with soap and water for at least 20 seconds or use a hand sanitiser when you get home or into work, when you blow your nose, sneeze or cough, eat or handle food</p>
        <p>avoid touching your eyes, nose, and mouth with unwashed hands</p>
        <p>avoid close contact with people who have symptoms</p>
        <p>cover your cough or sneeze with a tissue, then throw the tissue in a bin and wash your hands</p>
        <p>clean and disinfect frequently touched objects and surfaces in the home</p>
      </div>
    </div>home page
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
h1 {
  font-size: 2.5rem;
  text-align: center;
  padding-top: 1rem;
  margin: 0;
  color: #333;
}
.awarness {
  display: flex;
  color: #333;
}
.awarness div {
  padding: 1rem;
  text-align: left;
  width: 30%;
}
</style>
