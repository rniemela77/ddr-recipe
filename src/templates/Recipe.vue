<template>
  <Layout>
    <h1>YES!</h1>
    
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