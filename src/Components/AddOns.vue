<template>
  <div class=" rounded-xl divide-y divide-gray-200  overflow-hidden w-full">
    <!--  WHEEL CHAIR SECTION  -->
      <div class=" bg-white">

     
    <button
      @click="openWheelMain = !openWheelMain"
      class="w-full flex justify-between cursor-pointer items-center px-6 py-4 "
    >
      <div>
        <h2 class="text-xl text-start font-semibold">Wheel Chair</h2>
        <p class="mt-1 text-sm text-gray-600">
          Wheelchair services are available if provided by the airline, subject to availability.
        </p>
      </div>
      <svg
        :class="{ 'transform rotate-180': openWheelMain }"
        class="h-5 w-5 text-gray-500 transition-transform"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div v-show="openWheelMain">
      <!-- Traveller Accordion -->
      <div class="px-5 py-4">
        <button

          @click="openWheel = !openWheel"
          class="w-full p-5 rounded-t-lg border-gray-300 border flex justify-between items-center"
        >
          <div>
            <p class="text-xs text-start text-gray-500">For Traveller 1</p>
            <h3 class="text-lg font-bold">adnan borshon</h3>
          </div>
          <svg
            :class="{ 'transform rotate-180': openWheel }"
            class="h-5 w-5 text-gray-500 transition-transform"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div v-show="openWheel" class="space-y-4 p-5 border border-gray-300 rounded-b-lg">
          <div class="space-y-2">
            <label class="flex items-center space-x-2">
              <input
                type="radio"
                name="wheelchair"
                value="none"
                v-model="selectedWheel"
                class="text-red-600 focus:ring-red-500"
              />
              <span :class="selectedWheel === 'none' 
                ? 'text-red-600 font-medium' 
                : 'text-gray-700'">
                None
              </span>
            </label>

            <label class="flex items-center space-x-2">
              <input
                type="radio"
                name="wheelchair"
                value="wheelchair"
                v-model="selectedWheel"
                class="text-gray-600 focus:ring-gray-500"
              />
              <span :class="selectedWheel === 'wheelchair' 
                ? 'text-red-600 font-medium' 
                : 'text-gray-700'">
                Wheel Chair
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
 </div>


 <div class=" bg-white">

 
    <!-- TRAVEL INSURANCE SECTION  -->
    <button
      @click="openInsMain = !openInsMain"
      class="w-full flex cursor-pointer justify-between items-center px-6 py-4 "
    >
      <div>
        <h2 class="text-xl text-start font-semibold">Travel Insurance</h2>
        <p class="mt-1 text-sm text-gray-600">
          Protect your trip with our comprehensive insurance options.
        </p>
      </div>
      <svg
        :class="{ 'transform rotate-180': openInsMain }"
        class="h-5 w-5 text-gray-500 transition-transform"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div v-show="openInsMain">
      <!-- Traveller Accordion -->
      <div class="px-5 py-4">
        <button
          @click="open = !open"
          class="w-full flex justify-between items-center rounded-t-lg border border-gray-300 p-5"
        >
          <div>
            <p class="text-xs text-start text-gray-500">For Traveller 1</p>
            <h3 class="text-lg font-bold">adnan borshon</h3>
          </div>
          <svg
            :class="{ 'transform rotate-180': open }"
            class="h-5 w-5 text-gray-500 transition-transform"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div v-show="open" class="rounded-b-lg space-y-4 border border-gray-300 p-5">
          <!-- Radio options -->
          <div class="space-y-2">
            <label class="flex items-center space-x-2">
              <input
                type="radio"
                name="insurance"
                value="none"
                v-model="selected"
                class="text-red-600 focus:ring-red-500"
              />
              <span class="text-red-600 font-medium">I do not need insurance</span>
            </label>

            <label class="flex items-center space-x-2">
                <div class="">

                    <input
                    type="radio"
                    name="insurance"
                    value="domestic"
                    v-model="selected"
                    class="text-gray-600 focus:ring-gray-500"
                    />
                    
                    
                    <span class="text-gray-700">Domestic</span>
                    <img :src="insurance" class="w-full shadow rounded-xl" />
                    
                </div>
                </label>

   
          </div>

          <!-- Details card -->
          <div
            v-if="selected === 'domestic'"
            class="p-4 bg-gray-50  shadow rounded-lg space-y-4"
          >
            <div class="flex justify-between items-center">
              <span class="text-teal-600 font-semibold">BDT 10 per person</span>
              <span class="text-xs uppercase text-gray-500">bimafy</span>
            </div>

            <ul class="space-y-1 text-sm text-gray-700">
              <li>24 hours coverage from the departure date</li>
              <li>Applicable for travelers aged between 6 months to 65 years</li>
            </ul>

            <div class="grid grid-cols-3 gap-4 mt-2">
              <!-- Accidental Injuries -->
              <div class="flex items-center space-x-2">
                <img src="" alt="Accidental Injuries" class="h-6 w-6" />
                <div>
                  <p class="text-xs text-gray-500">Accidental Injuries:</p>
                  <p class="font-medium">$500</p>
                </div>
              </div>

              <!-- Hospitalization -->
              <div class="flex items-center space-x-2">
                <img src="" alt="Hospitalization" class="h-6 w-6" />
                <div>
                  <p class="text-xs text-gray-500">Hospitalization:</p>
                  <p class="font-medium">$500</p>
                </div>
              </div>

              <!-- Ambulance & Outdoor Visits -->
              <div class="flex items-center space-x-2">
                <img src="" alt="Ambulance & Outdoor Visits" class="h-6 w-6" />
                <div>
                  <p class="text-xs text-gray-500">Ambulance & Outdoor Visits:</p>
                  <p class="font-medium">$200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- Footer -->
    <div class="bg-white row-span-1 px-6 py-4 border-t border-gray-300 text-sm text-gray-600">
      By adding travel insurance, you are agreeing to the
      <a href="#" class="text-blue-600 underline">Terms and Conditions</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import insurance from '../assets/Icons/insurance.webp'

const openWheelMain    = ref(false)
const openWheel        = ref(false)
const selectedWheel    = ref('none')

const openInsMain      = ref(false)
const open             = ref(false)
const selected         = ref('none')
</script>
