import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from "../views/HeroView"
import OurCoffeeView from "../views/OurCoffeeView"
import ForYourPleasure from "../views/ForYourPleasure"
import ContactUs from "../views/ContactUs"
import ThankYouPage from "../views/ThankYouPage"
import GoodsItemView from "../views/GoodsItemView"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/for-your-pleasure', component: ForYourPleasure },
  { path: '/contact-us', component: ContactUs },
  { path: '/thank-you-page', component: ThankYouPage },
  { name: 'coffee', path: '/our-coffee/:id', component: GoodsItemView },
  { name: 'goods', path: '/for-your-pleasure/:id', component: GoodsItemView },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router