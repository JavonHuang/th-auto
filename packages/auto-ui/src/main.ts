import { createApp } from 'vue'
import drag from "@/tool/drag.ts"

import './style.css'
// import ThUI from 'th-ui-plus'
import ThUI, { thCreateApp } from 'th-ui-plus'
import ThUIMobile from 'th-ui-mobile'
import AutoUI from '@/components/index'

// import 'th-ui-plus/lib/src/index.css'

import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// import DBelement from "@/components/index"

import Main from '@/main.vue'
console.log(import.meta.env)
import { router } from '@/router/index'
import pinia from '@/store/index'
const app=thCreateApp(Main)
app.directive('drag', drag)

app.use(ElementPlus)
// app.use(DBelement)
app.use(ThUI)
app.use(ThUIMobile)
app.use(AutoUI)
app.use(pinia).use(router).mount('#app')