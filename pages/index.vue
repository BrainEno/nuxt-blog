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
  </div>
</template>
<script>
import BlogPost from "@/components/BlogPost.vue"
import BlogCard from "@/components/BlogCard.vue"
export default {
  name: "Home",
  components: { BlogPost, BlogCard },
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
</style>
