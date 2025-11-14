import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: ()=>import("./views/index.vue") },
    { path: '/values', component: ()=>import("./views/values.vue") },
    { path: '/departments', component: ()=>import("./views/departments.vue") },
    { path: '/on-chain', component: ()=>import("./views/on-chain.vue") },
    { path: '/links', component: ()=>import("./views/links.vue") },
    { path: '/connect', component: ()=>import("./views/connect.vue") },
    { path: '/join', component: ()=>import("./views/join.vue") },
  ],
})

export default router
