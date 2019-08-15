<template>
    <Layout>
        <div class="container-inner mx-auto">
            <div class="flex flex-row">
                <div class="w-3/4 py-2">
                    <h1 class="font-bold text-4xl py-4">{{$page.post.title}}</h1>
                    <h3 class="text-2xl">{{ $page.post.subTitle }}</h3>
                </div>
                <div class="w-1/4 py-2">
                    <p class="pt-8 text-center w-2/3 h-2/3 border-b-2 border-green-400"> {{ $page.post.date}}</p>
                </div>
            </div>
        <div class="py-5">
            <p v-html="$page.post.content" class="text-xl"></p>
        </div>
        </div>
    </Layout>
</template>

<script>
    export default {
        name: "Post"
    }
</script>

<<page-query>
    query Post ($path: String!) {
        post: post (path: $path) {
            id
            title
            subTitle
            featuredImage
            content
            date (format: "D MMMM YYYY")
        }
    }
</page-query>
