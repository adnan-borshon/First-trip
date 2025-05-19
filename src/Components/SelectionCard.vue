<template>

     <div class="row-start-4  grid grid-cols-3 gap-1 m-2 rounded-lg p-2 bg-white" >
        <div class=" col-span-2 h-max border-r border-dashed border-gray-400 p-1">
            <!-- refund and seat left section -->
            <div class="flex justify-between">
                <div class="px-2 py-1 text-xs font-semibold flex items-center rounded-lg bg-[#f9dcde] text-[#d82128] ">
                <img :src="taka"  class="h-5 w-5 rounded-lg">
                <span>Partially Refundable</span>
                </div>
                <div class="px-2 py-1 text-xs font-semibold  flex items-center rounded-lg bg-[#f9dcde] text-[#d82128] border border-[#d82128]">
                    <img :src="seat"  class="h-4 w-4">
                    <span>5 seat(s) left</span>
                </div>
            </div>
            <!-- time table part -->
            <div  class="grid grid-rows-3">
                <div class="row-span-1 flex items-center">

          <img class="h-8 w-8 p-1 rounded-lg" :src="airline" />
          <div class="text-sm font-semibold text-black">US Bangla Airlines</div>
    
                </div>
                <div class="row-span-2 pb-2 grid grid-cols-3 border-b border-dashed border-gray-500 px-2 ">
                    <div class="flex flex-col justify-center items-center">
                        <span class="font-semibold">19:10</span>
                        <span class="text-gray-500">DAC</span>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <span class="font-semibold">1h 5m</span>
                        <img :src="plane">
                        <span class="text-gray-500">Non-stop</span>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <span class="font-semibold">20:10</span>
                        <span class="text-gray-500">CXB</span>
                    </div>
                </div>
            </div>

            <!-- time table 2nd part -->
             <div  class="grid grid-rows-3">
                <div class="row-span-1 flex items-center">

          <img class="h-8 w-8 p-1 rounded-lg" :src="airline" />
          <div class="text-sm font-semibold text-black">US Bangla Airlines</div>
    
                </div>
                <div class="row-span-2 pb-2 grid grid-cols-3 border-b  border-gray-500 px-2 ">
                    <div class="flex flex-col justify-center items-center">
                        <span class="font-semibold">20:45</span>
                        <span class="text-gray-500">CXB</span>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <span class="font-semibold">1h 5m</span>
                        <img :src="plane">
                        <span class="text-gray-500">Non-stop</span>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <span class="font-semibold">21:50</span>
                        <span class="text-gray-500">DAC</span>
                    </div>
                </div>
            </div>
          <!-- View details part -->
            <div class="view-details py-2 px-1">
              <div class=" flex ">
                <div class=" flex-1/3 ">
                 <div class="flex items-center w-max px-2 bg-blue-300 rounded-lg">

                   <img :src="like"  class="h-6 w-6 p-1">
                   <span class="text-xs font-semibold">Recommended</span>
                  </div>
                </div>
                
                <div class="flex pl-6 flex-2/3 items-center">
                  <span class=" text-sm font-semibold  cursor-pointer text-[#d82128]"> View Details</span>
                  <img :src="downs_arrow" class="h-4 w-4 cursor-pointer" >
                </div>
              </div>

            </div>
        </div>
        
        <div class="prices col-span-1 grid grid-rows-[auto_1fr_auto_auto]">
            <!-- voucher part -->
          <div class="row-start-1 flex justify-end items-start">
            <div class="px-2 text-xs font-semibold flex items-center rounded-lg bg-[#f9dcde] text-[#d82128] ">
              <img :src="voucher"  class="h-8 w-8 rounded-lg mr-1">
              <span class="text-xs">FTBGDOM</span>
            </div>
          </div>
          <!-- empty -->
          <div class="row-start-2"></div>
          <!-- price -->
<div class=" row-start-3 flex flex-col justify-end items-end">
  <div class="price font-semibold text-[#d82128]">
    <span class="font-semibold">BDT</span>
    <span class="text-xl font-bold">11,526</span>
  </div>
  <div class="discount-price">
    <span class="line-through decoration-1 decoration-gray-700">BDT 12,897</span>
  </div>
</div>
<div class="row-start-4 py-2 px-3">

  <router-link class=" bg-[#d82128] flex justify-center px-2 w-full py-1 rounded-full font-semibold text-white hover:bg-red-500">Select</router-link>
</div>
        </div>

    </div>
</template>

<script setup>

import seat from "../assets/Icons/seat.png"
import taka from "../assets/Icons/taka.png"
import plane from '../assets/Icons/layover-non-stop.svg'
import like from '../assets/Icons/like.png'
import up_arrow from '../assets/Icons/up-arrow.png';
import downs_arrow from '../assets/Icons/down-arrow.png';
import voucher from '../assets/Icons/voucher.png';
import airline from "../assets/Icons/airline-logo.jpg";
</script>