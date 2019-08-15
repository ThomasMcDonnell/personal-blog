<template>
    <div class="w-full md:w-1/2 p-3">
        <g-link :to="post.path">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <img :src="post.featuredImage" class="h-full w-full rounded-t pb-6">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6 uppercase" v-html="post.title"></p>
                <div class="w-full font-bold text-xl text-gray-900 px-6" v-html="post.subTitle"></div>
                <p class="text-gray-800 font-serif text-base px-6 mb-5" v-html="post.description"></p>
            </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
            </div>
        </div>
        </g-link>
    </div>
</template>

<script>
    export default {
        name: "PostList",
        props: ["post"],
    }
</script>
