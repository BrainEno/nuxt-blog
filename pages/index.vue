<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPosts"
      :key="index"
    />
  </div>
</template>
<script>
import BlogPost from "~/components/BlogPost.vue"
export default {
  name: "Home",
  components: { BlogPost },
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
        },
        {
          title: "This is blog title two",
          blogHTML: "This is the second blog post",
          blogCoverPhoto: "man.png",
        },
      ],
    }
  },
}
</script>
