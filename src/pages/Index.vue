<template>
  <Layout>
    <div class="container-inner mx-auto md:flex flex-wrap">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<script>
  import PostList from "@/components/PostList";

  export default {
    metaInfo: {
      title: 'Blog'
    },
    components: {
      PostList
    }
  }
</script>

<page-query>
  query {
    allPost {
      totalCount
        edges {
          node {
          id
          url
          title
          subTitle
          featuredImage
          timeToRead
          description
          path
        }
      }
    }
  }
</page-query>

