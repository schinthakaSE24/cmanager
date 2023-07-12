import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ContactManager from '../views/ContactManager.vue';
import EditContact from '../views/EditContact.vue';
import AddContact from '../views/AddContact.vue';
import ViewContact from '../views/ViewContact.vue';
import PageNotFound from '../views/PageNotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ContactManager',
      component: ContactManager
    },
    {
      path: '/Edit/:Id',
      name: 'EditContact',
      component: EditContact
    },

    {
      path: '/View/:Id',
      name: 'ViewContact',
      component: ViewContact
    },

    {
      path: '/Add',
      name: 'AddContact',
      component: AddContact
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFound
    }



  ]
})

export default router
