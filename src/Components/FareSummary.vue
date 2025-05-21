<template>
<div class="container shrink-0  grid grid-rows-[200px_auto] bg-white rounded-xl mb-3 ">
    <div class=" gap-3 row-span-2 grid grid-rows-1 px-4 py-2 shrink-0">
        <div class="flex flex-col ">
            <h2 class="font-semibold">Fare Summary</h2>
            <div class="flex justify-center items-center">
                <span>DAC->CXB | CXB ->DAC</span>
                <img :src="plane" class="h-11 w-11 rounded-full">
            </div>
            <span class="text-gray-500 text-sm">Round Trip</span>
        </div>
        <div class="space-y-2 ">
            <!-- Airfare part -->
            <div 
            
                 :class="selectAirFare ? 'bg-blue-100 p-2 rounded-xl space-y-3' :''">
            <div class="flex justify-between ">

                <div
                @click="selectAirFare= !selectAirFare"
                
                class="flex justify-start items-center cursor-pointer">
                <span>Air Fare</span>
                <img 
                :class="{ 'transform rotate-180': selectAirFare }"
                :src="down_arrow" class="h-3 w-3">
                
            </div>
            
            <span class=" font-semibold">BDT 10,398</span>
        </div>
        
            <span v-if="selectAirFare">Adult X 1</span>
        
        <div 
        v-if="selectAirFare"
        class="flex justify-between">
            <span class="text-gray-600 ">Base Fair</span>
            <span class="font-semibold">BDT 8,050</span>
        </div>
          <div
          v-if="selectAirFare"
           class="flex justify-between">
            <span class="text-gray-600 ">Tax</span>
            <span class="font-semibold">BDT 2,050</span>
        </div>


            </div>
            <div class="flex justify-between items-center text-[#ff620a]">

                <div class="flex items-center gap-2">
                    <span>Offer</span>
                    <div class="flex p-2 rounded-lg bg-[#ffefe6] gap-1">
                        <span class="font-semibold text-xs">FTBSDOM</span>
                        <img :src="info" class="h-4 w-4">
                    </div>
                </div>

                <span class="font-semibold">BDT 1,046</span>
            </div>

        </div>

    </div>
<div class="w-full bg-[#fff5f6]  rounded-b-lg py-4">
     <div class="grid grid-row-3 px-4 py-1">

            <div >
               <h2 class="font-semibold">Total</h2>

            </div>
            <div class="flex justify-between">
                <span class="text-gray-500">1 Traveller</span>
                   <div class="font-semibold">
                        <span>BDT</span>
                    <span class="text-xl text-red-600">4,676</span>
                </div>
            </div>
            <div class="flex justify-between">
                <span class="text-[#28acb1]">You save</span>
                  <span class="text-[#28acb1] font-semibold">523 BDT</span>
            </div>

            
        </div>
</div>
</div>
</template>

<script setup>
import plane from "../assets/Icons/airline-logo.jpg"
import down_arrow from "../assets/Icons/down-arrow.png"
import up_arrow from "../assets/Icons/up-arrow.png"
import info from "../assets/Icons/exm-sign.svg"
import { ref } from "vue"

const selectAirFare = ref(false)
</script>