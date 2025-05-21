<template>
<div class="contactInfo space-y-8 overflow-hidden">


      <div class="flex gap-4 items-center justify-start ">
        <h1 class="lg:text-lg font-semibold">Traveller</h1>
        <span class="lg:px-4 lg:py-2 p-2 text-xs lg:text-sm border rounded-xl">Adult</span>
        <span class="text-white bg-green-700 rounded-xl text-xs text-center lg:text-sm p-2 lg:px-4 lg:py-2">Primary Traveller</span>
        <div class="flex bg-gray-50 rounded-xl text-xs text-center lg:text-sm p-2 lg:px-4 lg:py-2 items-center">
            <span >Saved Traveller</span>
            <img src="" alt="">
        </div>
      </div>
    <!-- Personal Info Header -->
    <div>
      <h2 class="lg:text-xl font-semibold">
        Personal Info
        <span class=" text-xs lg:text-sm font-normal text-gray-500">
          As mentioned on your passport or government approved IDs
        </span>
      </h2>
      <div class="mt-2 flex space-x-3">
        <button
          v-for="opt in ['Mr.', 'Mrs.', 'Ms.']"
          :key="opt"
          @click="salutation = opt"
          :class="[
            'flex items-center cursor-pointer space-x-1 px-4 py-2 border rounded-lg',
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
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
      <div class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
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


</template>


<script setup>
import man from '../assets/Icons/man.png';
import woman from '../assets/Icons/woman.png';
import { ref, computed } from 'vue';


const countryCodes = [
  { code: '+880', label: '🇧🇩 +880' },
  { code: '+1',   label: '🇺🇸 +1'   },
  { code: '+44',  label: '🇬🇧 +44'  },
 
];


const countryCode = ref(countryCodes[0].code);
const mobile      = ref('');
const email       = ref('');



const salutation  = ref('Mr.');
const firstName   = ref('');
const surname     = ref('');
const dob         = ref('');
const nationality = ref('');
const ffNumber    = ref('');
const addToList   = ref(false);


</script>