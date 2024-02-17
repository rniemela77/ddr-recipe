<template>
  <Layout>
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    <h1>Recipes</h1>

    <a v-for="edge in $page.posts.edges" :key="edge.node.id" :href="`/recipe/${edge.node.slug}`">
       {{ edge.node.title }}, {{ edge.node.slug }}
      </a>
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
      }
    }
  }
}
</page-query>