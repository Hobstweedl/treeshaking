import '@fortawesome/fontawesome-free/css/all.css';
import Vuetify from 'vuetify/lib'
import Vue from 'vue'

Vue.use(Vuetify)

const opts = {
  theme: { disable: true },
}
export default new Vuetify(opts)
