import type { RouterConfig } from "@nuxt/schema";
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => [
    ..._routes,
    {
      name: "generator",
      path: "/:type",
      component: () =>
        import("../pages/generator.vue").then((m) => m.default || m),
    },
  ],
};
