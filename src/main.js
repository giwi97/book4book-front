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
import Login from "./views/Login";
import Signup from "./views/Signup";
import BookCategory from "./views/BookCategory";
import Editpro from "./views/Editpro";
import TimeL from "./views/TimeL";
import Profile from "./views/Profile";

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
    { path: "/signup", component: Signup },
    { path: "/login", component: Login },
    { path: "/BookCategory", component: BookCategory },
    { path: "/Editpro", component: Editpro },
    { path: "/TimeL", component: TimeL },
    { path: "/Profile", component: Profile },
  ],
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
