<template>
  <div class="font-sans text-gray-800 landing-normal flex flex-col min-h-screen">
    <header class="border-t-14 border-green-400">
      <nav class="container mx-auto flex flex-col sm:flex-row justify-between items-center py-8">
        <a href="/" class="text-3xl font-bold hover:text-green-400"><span class="text-green-400 hover:text-gray-800">thomas</span>mcdonnell</a>
        <div class="sm:mt-o mt-2">
          <ul class="uppercase tracking-wide font-bold flex items-center">
            <li class="mr-8"><g-link to="/" class="text-gray-800 hover:text-green-400">Home</g-link></li>
            <li class="mr-8"><g-link to="/about/" class="text-gray-800 hover:text-green-400">About</g-link></li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="flex-grow">
      <slot/>
    </div>
    <svg fill="#edf2f7" viewBox="0 0 1695 57" class="text-fill-primary">
      <path d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1c183.6-.1 344.5 7.3 482.8 22v34H0V23z">
      </path>
    </svg>
    <div class="contact bg-gray-200">
      <div class="container-inner mx-auto py-16 pb-8 text-center text-xl">
        <h2 class="text-2xl font-bold mb-8">Get in Touch & Subscribe</h2>
        <p class="mb-8 text-xl">Feel free to drop me an email if you like my content and think I could help you with a project or
          subscribe to my newsletter and get updated when new content comes out.</p>
        <form action="#">
          <div class="flex flex-col sm:flex-row">
            <input type="email" name="email" placeholder="Your Email" class="font-sans flex-1 bg-background-form rounded sm:rounded-r-none px-4 py-4 leading-normal border border-border-color-green sm:border-r-0 shadow outline-none focus:border-green-600 z-10" required>
            <button class="flex-2 w-40 uppercase bg-green-400 text-white rounded sm:rounded-l-none text-lg py-3 px-8 tracking-wide shadow focus:outline-none hover:bg-green-600 focus:bg-green-600 z-10 w-full sm:w-auto mt-4 sm:mt-0">
              <span>Subscribe</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <footer class="bg-green-400 text-white">
      <div class="container mx-auto flex items-center justify-between py-8">
        <div>Copyright@2019</div>
        <ul class="flex items-center">
          <li class="mr-8">
            <a href="https://www.linkedin.com/in/thomas-mcdonnell-350017149/">
              <font-awesome-icon
                      :icon="['fab', 'linkedin-in']"
                      style="font-size: 1.5rem; color: #fff;"
              />
            </a>
          </li>
          <li class="mr-8">
            <a href="#">
              <font-awesome-icon
                      :icon="['fab', 'facebook-f']"
                      style="font-size: 1.5rem; color: #fff;"
              />
            </a>
          </li>
          <li class="mr-8">
            <a href="https://github.com/ThomasMcDonnell">
              <font-awesome-icon
                      :icon="['fab', 'github-alt']"
                      style="font-size: 1.5rem; color: #fff;"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style src="../main.css"/>
