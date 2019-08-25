<template>
    <div class="w-full md:w-1/2 p-3">
        <g-link :to="post.path">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <g-image :src="post.featuredImage" class="h-full w-full rounded-t pb-6"></g-image>
                <p class="w-full text-gray-600 text-xs md:text-sm px-6 uppercase" v-html="post.title"></p>
                <div class="w-full font-bold text-xl text-gray-900 px-6 hover:text-green-400    " v-html="post.subTitle"></div>
                <p class="text-gray-800 font-serif text-base px-6 mb-5" v-html="post.description"></p>
            </div>
        </g-link>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="">
                <social-sharing url="https://thomasmcdonnell.xyz"
                                :title="post.title"
                                :description="post.description"
                                :quote="post.subTitle"
                                hashtags="SoftwareDevelopment,WebDev,DevOps"
                                twitter-user="thomasmcdonnell"
                                inline-template>
                    <div class="flex items-center justify-between">
                        <network network="whatsapp">
                                <font-awesome-icon
                                        :icon="['fab', 'whatsapp']"
                                        style="font-size: 1.5rem; color: #25D366;"
                                />
                        </network>
                        <network network="facebook">
                            <font-awesome-icon
                                    :icon="['fab', 'facebook-f']"
                                    style="font-size: 1.5rem; color: #3b5998;"
                            />
                        </network>
                        <network network="twitter">
                            <font-awesome-icon
                                    :icon="['fab', 'twitter']"
                                    style="font-size: 1.5rem; color: #00acee;"
                            />
                        </network>
                        <network network="linkedin">
                            <font-awesome-icon
                                    :icon="['fab', 'linkedin-in']"
                                    style="font-size: 1.5rem; color: #0077B5;"
                            />
                        </network>
                        <network network="reddit">
                            <font-awesome-icon
                                    :icon="['fab', 'reddit']"
                                    style="font-size: 1.5rem; color: #FF5700;"
                            />
                        </network>
                    </div>
                </social-sharing>
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
