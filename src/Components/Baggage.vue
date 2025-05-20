<template>
    <div class="container grid auto-rows-min gap-3">
   <!-- checkbox -->
        <div class="flex  gap-1">
            <label class="text-[#d82128] cursor-pointer  font-semibold text-lg">
                <input 
                class="accent-[#d82128]"
                type="radio" name="planeStatus"
                 value="depart"
          v-model="planeStatus" >
                DAC - CXB (Depart)
            </label>
             <label class="text-[#d82128] cursor-pointer  font-semibold text-lg">
                <input 
                class="accent-[#d82128]"
                type="radio" name="planeStatus" 
                 value="return"
          v-model="planeStatus">
                CXB - DAC (Return)
            </label>

        </div>
    <div class="grid grid-cols-[auto_2fr_2fr] font-semibold auto-rows-min gap-2 rounded-lg overflow-hidden">
  
  <div class="font-normal bg-gray-100 px-4 py-2">FLight</div>
  <div class="flex flex-col font-normal bg-gray-100 px-4 py-2">
    <span>Cabin</span>
    <span class="font-semibold">Adult</span>
  </div>
  <div class="flex flex-col  font-normal bg-gray-100 px-4 py-2">
    <span>Checked-in</span>
    <span class="font-semibold">Adult</span>
  </div>

  <div class="px-4 py-2 flex flex-col bg-gray-50">
    <span>Economy</span>
    <span class="text-gray-500 ">DAC-CXB</span>
  </div>
  <div class="px-4 py-2 text-gray-500 bg-gray-50">7 kg</div>
  <div class="px-4 py-2 flex space-x-2 bg-gray-50">
   <span class="text-gray-500 ">20 kg</span>
  </div>


</div>
<div class="flex gap-1 items-center">
    <img :src="exm_sign"  class="h-5 w-5">
    <span >Every metric is counted per traveler</span>

</div>

    </div>
</template>

<script setup>
import { ref } from "vue";
import exm_sign from "../assets/Icons/exm-sign.svg"

const planeStatus = ref('depart');
</script>