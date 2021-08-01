<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        已经有账号了？
        <NuxtLink to="/login" class="router-link">直接登录</NuxtLink>
      </p>
      <h2>注册Roller</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <User class="icon" />
        </div>
        <div class="input">
          <input type="email" placeholder="Email" v-model="email" />
          <Email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <Password class="icon" />
        </div>
      </div>
      <button>注册</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import Email from "@/static/assets/icons/envelope-regular.svg?inline"
import Password from "@/static/assets/icons/lock-alt-solid.svg?inline"
import User from "@/static/assets/icons/user-alt-light.svg?inline"

export default {
  name: "register",
  components: {
    Email,
    User,
    Password,
  },
  data: function () {
    return {
      username: "",
      email: "",
      password: "",
    }
  },
}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
