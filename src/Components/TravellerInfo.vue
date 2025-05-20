<template>
    <div class="container bg-gray-300 flex flex-col justify-center items-center">
         
        <div class="grid grid-cols-13 grid-rows-[auto_auto] gap-3 p-2">

            <!-- Tabs -->
            <div class="col-span-10  row-span-1 grid grid-cols-4 rounded-full bg-gray-50">
      <label
        class="text-center p-3 cursor-pointer rounded-full"
         :class="Status === 'TravelerInfo'
          ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128]'
          : ''"
      >
        <input
          type="radio"
          name="PaymentStatus"
          v-model="Status"
          value="TravelerInfo"
          class="hidden"
        
        />
        1. Traveller Info
      </label>

      <label
        class="text-center p-3 cursor-pointer rounded-full"
         :class="Status === 'AddOns'
          ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128]'
          : ''"
      >
        <input
          type="radio"
          name="PaymentStatus"
          v-model="Status"
          value="AddOns"
          class="hidden"
        />
        2. Add-ons
      </label>

      <label
        class="text-center p-3 cursor-pointer rounded-full"
        :class="Status === 'Payment'
          ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128]'
          : ''"
      >
        <input
          type="radio"
          name="PaymentStatus"
          v-model="Status"
          value="Payment"
          class="hidden"
        />
3. Payment Info      </label>
 <label
        class="text-center p-3 cursor-pointer rounded-full"
          :class="Status === 'preview'
          ? 'bg-[#f9dcde] text-[#d82128] border-[#d82128]'
          : ''"
      >
        <input
          type="radio"
          name="PaymentStatus"
          v-model="Status"
          value="preview"
          class="hidden"
        
        />
