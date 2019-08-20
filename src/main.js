// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/themes/prism.css'
import 'vue-social-sharing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedinIn, faWhatsapp, faReddit, faGithub, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faPython, faJs, faVuejs, faAngular, faPhp, faLaravel, faBootstrap, faSass, faDocker, faLinux, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component

  // Third party packages
  Vue.use(SocialSharing);

  library.add( faFacebookF, faTwitter, faLinkedinIn, faWhatsapp, faReddit, faGithub, faPinterest,
                faPython, faJs, faVuejs, faAngular, faPhp, faLaravel, faBootstrap, faSass, faDocker,
                faLinux, faCss3, faHtml5, faSmile
      );
  Vue.component('font-awesome-icon', FontAwesomeIcon);
  Vue.config.productionTip = false;

  Vue.component('Layout', DefaultLayout);
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:400,700'
  })
}
