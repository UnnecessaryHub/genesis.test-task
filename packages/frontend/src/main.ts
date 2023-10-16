import                        './style.css'

import { createPinia }   from 'pinia'
import { LoadingBar }    from 'quasar'
import { Notify }        from 'quasar'
import { Quasar }        from 'quasar'
import langRu            from 'quasar/lang/ru'
import { createApp }     from 'vue'
import { createVuetify } from 'vuetify'
import * as components   from 'vuetify/components'
import * as directives   from 'vuetify/directives'

import App               from './App.vue'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light'
  }
})

createApp(App)
  .use(Quasar, {
    plugins: {
      LoadingBar,
      Notify
    },
    lang: langRu
  })
  .use(vuetify)
  .use(createPinia())
  .mount('#app')
