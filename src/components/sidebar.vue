<template>
        <el-menu :router="true" class="el-menu-vertical-demo">
          <el-menu-item :index="menu.path"  :key="index" v-for="(menu, index) in menus" class="tac">
            <template #title >
              <i class="el-icon-menu"></i>
              <span>{{ menu.title }}</span>
            </template>
          </el-menu-item>
        </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
    };
  },
  created() {
    this.$router.options.routes.forEach((item) => {
      if (item.title) this.menus.push(item);
    });
    console.log(this.$router.options.routes);
  },
};
</script>

<style scoped>
.el-menu {
  height: 100vh;
  background-color: #e0fbfc;
  border-radius: 5px;
}
.el-menu * {
  color: #3d405b;

}
</style>
