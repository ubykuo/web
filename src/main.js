import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueCarousel from 'vue-carousel'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faFacebook, faTwitter, faInstagram, faGithub, faMedium, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import 'bootstrap-sass-grid'

Vue.use(VueResource)
Vue.use(VueCarousel)

library.add(faFacebook, faTwitter, faInstagram, faGithub, faMedium, faLinkedin, faBars)

Vue.component('icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
