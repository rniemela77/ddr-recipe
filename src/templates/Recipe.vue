<template>
  <Layout v-if="$page.recipes">
    <div class="image">
      <g-image :src="$page.recipes.edges[0].node.image.file.url" alt="Recipe Image" />
    </div>
    <h1>{{ $page.recipes.edges[0]['node']['title'] }}</h1>
    <div class="flex">

      <div class="details" v-if="prepTime || cookTime || servings">
        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p v-if="prepTime">Prep Time: {{ prepTime }}</p>
        <p v-if="cookTime">Cook Time: {{ cookTime }}</p>
        <p v-if="servings">Servings: {{ servings }}</p>
      </div>

      <i>{{ $page.recipes.edges[0]['node']['shortDescription'] }}</i>
    </div>



    <p>{{ $page.recipes.edges[0]['node']['description'] }}</p>




    <template v-if="$page.recipes && youtubeUrl.length">
      <h2>Video</h2>
      <div ref="player"></div>
    </template>


    <h2>Ingredients</h2>
    <span class="ingredients" v-html="richtextToHTML($page.recipes.edges[0]['node']['ingredientsList'])"></span>

    <h2>Steps</h2>
    <span class="steps" v-html="richtextToHTML($page.recipes.edges[0]['node']['steps'])"></span>
  </Layout>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  data() {
    return {
      slug: this.$route.params.slug,
      player: null,
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
      return this.$page['recipes'].edges[0]['node']['youtubeUrl'].split('v=')[1] || ''
    },
    steps() {
      return this.$page.recipes.edges[0]['node']['steps']
    },
    endNotes() {
      return this.$page.recipes.edges[0]['node']['endNotes']
    }
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content)
    },
    appendVideo() {
      // if YT is not defined, wait for it to be defined
      if (typeof YT === 'undefined') {
        setTimeout(this.appendVideo, 100)
        return
      }
      this.player = new YT.Player(this.$refs.player, {
        height: '390',
        width: '640',
        videoId: this.youtubeUrl,
      })
    }
  },
  mounted() {
    // remove current video to avoid multiple videos
    const iframe = document.querySelector('iframe')
    if (iframe) {
      iframe.remove()
    }

    if (this.youtubeUrl.length) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      window.onYouTubeIframeAPIReady = this.appendVideo()
    }
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
  flex-wrap: wrap;
  gap: 2vw;
  justify-content: center;
}

.flex i {
  flex: 1;
}

.details {
  background: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;

  position: relative;
}

.details svg {
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
}

svg * {
  stroke: #bb5a5a;
}

.details p {
  width: max-content;
  color: #bb5a5a;
}

.layout {
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

iframe {
  max-width: 100%;
}

.ingredients,
.steps {
  margin: 1rem 0 0 2rem;
  line-height: 2;
  font-size: 1.2rem;
  display: block;
}

i {
  font-size: 1rem;
  margin: 1rem 0;
  border-left: 1px solid #3333337d;
  padding: 1rem;
  line-height: 1;
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

.image {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;
}
</style>