4. Preview      </label>
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


   
            <div class="flex justify-between">
                <div class="flex  space-x-3">
                    <h1 class="font-semibold ">Traveller 1</h1>
                    
                    <div class=" flex px-4 py-1 items-center bg-gray-50 border rounded-full">Adult</div>
                    <div class="hidden text-white bg-green-700 rounded-full md:flex items-center px-4  ">Primary Traveller</div>
                    <div class="px-4 bg-gray-50 flex items-center rounded-full">Saved Traveller</div>
                </div>
            </div>
            <div class="flex gap-2 items-center my-3">

                <h1 class="text-lg font-semibold">Personal Info</h1>
                <p class="text-xs text-gray-500">As mentioned on your passport or goverment approved IDs </p>
            </div>

            <div class="flex gap-4 ">
                <div class="flex gap-2 border rounded-xl px-2 py-1 w-max cursor-pointer">
                    <img :src="man"  class="h-5 w-5">
                    <span>Mr.</span>
                </div>
                 <div class="flex gap-2 border rounded-xl px-2 py-1 w-max cursor-pointer">
                    <img :src="woman"  class="h-5 w-5">
                    <span>Mrs.</span>
                </div>
               <div class="flex gap-2 border rounded-xl px-2 py-1 w-max cursor-pointer">
                    <img :src="woman"  class="h-5 w-5">
                    <span>Ms.</span>
                </div>
            </div>

            <div class="grid grid-rows-2 grid-cols-2">
                <div>sda</div>
               
            </div>





    </div> -->

    <div class="p-6 col-span-10  space-y-8 bg-white rounded-xl">
    <!-- Personal Info Header -->
    <div>
      <h2 class="text-xl font-semibold">
        Personal Info
        <span class="text-sm font-normal text-gray-500">
          As mentioned on your passport or government approved IDs
        </span>
      </h2>
      <div class="mt-2 flex space-x-3">
        <button
          v-for="opt in ['Mr.', 'Mrs.', 'Ms.']"
          :key="opt"
          @click="salutation = opt"
          :class="[
            'flex items-center space-x-1 px-4 py-2 border rounded-lg',
            salutation === opt
              ? 'bg-[#f9dcde] border-[#d82128] text-[#d82128]'
              : 'bg-white border-gray-300 text-gray-700'
          ]"
        >
          <!-- replace with your icon -->
          <div class="h-5 w-5  rounded-full">
            <img 
            v-if="opt==='Mr.'"
            :src="man" >
            <img 
            v-else
            :src="woman" >
          </div>
          <span>{{ opt }}</span>
        </button>
      </div>
    </div>

    <!-- Personal Info Form -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- First Name -->
      <div>
        <label class="block text-sm font-medium mb-1">
          Given Name / First Name<span class="text-red-500">*</span>
        </label>
        <input
          v-model="firstName"
          type="text"
          placeholder=""
          class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <!-- Surname -->
      <div>
        <label class="block text-sm font-medium mb-1">
          Surname<span class="text-red-500">*</span>
        </label>
        <input
          v-model="surname"
          type="text"
          placeholder=""
          class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <!-- Date of Birth -->
      <div>
        <label class="block text-sm font-medium mb-1">
          Date of Birth<span class="text-red-500">*</span>
        </label>
        <input
          v-model="dob"
          type="date"
          class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <!-- Nationality -->
      <div>
        <label class="block text-sm font-medium mb-1">
          Nationality<span class="text-red-500">*</span>
        </label>
        <select
          v-model="nationality"
          class="w-full border border-gray-300 rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-300"
        >
          <option value="" disabled>Select nationality</option>
          <option>Bangladeshi</option>
          <option>Other…</option>
        </select>
      </div>
    </div>

    <!-- Contact Info -->
    <div>
      <h2 class="text-xl font-semibold">
        Contact Info
        <span class="text-sm font-normal text-gray-500">
          For booking confirmation & updates
        </span>
      </h2>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Mobile -->
      <div>
        <label class="block text-sm font-medium mb-1">
          Mobile<span class="text-red-500">*</span>
        </label>
 
        <div class="flex border border-gray-300 rounded-lg overflow-hidden h-12">
        
          <select
            v-model="countryCode"
            class="flex-shrink-0 px-3 border-r border-gray-300 bg-white focus:outline-none"
          >
            <option
              v-for="opt in countryCodes"
              :key="opt.code"
              :value="opt.code"
            >
              {{ opt.label }}
            </option>
          </select>
           <input
            v-model="mobile"
            type="tel"
            placeholder="Enter phone number"
            class="flex-1 h-full px-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        </div>
             <!-- Email -->
      <div>
        <label class="block text-sm font-medium mb-1">
          Email Address<span class="text-red-500">*</span>
        </label>
        
        <input
          v-model="email"
          type="email"
          placeholder="you@example.com"
          class="w-full border border-gray-300 rounded-lg h-12 px-3
                 focus:ring-2 focus:ring-blue-300"
        />
      </div>
      </div>
    </div>

    <!-- Frequent Flyer Program -->
    <div>
      <h2 class="text-xl font-semibold">
        Frequent Flyer Program
        <span class="text-sm font-normal text-gray-500">(Optional)</span>
      </h2>
      <div class="mt-2">
        <input
          v-model="ffNumber"
          type="text"
          placeholder="Frequent Flyer Number"
          class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-300"
        />
      </div>
    </div>

    <!-- Add to Traveller List -->
    <div class="flex items-center">
      <input
        id="add-list"
        type="checkbox"
        v-model="addToList"
        class="h-4 w-4 text-red-600 border-gray-300 rounded"
      />
      <label for="add-list" class="ml-2 text-sm text-gray-700">
        Add to My Traveller List
      </label>
    </div>
  </div>
    <div class=" col-span-3 row-span-3 sticky ">

        <FareSummary/>
    </div>
          <div
      class="col-span-10    /* right column */
             row-start-3    /* third row */
             flex justify-end "
    >
      <router-link
        to="/AddOns"
        class="bg-[#d82128]
               text-white
               font-semibold
               px-30 py-3
               rounded-full
               hover:opacity-80
               transition-opacity duration-200"
      >
        Save & Continue
      </router-link>
    </div>
       
  </div>

  
       <!-- <div class=" py-2 px-3 w-1/2">
        <router-link
        to="/TravelerInfo"
          class="bg-[#d82128] flex justify-center px-2 w-full py-1 rounded-full font-semibold text-white transform duration-200 ease-in hover:opacity-80"
          >Select</router-link
        >
      </div> -->
 
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import Clock from '../assets/Icons/clock.png';
import man from '../assets/Icons/man.png';
import woman from '../assets/Icons/woman.png';
import FareSummary from './FareSummary.vue';


const countryCodes = [
  { code: '+880', label: '🇧🇩 +880' },
  { code: '+1',   label: '🇺🇸 +1'   },
  { code: '+44',  label: '🇬🇧 +44'  },
 
];


const countryCode = ref(countryCodes[0].code);
const mobile      = ref('');
const email       = ref('');


const Status      = ref('TravelerInfo');
const salutation  = ref('Mr.');
const firstName   = ref('');
const surname     = ref('');
const dob         = ref('');
const nationality = ref('');
const ffNumber    = ref('');
const addToList   = ref(false);


const totalTime = 30 * 60;    
const timeLeft  = ref(totalTime);

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
