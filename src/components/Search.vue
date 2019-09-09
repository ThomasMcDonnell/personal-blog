<template>
    <div class="relative">
        <div class="relative">
            <input
                type="text"
                placeholder="Search"
                class="bg-background-form border border-gray-400 rounded-full px-4 pl-10 py-2 outline-none focus:border-green-400 w-full"
                v-model="query"
                @keydown.esc="searchVisibility = false"
                @blur="searchVisibility = false"
                @focus="searchVisibility = true"
                @keyup="search"
            >
            <div class="absolute ml-3 search-icon">
                <font-awesome-icon
                        :icon="['fas', 'search']"
                        style="font-size: 1.2rem;"
                        class="text-gray-800"
                ></font-awesome-icon>
            </div>
            <div v-if="query.length > 0 && searchVisibility" class="absolute bg-white normal-case border left-0 right-0 text-left mb-4 mt-2 rounded-lg shadow overflow-hidden z-10 results">
                <div class="flex flex-col">
                    <a class="font-normal w-full border-b cursor-pointer p-4 hover:bg-green-100"
                       v-for="(post, index) in searchResults"
                       :key="index"
                       :href="post.item.path"
                       @mousedown.prevent="searchVisibility = true"
                    >
                        {{ post.item.title }}
                        <span class="block font-normal text-sm my-1">{{ post.item.description }}</span>
                    </a>
                    <div class="font-normal w-full border-b cursor-pointer p-4">
                        <p class="my-0">Results for <strong>{{ query }}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<static-query>
    {
        metaData{
            pathPrefix
        }
    }
</static-query>

<script>
    import axios from 'axios';

    export default {
        name: "Search",
        data() {
            return {
                query: '',
                searchVisibility: false,
                searchResults: [],
                posts: [],
                options: {
                    shouldSort: true,
                    includeMatches: true,
                    threshold: 0.5,
                    location: 0,
                    distance: 500,
                    maxPatternLength: 32,
                    minMatchCharLength: 1,
                    keys: ['title', 'description']
                }
            }
        },
        created(){
          axios.get(this.$static.metaData.pathPrefix + '/index.json')
              .then(response => {
                  this.posts = response.data
              })
        },
        methods: {
            search(){
                this.$search(this.query, this.posts, this.options).then(
                    results => {
                        this.searchResults = results
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .search-icon {
        top: 10px;
    }
    .results {
        width: 350px;
    }
</style>
