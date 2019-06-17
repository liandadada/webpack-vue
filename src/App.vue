<template>
  <div class="App">
    <div>
    Hello {{msg}}
    </div>
    <div>
        <router-link to="/page1">go page1</router-link>
        <router-link to="/page2">go page2</router-link>
        </div>
        <div>
        <router-view></router-view>
        </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
        msg: "xiaoming",
    };
  }
};
</script>
<style lang="scss" scoped>
.App {
  color: skyblue;
}
</style>