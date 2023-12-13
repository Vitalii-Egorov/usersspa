import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '@/views/UserList'
import UserItem from '@/views/UserItem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/UserItem/:id',
    name: 'UserItem',
    component: UserItem,
    props: true,
  },
]
const router = new VueRouter({
  routes
})

export default router
