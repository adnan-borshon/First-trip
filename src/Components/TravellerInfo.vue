<template >
    <div class="container bg-gray-300 md:flex justify-center items-center p-2">
         
        <div class="flex-1 md:mx-20 lg:mx-40 md:grid space-y-3 grid-cols-15 grid-rows-[auto_auto] p-2 gap-3 md:p-2">

         <!-- Tabs -->
      <div class=" md:col-span-10 text-sm  justify-between flex row-span-1 md:grid grid-cols-4 rounded-lg md:rounded-full bg-white md:bg-gray-100">
        <!-- 1. Traveller Info always enabled -->
        <label
          class="text-center  px-3 py-2 md:p-4 rounded-lg md:rounded-full cursor-pointer"
          :class="Status==='TravelerInfo'
            ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128]'
            : ''"
          @click="tryTab('TravelerInfo')"
        >
          Traveller Info
        </label>

        <!-- 2. Add-ons only after Traveller Info -->
        <label
          :class="[
            'text-center px-3 py-2 md:p-4 rounded-lg md:rounded-full cursor-pointer',
            Status==='AddOns' 
              ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128] '
              : ''
          ]"
          @click="tryTab('AddOns')"
        >
          Add-ons
        </label>

        <!-- 3. Payment Info only after Add-ons -->
        <label
          :class="[
            'text-center  px-3 py-2 md:p-4 rounded-lg md:rounded-full cursor-pointer',
            Status==='Payment'
              ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128] '
              : Status==='AddOns'
                ? 'cursor-pointer hover:bg-gray-100'
                : ''
          ]"
          @click="tryTab('Payment')"
        >
          Payment Info
        </label>

        <!-- 4. Preview only after Payment Info -->
        <label
          :class="[
            'text-center px-3 py-2 md:p-4 rounded-lg md:rounded-full cursor-pointer',
            Status==='preview'
              ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128] '
              : Status==='Payment'
                ? 'cursor-pointer hover:bg-gray-100'
                : ''
          ]"
          @click="tryTab('preview')"
        >
          Preview
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
    class="p-6  md:col-span-10   bg-white rounded-xl">
<ContactInfo/> 
 
</div>
   <div
   v-else-if="Status==='AddOns'"
   class="p-2  md:col-span-10 bg-white rounded-xl">
<AddOns/> 
 
</div>
    <div class=" md:col-span-5 row-span-3  md:sticky md:top-4 self-start">

        <FareSummary/>
    </div>
    <div class="  md:col-span-10 md:row-start-3 flex justify-center md:justify-end py-2 px-3">
        <button
          @click="saveAndContinue"
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


const Status      = ref('TravelerInfo');

const totalTime = 30 * 60;    
const timeLeft  = ref(totalTime);


// router for navigation
const router = useRouter()



function tryTab(tab) {
  // switch the status
  Status.value = tab

  // route‐name mapping
  const map = {
    TravelerInfo: 'TravelerInfo',
    AddOns:       'AddOns',
    Payment:      'PaymentInfo',
    preview:      'Preview'
  }

  // navigate
  router.push({ name: map[tab] })
}



function saveAndContinue() {
  if (!isTravelerComplete.value) {
    return alert('Please complete all Traveller Info before continuing.')
  }
  // set the UI state
  Status.value = 'AddOns'
  // navigate the URL / router-view
  router.push({ name: 'AddOns' })
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
