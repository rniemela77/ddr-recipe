<template>
  <Layout v-if="$page.recipes.edges.length">
    <h1>{{ $page.recipes.edges[0].node.title }}</h1>
    <img :src="$page.recipes.edges[0].node.image.file.url" alt="Recipe Image" width="300" />
  </Layout>
</template>

<script>
</script>

<!-- Find the allContentfulRecipe with the current slug -->
<page-query>
query Recipe($slug: String) {
  recipes: allContentfulRecipe(filter: {slug: {eq: $slug}}) {
    edges {
      node {
        title
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