<template>
  <div class="left  bg-transparent space-y-2  lg:grid grid-rows-[auto_auto_auto,1fr] hidden  sticky md:w-1/4">
    <!-- Time Remaining part with changing time and timebar -->
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

    <!-- Departure and Return Times -->
    <template v-if="props.showDepart_return">

   
    
    <div class="flex justify-between items-center p-2 space-x-1 bg-white rounded-full">
      <div class="bg-white flex justify-center items-center shadow-lg rounded-full">
        <img class="h-11 w-11 " :src="left_arrow" >
      </div>
      <div class="text-sm">
        <h1 class="font-semibold">Departure</h1>
        <span>

          20 May, Tuesday
        </span>
      </div>
       <div class="bg-white  flex justify-center items-center shadow-lg rounded-full">
        <img class="h-11  w-11" :src="right_arrow" >
      </div>
    </div>

    <div class="flex justify-between items-center p-2 space-x-1 bg-white rounded-full">
        <div class="bg-white  flex justify-center items-center shadow-lg rounded-full">
        <img class="h-11  w-11" :src="left_arrow" >
      </div>
      <div class="text-sm">
        <h1 class="font-semibold">Return</h1>
        <span>

          20 May, Tuesday
        </span>
      </div>
  <div class="bg-white  flex justify-center items-center shadow-lg rounded-full">
        <img class="h-11  w-11" :src="right_arrow" >
      </div>
    </div>
     </template>
<div class="options bg-white rounded-2xl p-1">


    <!-- Price Range -->
    <div class="price-range">
      <button
        @click="togglePrice"
        class="flex justify-between items-center w-full p-3  rounded"
      >
        <span class="font-medium">Price Range</span>
        <img
          v-if="showPrice"
          :src="up_arrow"
          class="h-5 w-5"
          alt="Up Arrow"
        />
        <img
          v-else
          :src="downs_arrow"
          class="h-5 w-5"
          alt="Down Arrow"
        />
      </button>
      <div v-if="!showPrice" class="mt-3 px-3">
        <input
          type="range"
          min="0"
          max="10000"
          v-model="price"
          class="w-full"
        />
        <div class="text-sm mt-1"> {{ price }}</div>
      </div>
    </div>

    <!-- Stop Dropdown -->
    <DropdownFilter
      title="Stop"
      :options="stopOptions"
      v-model="selectedStops"
    />

    <!-- Airlines Dropdown -->
    <DropdownFilter
      title="Airlines"
      :options="airlinesOptions"
      v-model="selectedAirlines"
    />


    <DropdownFilter
    title="Baggage Policy"
    :options="BaggageOptions"
    v-model="selectedBaggage"
    />
    <DropdownFilter
    title="Refundability"
    :options="RefundOptions"
    v-model="selectedRefund"
    />

    <DropdownFilter
    title="Layover Airports"
     :options="LayoverOptions"
    v-model="selectedLayover"
    />

    <!-- Layover time at airport bar -->
     <div class="layover-time">
      <button
        @click="toggleLayoverTime"
        class="flex justify-between items-center w-full p-3  rounded"
      >
        <span class="font-medium">Layover Time</span>
        <img
          v-if="showLayoverTime"
          :src="up_arrow"
          class="h-5 w-5"
          alt="Up Arrow"
        />
        <img
          v-else
          :src="downs_arrow"
          class="h-5 w-5"
          alt="Down Arrow"
        />
      </button>
      <div v-if="!showLayoverTime" class="mt-3 px-3">
        <input
          type="range"
          min="0"
          max="15"
          v-model="layoverTime"
          class="w-full"
        />
        <div class="text-sm mt-1">   {{ layoverTime }} hr</div>
      </div>
    </div>

       <DropdownFilter
    title="Aircraft"
     :options="AircraftOptions"
    v-model="selectedAircraft"
    />
    

  </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import up_arrow from '../assets/Icons/up-arrow.png';
import downs_arrow from '../assets/Icons/down-arrow.png';
import Clock from '../assets/Icons/clock.png';
import left_arrow from "../assets/Icons/left.png"
import right_arrow from "../assets/Icons/right.png"
import DropdownFilter from './DropdownFilter.vue';
const showPrice = ref(false);
const price = ref(500);
const time = 30 * 60; 
const timeLeft = ref(time);
const layoverTime = ref(0);
const showLayoverTime= ref(false)
const selectedStops = ref([]);
const selectedAirlines = ref([]);
const selectedBaggage = ref([]);
const selectedRefund = ref([]);
const selectedLayover = ref([]);
const selectedAircraft = ref([]);



const props = defineProps({
  showDepart_return: { type: Boolean, default: true }
})


// Computed property for formatted time
const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

// Progress bar style based on time left
const progressBarStyle = computed(() => {
  const percentage = (timeLeft.value / time) * 100;
  return {
    width: `${percentage}%`
  };
});

// Countdown function
onMounted(() => {
  setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    }
  }, 1000)
})

// Function to toggle the price range visibility
function togglePrice() {
  showPrice.value = !showPrice.value;
}
//function for toggling the layover time at airport
function toggleLayoverTime() {
  showLayoverTime.value = !showLayoverTime.value;
}

// demo values

const stopOptions = [
  { label: 'Non-stop', value: 'non-stop' },
  { label: 'Stop', value: 'stop' },
];

const airlinesOptions = [
  { label: 'US Bangla Airlines', value: 'us-bangla', price: '10000 tk' },
  { label: 'Air Astres', value: 'air-astres', price: '10000 tk' },
];

const BaggageOptions= [
    {
        label:'20 Kg', value:"20-kg"
    },
    {
        label: '25 kg', value:'25-kg'
    }
]

const RefundOptions= [
    {
        label:'Partially Refundable', value:"partial-refund"
    }, 
    {
        label:'Full Refundable', value:"full-refund"
    },
  
]
const LayoverOptions= [
    {
        label:'Saidpur Airport', value:"saidpur-airport"
    }
  
]

const AircraftOptions= [
    {
        label:'DH8', value:"dh8"
    }
  
]


</script>





