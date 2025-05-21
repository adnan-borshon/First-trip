<template>
  <div class="p-4 ">
    <!-- Coupon section -->
     <div class="p-2  lg:mb-3">
        <h1 class="text-xl font-bold">Coupon, Offers and Discounts</h1>
     </div>
    <div class="flex flex-col">
    <span class="text-sm mb-2 mx-3 lg:my-1">Already have a coupon code?</span>
    <div class="lg:flex gap-2 space-y-3 lg:space-y-0 items-center ">

        <input
        v-model="couponCode"
        type="text"
        placeholder="Enter a Coupon Code"
        class="flex-1 w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
        :disabled="!hasCoupon"
        
        :class="[
            'rounded-full px-6 py-2 font-semibold transition-opacity duration-200',
            hasCoupon
            ? 'bg-[#d82128] text-white hover:opacity-80 cursor-pointer'
            : 'bg-[#d82128] text-white opacity-30 cursor-not-allowed'
        ]"
      >
      Apply Coupon
    </button>
</div>  
</div>

    <!-- Available offers (just for context) -->
    <div class="space-x-4 lg:flex space-y-3 lg:space-y-0 my-5">
      <div 
      @click="couponBtn='first'"
      :class="couponBtn === 'first' ? 'border-red-400':''"
      class="cursor-pointer flex-1 w-full rounded-full border border-gray-200 px-4 py-2 flex items-center justify-between">
        <span class="font-bold text-[#d82128]">FTNVDOM</span>
        <span class=" text-sm text-gray-500">Up to 07% Discount</span>
      </div>
      <div 
      @click="couponBtn='second'"
      :class="couponBtn === 'second' ? 'border-red-400':''"
      class=" cursor-pointer flex-1 w-full rounded-full border border-gray-300 px-4 py-2 flex items-center justify-between">
        <span class="font-bold text-[#d82128]">FTEIDDOM21</span>
        <span class=" text-sm text-gray-500">Up to 21%</span>
      </div>
    </div>

    <!-- Payment methods grid -->
     <h1 class="font-semibold mb-3 p-2">Payment Methods</h1>
    <div class="flex gap-4 flex-wrap px-2">
      <div
        v-for="method in paymentMethods"
        :key="method.name"
        class="h-12 w-12 border border-gray-300 rounded-lg flex items-center justify-center"
      >
        <!-- only render <img> if there's a src, otherwise leave it blank -->
        <img
          v-if="method.src"
          :src="method.src"
          :alt="method.name"
          class="h-full w-full object-contain"
        />
      </div>
    </div>

    <!-- EMI option -->
       <h1 class="font-semibold my-3 p-2">EMI Options</h1>
    <div class="flex gap-4 flex-wrap px-2">
      <div
        v-for="method in EmiOptions"
        :key="method.name"
        class="h-12 w-12 border border-gray-300 rounded-lg flex items-center justify-center"
      >
        <!-- only render <img> if there's a src, otherwise leave it blank -->
        <img
          v-if="method.src"
          :src="method.src"
          :alt="method.name"
          class="h-full w-full object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const couponCode = ref('')
const hasCoupon = computed(() => couponCode.value.trim().length > 0)

const couponBtn = ref('');

const paymentMethods = [
  { name: 'EBL',    src: '' }, // empty – slot reserved
  { name: 'VISA',   src: '' },
  { name: 'MASTERCARD', src: '' },
  { name: 'AMEX',   src: '' },
  { name: 'BKASH',  src: '' },
  { name: 'ROCKET', src: '' },
]


const EmiOptions = [
  { name: 'EBL',    src: '' }, // empty – slot reserved
  { name: 'VISA',   src: '' },
  { name: 'MASTERCARD', src: '' },
  { name: 'AMEX',   src: '' },
  { name: 'BKASH',  src: '' },
  { name: 'ROCKET', src: '' },
]
</script>


