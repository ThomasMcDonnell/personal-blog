<template>
    <div class="max-w-sm w-full lg:max-w-full lg:flex overflow-hidden shadow-lg mb-5">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center
        overflow-hidden"><g-image src="../../static/p2_first_right.jpg" class="w-full h-full"></g-image></div>
        <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2" v-html="post.title"></div>
                <p class="text-gray-700 text-base" v-html="post.description"></p>
            </div>
            <div class="flex flex-row justify-end mt-3">
                <button class="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-600 rounded">
                    Read More
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostList",
        props: ["post"],
    }
</script>
