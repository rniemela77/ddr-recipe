<template>
  <Layout v-if="$page.recipes.edges.length">
    <g-image :src="$page.recipes.edges[0].node.image.file.url" alt="Recipe Image" />
    <h1>{{ $page.recipes.edges[0]['node']['title'] }}</h1>
    <i>{{ $page.recipes.edges[0]['node']['shortDescription'] }}</i>

    <div class="flex">
      <p>{{ $page.recipes.edges[0]['node']['description'] }}</p>

      <div class="details">
        <p v-if="servings">Servings: {{ servings }}</p>
        <p v-if="cookTime">Cook Time: {{ cookTime }}</p>
        <p v-if="prepTime">Prep Time: {{ prepTime }}</p>
      </div>
    </div>


    <h2>Ingredients</h2>
    <ul>
      <li v-for="ingredient in ingredientsList">{{ ingredient }}</li>
    </ul>

    <h2>Steps</h2>
    <ol>
      <li v-for="step in stepsList">{{ step }}</li>
    </ol>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    servings() {
      // return this.$page.recipes.edges[0]?.node?.servings
    },
    cookTime() {
      // return this.$page.recipes.edges[0]?.node?.cookTime
    },
    prepTime() {
      // return this.$page.recipes.edges[0]?.node?.prepTime
    },
    ingredientsList() {
      let list = [];
      // list.push(
      this.$page.recipes.edges[0]['node']['ingredientsList'].content[0].content.forEach(x => {
        list.push(x.content[0].content[0].value);
        // list.push(x.content[0].content[0].value);
      })
      // this.$page.recipes.edges[0].node.ingredientsList.content[0].content.forEach(x => {
      // list.push(x.content[0].content[0].value);
      // })
      return list;
    },
    stepsList() {
      let list = [];

      this.$page.recipes.edges[0]['node']['steps'].content[0].content.forEach(x => {
        list.push(x.content[0].content[0].value);
        // list.push(x.content[0].content[0].value);
      })
      // this.$page.recipes.edges[0]['node']['steps']['content'][0]['content'].forEach(x => {
      // list.push(x.content[0]['content'][0]['value']);
      // })
      return list;
    },
    youtubeUrl() {
      return this.$page.recipes.edges[0]['node']['youtubeUrl']
    },
    steps() {
      return this.$page.recipes.edges[0]['node']['steps']
    },
    endNotes() {
      return this.$page.recipes.edges[0]['node']['endNotes']
    }
  },
  mounted() {
    //
  }
}
</script>

<!-- single recipe (using slug) -->
<page-query>
query($slug: String) {
  recipes: allContentfulRecipe(filter: {slug: {eq: $slug}}) {
    edges {
      node {
        title
        slug
        image {
          file {
            url
          }
        }
        shortDescription
        description
        servings
        cookTime
        prepTime
        ingredientsList
        steps
        youtubeUrl
        endNotes
      }
    }
  }
}
</page-query>


<style scoped>
.flex {
  display: flex;
  align-items: start;
}

.details {
  margin-left: 2rem;
  flex: 1;
  background: rgba(255, 255, 255, 0.5);
  padding: 1rem;
}

.details p {
  width: max-content;
  color: #bb5a5a;
}

.layout {
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
}

* {
  line-height: 1.5;
}

h1 {
  font-size: 2.5rem;

}

p {
  line-height: 2.5;
  color: #333;
  font-weight: 500;
}

li {
  margin: 1rem 0;
  font-size: 1.2rem;
  margin-left: 2rem;
}

i {
  font-size: 1rem;
  margin: 1rem 0;
  border-left: 5px solid #333;
  padding-left: 1rem;
  display: block;
}

h2 {
  margin: 2rem 0;
  border-left: 5px solid #333;
  padding-left: 1rem;
}

img {
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>