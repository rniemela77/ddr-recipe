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

    <iframe v-if="youtubeUrl" width="560" height="315" :src="youtubeUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <h2>Ingredients</h2>
    <span class="ingredients" v-html="richtextToHTML($page.recipes.edges[0]['node']['ingredientsList'])"></span>

    <h2>Steps</h2>
    <span class="steps" v-html="richtextToHTML($page.recipes.edges[0]['node']['steps'])"></span>
  </Layout>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  methods: {
    richtextToHTML (content) {
      return documentToHtmlString(content)
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    servings() {
      return this.$page.recipes.edges[0]?.node?.servings
    },
    cookTime() {
      return this.$page.recipes.edges[0]?.node?.cookTime
    },
    prepTime() {
      return this.$page.recipes.edges[0]?.node?.prepTime
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

.ingredients, .steps {
  margin: 1rem 0 0 2rem;
  line-height: 2;
  font-size: 1.2rem;
  display: block;
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