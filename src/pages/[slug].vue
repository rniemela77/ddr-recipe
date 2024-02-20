<template>
    <Layout>
        {{ slug }}

        <!-- <h1>{{ $page.recipe.title }}</h1> -->
        <!-- <p>{{ $page.recipe.shortDescription }}</p> -->
        <!-- <img :src="$page.recipe.image.file.url" alt="recipe image" /> -->
        <!-- <g-link :to="`/recipe/${$page.recipe.slug}`">Read more</g-link> -->
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
        recipe() {
            // return this.$page.recipes.edges.find(edge => edge.node.slug === this.slug).node
        }
    }
}
</script>

<!-- find the recipe that has this slug -->
<!-- <page-query>
query($slug: String) {
    recipe: contentfulRecipe({filter: {slug: { eq: $slug }}}) {
        title
        shortDescription
        image {
            file {
                url
            }
        }
        slug
    }
}
</page-query> -->