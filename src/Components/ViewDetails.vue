<template>
  <div class="Tabs  flex flex-col w-full  mt-4">

    <!-- tab headers -->
    <div class="tabContainer grid grid-cols-3 ">
      <label
        class="text-center p-3 cursor-pointer rounded-t-lg"
        :class="status === 'flight-details'
          ? 'bg-[#f9dcde] border-b-2 border-[#d82128]'
          : ''"
      >
        <input
          type="radio"
          name="status"
          v-model="status"
          value="flight-details"
          class="hidden"
        />
        Flight Details
      </label>

      <label
        class="text-center p-3 cursor-pointer rounded-t-lg"
        :class="status === 'baggage'
          ? 'bg-[#f9dcde] border-b-2 border-[#d82128]'
          : ''"
      >
        <input
          type="radio"
          name="status"
          v-model="status"
          value="baggage"
          class="hidden"
        />
        Baggage
      </label>

      <label
        class="text-center p-3 cursor-pointer rounded-t-lg"
        :class="status === 'policy'
          ? 'bg-[#f9dcde] border-b-2 border-[#d82128]'
          : ''"
      >
        <input
          type="radio"
          name="status"
          v-model="status"
          value="policy"
          class="hidden"
        />
        Policy
      </label>
    </div>

    <!-- tab contents -->
    <div class="w-full  p-4 bg-white rounded-b-lg border-t-0 border border-gray-200">
      <div v-if="status === 'flight-details'">
        <!-- your Flight Details markup -->
        <FlightDetails/>
      </div>
      <div v-else-if="status === 'baggage'">
        <!-- your Baggage markup -->
       <Baggage/>
      </div>
      <div v-else>
        <!-- your Policy markup -->
        <Policy/>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import FlightDetails from './FlightDetails.vue';
import Baggage from './Baggage.vue';
import Policy from './Policy.vue';


const status = ref('flight-details')  
</script>
