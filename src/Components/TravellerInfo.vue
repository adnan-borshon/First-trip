<template >
    <div class="container shrink-0 bg-gray-300 lg:flex justify-center items-center p-2">
         
        <div class="flex-1  lg:mx-40 lg:grid space-y-3 grid-cols-15 grid-rows-[auto_auto] p-2 gap-3 lg:p-2">

         <!-- Tabs -->
      <div class=" lg:col-span-10 text-sm  justify-between flex row-span-1 lg:grid grid-cols-4 rounded-lg lg:rounded-full bg-white lg:bg-gray-100">
    <label
      v-for="tab in tabs"
      :key="tab.key"
      class="text-center font-bold px-3 py-2 lg:p-4 rounded-lg lg:rounded-full cursor-pointer"
      :class="Status === tab.key
        ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128]'
        : ''"
      @click="tryTab(tab.key)"
    >
      {{ tab.label }}
    </label>
      </div>

        <!-- time bar -->
    <div class="hidden lg:block col-span-5 row-span-1 ">
          <div class=" p-1 space-y-2">
      <div class="flex justify-between">
        <div class="flex">
          <img class="h-6 w-6" :src="Clock" alt="Clock" />
          <h2>Time Remaining</h2>
        </div>
        <span class="font-bold">{{ formattedTime }}</span>
      </div>

      <div class=" overflow-hidden bg-[#f9dcde] w-full h-2 rounded">
        <div
          class="bg-[#d82128] h-full"
          :style="progressBarStyle"
        ></div>
      </div>
    </div>
    </div>


    <div 
    v-if="Status === 'TravelerInfo'"
    class="p-6  lg:col-span-10   bg-white rounded-xl">
<ContactInfo/> 
 
</div>
   <div
   v-else-if="Status==='AddOns'"
   class="p-2  lg:col-span-10 bg-white rounded-xl">
<AddOns/> 
 
</div>


   <div
   v-else-if="Status==='PaymentInfo'"
   class="p-2  lg:col-span-10 bg-white rounded-xl">
<PaymentInfo/> 
 
</div>
    <div class=" lg:col-span-5 row-span-3  lg:sticky lg:top-4 self-start">

        <FareSummary/>
    </div>
    <div class="  lg:col-span-10 lg:row-start-3 flex justify-center lg:justify-end py-2 px-3">
        <button
        
          class="bg-[#d82128] w-max text-white font-semibold px-6 py-2 rounded-full hover:opacity-80 transition-opacity duration-200"
        >
          Save & Continue
        </button>
      </div>
       
  </div>

  
  
 
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import Clock from '../assets/Icons/clock.png';

import FareSummary from './FareSummary.vue';
import { useRouter } from 'vue-router';
import ContactInfo from './ContactInfo.vue';
import AddOns from './AddOns.vue';
import PaymentInfo from './PaymentInfo.vue';



const Status      = ref('TravelerInfo');

const totalTime = 30 * 60;    
const timeLeft  = ref(totalTime);


// router for navigation
const router = useRouter()
const tabs = [
  { key: 'TravelerInfo', label: 'Traveller Info' },
  { key: 'AddOns',       label: 'Add-ons'       },
  { key: 'PaymentInfo',   label: 'Payment Info'  },
  { key: 'preview',       label: 'Preview'       },
]


function tryTab(tab) {
  // switch the status
  Status.value = tab

  // route‐name mapping
  const map = {
    TravelerInfo: 'TravelerInfo',
    AddOns:       'AddOns',
    PaymentInfo:      'PaymentInfo',
    preview:      'Preview'
  }

  // navigate
  router.push({ name: map[tab] })
}




// Computed formatted timer
const formattedTime = computed(() => {
  const m = Math.floor(timeLeft.value / 60);
  const s = timeLeft.value % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
});

// Countdown
onMounted(() => {
  setInterval(() => {
    if (timeLeft.value > 0) timeLeft.value--;
  }, 1000);
});


const progressBarStyle = computed(() => {
  const pct = (timeLeft.value / totalTime) * 100;
  return { width: `${pct}%` };
});
</script>
