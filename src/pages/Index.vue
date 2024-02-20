<template>
  <Layout>
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <h1>Recipes</h1>

    <div class="recipe-list">
      <g-link v-for="edge in $page.posts.edges" :key="edge.node.id" :to="`recipe/${edge.node.slug}`">
        {{ edge.node.title }}
        <g-image :key="edge.node.id" :src="edge.node.image.file.url" :alt="edge.node.title" width="200" />
      </g-link>
    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<page-query>
query {
  posts: allContentfulRecipe {
    edges {
      node {
        id
        title
        slug
        image {
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>