<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="">Software Developer &amp; Life Long Learner</div>
        <div class="text-green-500">Welcome to my developer notebook</div>
      </div>
      <div class="sm:w-1/3 w-full mt-8 sm:mt-0">
        <g-image src="../../static/hero.svg" alt="developer hero image" class="text-center sm:mx-0"></g-image>
      </div>
    </div> <!-- hero end -->

    <div class="container-inner mx-auto">
      <p class="text-xl">Hello and welcome, my name is Thomas and I am a full stack developer, builder and maker of
        things for humans. I spend most of my free time learning new tech and exploring the latest and greatest solutions
        to all the problems I don't have :) <br> When I am not self learning I enjoy helping others who are just themselves
        breaking in to what we all know can be a daunting and overwhelming space.
      </p>

      <div class="flex flex-col sm:flex-row justify-between items-center py-16">
        <div class="sm:w-1/3 w-full">
          <g-image src="../../static/solution-mindset.svg"></g-image>
        </div>
        <div class="w-1/3 sm:block hidden">
          <g-image src="../../static/windows.svg"></g-image>
        </div>
      </div> <!-- end lead section -->
      <div class="projects container-inner mx-auto text-xl border-t border-grey-500 border-b py-16 mb-16">
        <h2 class="font-bold mb-6">Tech I play with:</h2>
        <div class="flex justify-between mx-auto">
          <div class="w-1/3">
            <ul>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image> Python</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>PHP</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>JavaScript</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>HTML5</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>CSS</li>
            </ul>
          </div>
          <div class="w-1/3">
            <ul>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image> Django</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>Flask</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>Laravel</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image> VueJs</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>Angular</li>
            </ul>
          </div>
          <div class="sm:w-1/3 sm:block hidden">
            <ul>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>Tailwind CSS</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>Bootstrap</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>Gridsome</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>Docker</li>
              <li class="mb-6 flex"><g-image src="../../static/Checkmark_green.svg" width="30" class="mr-4"></g-image>Vagrant &amp; VirtualBox</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About me'
  }
}
</script>

