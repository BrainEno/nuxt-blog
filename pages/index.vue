<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPosts"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogPosts"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>不想错过最新动态？立即注册获取免费账号！</h2>
        <NuxtLink class="router-button" to="#">
          注册Roller Grasses<Arrow class="arrow arrow-light" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import BlogPost from "@/components/BlogPost.vue"
import BlogCard from "@/components/BlogCard.vue"
import Arrow from "@/static/assets/icons/arrow-right-light.svg?inline"
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  key(route) {
    return route.fullPath
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Weekly blog articles with all things ",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPosts: [
        {
          title: "this is blog Title one",
          blogHTML:
            "This is a filter blog post one jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaajdkfj",
          blogCoverPhoto: "wave.png",
          date: "2021/7/4",
        },
        {
          title: "This is blog title two",
          blogHTML: "This is the second blog post",
          blogCoverPhoto: "man.png",
          date: "2021/3/2",
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
