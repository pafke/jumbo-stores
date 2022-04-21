<template>
  <div id="app">
    <StoresOverview  />
  </div>
</template>

<script>
import StoresOverview from "./components/StoresOverview";

export default {
  name: "App",
  components: {
    StoresOverview
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>