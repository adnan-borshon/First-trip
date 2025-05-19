<template>
  <div class="right bg-transparent grid-rows-4">
    <div class="p-2 row-start-1">Showing 1016 Flights & 3 Airlines</div>
    
    <!-- CHeapest, Fastest and Earliest card -->
    <div class="row-start-2 grid grid-cols-3 p-2 space-x-2 bg-transparent">
      <div
        class="flex h-max space-x-2 border-b-2 border-[#d82128] cursor-pointer items-center p-2 rounded-lg shrink bg-[#f9dcde]"
      >
        <div class="p-3 rounded-lg bg-[#d82128]">
          <img class="h-7 w-7" :src="cheapest" />
        </div>
        <div class="font-semibold">
          <div>Cheapest</div>
          <span class="text-xs">19,000 tk</span>
        </div>
      </div>
     <div
        class="flex h-max space-x-2 border-b-2 border-[#d82128] cursor-pointer items-center p-2 rounded-lg shrink bg-[#f9dcde]"
      >
        <div class="p-3 rounded-lg bg-[#d82128]">
          <img class="h-7 w-7" :src="fastest" />
        </div>
        <div class="font-semibold">
          <div>Fastest</div>
          <span class="text-xs">21h 30m</span>
        </div>
      </div>
      <div
        class="flex h-max space-x-2 border-b-2 border-[#d82128] cursor-pointer items-center p-2 rounded-lg shrink bg-[#f9dcde]"
      >
        <div class="p-3 rounded-lg bg-[#d82128]">
          <img class="h-7 w-7" :src="earliest" />
        </div>
        <div class="font-semibold">
          <div>Earliest</div>
          <span class="text-xs">07:10</span>
        </div>
      </div>
    </div>
    <!-- Airline option -->
    <div class="row-start-3 m-2 p-2 h-max rounded-lg bg-white ">
   <div
        class="flex pl-2 pr-14  py-1 h-max w-max space-x-2 border-2 border-transparent hover:border-[#d82128] hover:bg-[#f9dcde] cursor-pointer items-center  rounded-lg shrink bg-white"
      >
        <div class=" rounded-lg">
          <img class="h-7 w-7 " :src="airline" />
        </div>
        <div class="text-sm font-semibold">
          <div class="text-gray-600">BG (21)</div>
          <span class="">19,000 tk</span>
        </div>
      </div>

    </div>

    <!-- main card for timing and selection -->
  <div>
    <SelectionCard/>
  </div>
  </div>
</template>

<script setup>
import cheapest from "../assets/Icons/cheapest.png";
import earliest from "../assets/Icons/early.png";
import fastest from "../assets/Icons/fastest.png";
import airline from "../assets/Icons/airline-logo.jpg";
import SelectionCard from "./SelectionCard.vue";

</script>
