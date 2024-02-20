<template>
  <Layout>
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <h1>Recipes</h1>

    <div class="recipe-list">
      <g-link v-for="edge in $page.posts.edges" :key="edge.node.id" :to="`recipe/${edge.node.slug}`" class="card">
        <g-image :key="edge.node.id" :src="edge.node.image.file.url" :alt="edge.node.title" width="300" class="image" />

        <b>{{ edge.node.title }}</b>
        <i>{{ edge.node.shortDescription }}</i>
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
        shortDescription
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

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.recipe-list {
  width: 100%;
  column-count: 3;
  column-gap: 1rem;
}

@media (max-width: 768px) {
  .recipe-list {
    column-count: 2;
  }
}
@media (max-width: 480px) {
  .recipe-list {
    column-count: 1;
  }
}

.card {
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  background: rgb(240, 233, 233);
  transition: 0.3s;
  /* height: fit-content; */
  /* width: clamp(200px, 100%, 300px); */

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
}

.card img {
  display: block;
  height: auto;
  width: 100%;
  object-fit: contain;
}

b {
  background: white;
  padding: 1rem;
  font-size: 1.3rem;
  background: rgba(255, 255, 255, 0.499);
  color: rgb(134, 95, 95);
  text-shadow: 0px -1px 1.5px rgba(255, 0, 0, 0.2);
}

i {
  color: rgb(90, 39, 39);
  padding: 0.8rem 2rem 1.5rem;
  color: rgba(72, 42, 42, 0.546);
  line-height: 1.25;
  opacity: 0.8;
}

.card:hover {
  opacity: 1;
  filter: brightness(1.07) contrast(1.07);
  transform: scale(1.05);
}</style>