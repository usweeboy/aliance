import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '../components/pages/HomePage'
import AboutCompanyPage from '../components/pages/AboutCompanyPage'
import ContractProductPage from '../components/pages/ContractProductPage'
import OwnProductPage from '../components/pages/OwnProductPage'
import ProductAGTechPage from '../components/pages/ProductAGTechPage'
import ProductApPage from '../components/pages/ProductApPage'
import ContactPage from '../components/pages/ContactPage'
import PoliticsPage from '../components/pages/PoliticsPage'
import BlogPage from '../components/pages/BlogPage'
import BlogOnePage from '../components/pages/BlogOnePage'
import BlogTwoPage from '../components/pages/BlogTwoPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about-company', component: AboutCompanyPage },
  { path: '/contract-product', component: ContractProductPage },
  { path: '/own-product', component: OwnProductPage },
  { path: '/product-agtech', component: ProductAGTechPage },
  { path: '/product-ap', component: ProductApPage },
  { path: '/contact', component: ContactPage },
  { path: '/politics', component: PoliticsPage },
  { path: '/blog', component: BlogPage },
  { path: '/blog-one', component: BlogOnePage },
  { path: '/blog-two', component: BlogTwoPage },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})


export default router