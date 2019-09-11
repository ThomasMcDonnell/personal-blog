<template>
    <Layout>
        <div class="container-inner mx-auto sm:flex">
            <div class="w-1/5 sm:block hidden mt-4">
                <transition name="fade">
                <div class="fixed" v-if="show">
                    <social-sharing :url="$page.post.url"
                                    :title="$page.post.title"
                                    :description="$page.post.description"
                                    :quote="$page.post.subTitle"
                                    hashtags="SoftwareDevelopment,WebDev,DevOps"
                                    twitter-user="thomasmcdonnell"
                                    inline-template>
                        <div class="flex flex-col justify-around">
                            <network network="whatsapp">
                                <font-awesome-icon
                                        :icon="['fab', 'whatsapp']"
                                        style="font-size: 2rem; color: #25D366; margin-top: 25px;"
                                />
                            </network>
                            <network network="facebook">
                                <font-awesome-icon
                                        :icon="['fab', 'facebook-f']"
                                        style="font-size: 2rem; color: #3b5998; margin-top: 25px;"
                                />
                            </network>
                            <network network="twitter">
                                <font-awesome-icon
                                        :icon="['fab', 'twitter']"
                                        style="font-size: 2rem; color: #00acee; margin-top: 25px;"
                                />
                            </network>
                            <network network="linkedin">
                                <font-awesome-icon
                                        :icon="['fab', 'linkedin-in']"
                                        style="font-size: 2rem; color: #0077B5; margin-top: 25px;"
                                />
                            </network>
                            <network network="reddit">
                                <font-awesome-icon
                                        :icon="['fab', 'reddit']"
                                        style="font-size: 2rem; color: #FF5700; margin-top: 25px;"
                                />
                            </network>
                        </div>
                    </social-sharing>
                </div>
                </transition>
            </div>
            <div class="sm:w-4/5 w-full">
                <div class="flex sm:flex-row flex-col">
                    <div class="sm:w-3/4 py-2 w-full">
                        <h1 class="font-bold text-4xl py-4">{{$page.post.title}}</h1>
                        <h3 class="text-2xl">{{ $page.post.subTitle }}</h3>
                    </div>
                    <div class="sm:block w-1/4 py-2 hidden">
                        <p class="pt-8 text-center w-2/3 h-2/3 border-b-2 border-green-400"> {{ $page.post.date}}</p>
                    </div>
                </div>
            <div class="py-5">
                <p v-html="$page.post.content" class="text-xl"></p>
                <div class="comments mt-4">
                    <vue-disqus shortname="thomasmcdonnell" :identifier="$page.post.title" url=""></vue-disqus>
                </div>
            </div>
        </div>
        </div>
    </Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Another Great Post'
        },
        name: "Post",
        data () {
            return {
                show: false,
            }
        },
        mounted () {
            window.addEventListener('scroll', this.onScroll)
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll)
        },
        methods: {
            onScroll () {
                // Get the current scroll position
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight;
                // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
                if (currentScrollPosition < 0) {
                    return
                }
                // Here we determine whether we need to show or hide the navbar
                this.show = currentScrollPosition > 0 && currentScrollPosition < height - 1000;
                console.log(document.documentElement.scrollHeight);
            }
        }

    }
</script>

<<page-query>
    query Post ($path: String!) {
        post: post (path: $path) {
            id
            url
            title
            subTitle
            featuredImage
            content
            date (format: "D MMMM YYYY")
        }
    }
</page-query>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
    a {
        text-decoration: underline #25D366;
    }
</style>
