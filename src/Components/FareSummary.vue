<template>
<div class="container grid grid-rows-3 bg-white rounded-xl mb-3">
    <div class="row-span-2 gap-3 grid grid-rows-2 px-4 py-2 ">
        <div class="flex flex-col ">
            <h2 class="font-semibold">Fare Summary</h2>
            <div class="flex justify-center items-center">
                <span>DAC->CXB | CXB ->DAC</span>
                <img :src="plane" class="h-11 w-11 rounded-full">
            </div>
            <span class="text-gray-500 text-sm">Round Trip</span>
        </div>
        <div class="space-y-2">
            <div class="flex justify-between">
                <div class="flex justify-start items-center">
                    <span>Air Fare</span>
                    <img :src="down_arrow" class="h-4 w-4">

                </div>

                <span class="text-sm">BDT 10,398</span>

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
<div class="w-full bg-[#fff5f6] row-span-1 rounded-b-lg">
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
</script>