import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import Home from "./views/Home";
import BookRequest from "./views/BookRequest";
import BookOffers from "./views/BookOffers";
import Events from "./views/Events";
import Members from "./views/Members";
import Groups from "./views/Groups";
import HowItWorks from "./views/HowItWorks";
import AboutUs from "./views/AboutUs";

Vue.use(VueRouter);

import "./scss/main.scss";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/bookrequest", component: BookRequest },
    { path: "/bookoffers", component: BookOffers },
    { path: "/events", component: Events },
    { path: "/members", component: Members },
    { path: "/groups", component: Groups },
    { path: "/howitworks", component: HowItWorks },
    { path: "/aboutus", component: AboutUs },
  ],
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
