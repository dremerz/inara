export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Middleware: default");

  useNuxtApp().hook("page:finish", () => {
    if (history.state.scroll) {
      setTimeout(
        () => document.getElementById("__nuxt").scrollTo(history.state.scroll),
        0
      );
    } else {
      setTimeout(() => document.getElementById("__nuxt").scrollTo(0, 0), 0);
    }
  });
});
