<template>
  <div class="reset-password">
    <Modal
      modalMessage="邮件已发送至您的邮箱"
      @close-modal="closeModal"
      v-if="modalActive"
    />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <h2>重置密码</h2>
        <p>忘记了密码？输入注册邮箱重置密码</p>
        <div class="inputs">
          <div class="input">
            <input type="email" placeholder="Email" v-model="email" />
            <Email class="icon" />
          </div>
        </div>
        <button>重置密码</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue"
import Loading from "@/components/Loading.vue"
import Email from "@/static/assets/icons/envelope-regular.svg?inline"
export default {
  name: "forgotPassword",
  components: {
    Modal,
    Loading,
    Email,
  },
  data() {
    return {
      email: "",
      modalActive: false,
      loading: null,
    }
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive
    },
  },
}
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}

.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 900px) {
    width: 100%;
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 48px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;

          &:focus {
            outline: none;
          }
        }

        .icon {
          width: 12px;
          position: absolute;
          left: 10px;
        }
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;

      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("@/static/assets/bg.png");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
