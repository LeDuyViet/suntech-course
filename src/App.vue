<template>
  <div class="app">
    <nav>
      <sidebar class="sidebar" />
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import sidebar from "./components/sidebar.vue";
export default {
  components: {
    sidebar,
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
.app {
  display: flex;
}
main {
  padding: 0 20px;
  width: 100%;
  max-width: 100%;
}
h1 {
  margin-top: 0;
  background-color: #e2111134;
  height: 100%;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  color: rgb(141, 56, 56);
}
</style>
