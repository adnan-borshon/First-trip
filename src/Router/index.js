
import { createRouter, createWebHistory } from 'vue-router'

import RoundTrip from '../Components/RoundTrip.vue';
import MultiCity from '../Components/MultiCity.vue';
import PaymentInfo from '../Components/PaymentInfo.vue';
import TravelerInfo from '../Components/TravellerInfo.vue';
import AddOns from '../Components/AddOns.vue';
import MainLayout from '../MainLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      
      { path: 'RoundTrip', component: RoundTrip },  
      { path: 'MultiCity', component: MultiCity },
      { path: 'PaymentInfo', component: PaymentInfo },
      { path: 'TravelerInfo', component:  TravelerInfo},
      { path: 'AddOns', component:  AddOns},
 
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
