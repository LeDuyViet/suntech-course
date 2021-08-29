<template>
  <div class="user__index">
    <div class="toolbar">
      <el-button icon="el-icon-plus" size="mini">
        <router-link :to="{ name: 'user.create' }">Thêm mới</router-link>
      </el-button>
    </div>
    <el-table :data="users" border style="width: 100%">
      <el-table-column prop="name" label="Họ và tên"> </el-table-column>
      <el-table-column prop="phone" label="Điện thoại"> </el-table-column>
      <el-table-column prop="email" label="Emai"> </el-table-column>
      <el-table-column prop="birday" label="Ngày sinh"> </el-table-column>
      <el-table-column
        prop="gender"
        label="Giới tính"
        :formatter="genderFomat"
      ></el-table-column>
      <el-table-column>
        <router-link :to="{ name: 'user.edit', params: { id: '1' } }">
          <el-button size="mini" icon="el-icon-edit"> </el-button>
        </router-link>
        <el-button
          size="mini"
          type="danger"
          icon="el-icon-delete"
          @click="deleteUser()"
        ></el-button>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "Nguyễn Văn A",
          phone: "0903242432",
          email: "A@gmail.com",
          birday: "01/12/2000",
          gender: 1,
        },
      ],
    };
  },
  created() {
    console.log("run here");
  },
  methods: {
    genderFomat(row) {
      return row ? "Nam" : "Nữ";
    },
    deleteUser() {
      this.$confirm("Bạn có thực sự muốn xoá?", "SUNTECH", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          this.$message({ type: "success", message: "Delete completed" });
        })
        .catch(() => {
          this.$message({ type: "info", message: "Delete canceled" });
        });
    },
  },
};
</script>

<style scoped>
.user__index {
  height: 100vh;
}
.toolbar {
  text-align: right;
  padding: 10px;
}
.pagination {
  text-align: center;
  padding: 30px;
}
</style>
