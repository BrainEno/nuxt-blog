<template>
  <header>
    <nav class="container">
      <div class="branding">
        <NuxtLink to="/" class="header">Roller Grasses</NuxtLink>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <NuxtLink to="/" class="link">Home</NuxtLink>
          <NuxtLink to="/blogs" class="link">Blogs</NuxtLink>
          <NuxtLink to="" class="link">Create Post</NuxtLink>
          <NuxtLink to="" class="link">Login/Register</NuxtLink>
        </ul>
      </div>
    </nav>
    <MenuIcon class="menu-icon" v-show="mobile" @click="toggleMobileNav" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <NuxtLink to="" class="link">Home</NuxtLink>
        <NuxtLink to="/blogs" class="link">Blogs</NuxtLink>
        <NuxtLink to="" class="link">Create Post</NuxtLink>
        <NuxtLink to="" class="link">Login/Register</NuxtLink>
      </ul>
    </transition>
  </header>
</template>

<script>
import MenuIcon from "@/static/assets/icons/bars-regular.svg?inline"

export default {
  name: "Navigation",
  components: { MenuIcon },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  created() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.checkScreen)
      this.checkScreen()
    }
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 99;
}

.link {
  font-weight: 500;
  padding: 0 8px;
  transition: 0.3s color ease;

  &:hover {
    color: #1eb8b8;
  }
}

nav {
  display: flex;
  padding: 25px 0;

  .branding {
    display: flex;
    align-items: center;

    .header {
      font-weight: 600;
      font-size: 24px;
      color: black;
      text-decoration: none;
    }
  }

  .nav-links {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;

    ul {
      margin-right: 32px;

      .link {
        margin-right: 32px;
      }

      .link:last-child {
        margin-right: 0;
      }
    }
  }
}

.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;

  .link {
    padding: 15px 0;
    color: #fff;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
