import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/home",
        name: "home",
        component: () => import("@/layouts/Home.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("../pages/Admin.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
