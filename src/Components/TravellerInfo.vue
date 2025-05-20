<template>
    <div class="container bg-gray-300 flex flex-col justify-center items-center">
         
        <div class="grid grid-cols-13 grid-rows-[auto_auto] gap-3 p-2">

         <!-- Tabs -->
      <div class="col-span-10 row-span-1 grid grid-cols-4 rounded-full bg-gray-50">
        <!-- 1. Traveller Info always enabled -->
        <label
          class="text-center p-3 rounded-full cursor-pointer"
          :class="Status==='TravelerInfo'
            ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128]'
            : ''"
          @click="tryTab('TravelerInfo')"
        >
          1. Traveller Info
        </label>

        <!-- 2. Add-ons only after Traveller Info -->
        <label
          :class="[
            'text-center p-3 rounded-full',
            Status==='AddOns' 
              ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128] cursor-pointer'
              : ''
          ]"
          @click="tryTab('AddOns')"
        >
          2. Add-ons
        </label>

        <!-- 3. Payment Info only after Add-ons -->
        <label
          :class="[
            'text-center p-3 rounded-full',
            Status==='Payment'
              ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128] cursor-pointer'
              : Status==='AddOns'
                ? 'cursor-pointer hover:bg-gray-100'
                : ''
          ]"
          @click="tryTab('Payment')"
        >
          3. Payment Info
        </label>

        <!-- 4. Preview only after Payment Info -->
        <label
          :class="[
            'text-center p-3 rounded-full',
            Status==='preview'
              ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128] cursor-pointer'
              : Status==='Payment'
                ? 'cursor-pointer hover:bg-gray-100'
                : ''
          ]"
          @click="tryTab('preview')"
        >
          4. Preview
        </label>
      </div>

        <!-- time bar -->
    <div class=" col-span-3 row-span-1">
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
    class="p-6 col-span-10   bg-white rounded-xl">
<ContactInfo/> 
 
</div>
   <div
   v-else-if="Status==='AddOns'"
   class=" col-span-10  rounded-xl">
<AddOns/> 
 
</div>
    <div class=" col-span-3 row-span-3 sticky ">

        <FareSummary/>
    </div>
    <div class="col-span-10 row-start-3 flex justify-end py-2 px-3">
        <button
          @click="saveAndContinue"
          class="bg-[#d82128] text-white font-semibold px-6 py-2 rounded-full hover:opacity-80 transition-opacity duration-200"
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
