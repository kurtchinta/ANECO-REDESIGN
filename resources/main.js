import { createApp, defineAsyncComponent } from 'vue'

const app = createApp({
  template: `
    <div>
      <component 
        v-for="(Comp, name) in pages" 
        :is="Comp" 
        :key="name" 
      />
    </div>
  `,
  data() {
    return {
      pages: {}
    }
  },
  async created() {
    const modules = import.meta.glob('./pages/*.vue')
    const loadedPages = {}
    for (const path in modules) {
      const name = path.split('/').pop().replace('.vue', '')
      loadedPages[name] = defineAsyncComponent(modules[path])
    }
    this.pages = loadedPages
  }
})

app.mount('#app')
