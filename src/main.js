import Vue from "vue";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import VueSession from "vue-session";
Vue.use(VueSession)

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
import Feedback from "./views/Feedback";
import ContactUs from "./views/ContactUs"; 
import BookCategory from "./views/BookCategory";
import EbookGroup from "./views/EbookGroup";
import FAQpage from "./views/FAQpage";
import Editpro from "./views/Editpro";
import TimeL from "./views/TimeL";
import Profile from "./views/Profile";
import BookDetails from "./views/BookDetails";
import AddBook from "./views/AddBook";
import NewS from "./views/NewS";


Vue.use(VueRouter);

import "./scss/main.scss";

Vue.use(BootstrapVue);

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
    { path: "/feedback", component: Feedback},
    { path: "/contactus", component: ContactUs},
    { path: "/BookCategory", component: BookCategory },
    { path: "/ebookgroup", component: EbookGroup},
    { path: "/faqpage", component: FAQpage},
    { path: "/Editpro", component: Editpro },
    { path: "/TimeL", component: TimeL },
    { path: "/Profile", component: Profile },
    { path: "/BookDetails", component: BookDetails }, 
    { path: "/AddBook", component: AddBook }, 
    { path: "/NewS", component: NewS }, 
  ],
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),

}).$mount("#app");
