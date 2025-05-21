<template>
  <div class="relative lg:grid grid-cols-3 gap-1 m-2 shrink-0 rounded-lg p-1 lg:p-2 bg-white overflow-hidden">
    <!-- for larger screen -->
 <div
  class="hidden lg:block absolute left-[66.22%] -translate-x-1/2 -top-2
         h-5 w-5 rounded-full bg-gray-100"
></div>
<div
  class="hidden lg:block absolute left-[66.22%] -translate-x-1/2 -bottom-2
         h-5 w-5 rounded-full bg-gray-100"
></div>


      <!-- for mobile screen -->
    <div
  class="lg:hidden absolute top-[66%] -translate-y-1/2 -right-2.5
         h-6 w-6 rounded-full bg-gray-100"
></div>
<div
  class="lg:hidden absolute top-[66%] -translate-y-1/2 -left-2.5
         h-6 w-6 rounded-full bg-gray-100"
></div>


      
    <div
      class="col-span-2 h-max lg:border-r border-dashed pr-3 border-gray-400 p-2"
    >
      <!-- refund and seat left section -->
      <div class="flex justify-between">
        <div
          class="px-2 py-1 text-xs font-semibold flex items-center rounded-lg bg-[#f9dcde] text-[#d82128]"
        >
          <img :src="taka" class="h-5 w-5 rounded-lg" />
          <span>Partially Refundable</span>
        </div>
        <div
          class="px-2 py-1 text-xs font-semibold flex items-center rounded-lg bg-[#f9dcde] text-[#d82128] border border-[#d82128]"
        >
          <img :src="seat" class="h-4 w-4" />
          <span>5 seat(s) left</span>
        </div>
      </div>
      <!-- time table part -->


      <!-- for mobile -->
      <div class="flex items-center justify-start mt-4 lg:hidden">
        <img class="h-14 w-14 rounded-lg" :src="airline" />
        <div class="text-sm flex flex-col font-semibold text-black">
            <span>US Bangla Airline</span>
            <span class="text-xs text-green-400">Trip-1</span>
        </div>
      </div>
      <div
        class="grid lg:grid-cols-5 grid-cols-4 border-b border-dashed lg:border-solid lg:gap-3 border-gray-400 px-2 pb-4 lg:py-5"
      >
        <div class="hidden lg:flex items-center justify-center p-1 space-x-2">
            <div class="flex flex-col items-center">
                <img class="object-contain  bg-gray-100 rounded-full" :src="airline" />
                <span class=" text-green-400 text-[11px]">Trip-1</span>
            </div>
          <div class="text-sm font-semibold text-black">US Bangla Airlines</div>
        </div>
        <div class="flex flex-col justify-center items-start p-1">
          <span class="text-gray-500 text-xs hidden lg:flex"
            >22 May, Thursday
          </span>
          <span class="font-semibold">19:10</span>
          <span class="text-gray-500">DAC</span>
        </div>
        <div class="col-span-2 flex flex-col justify-center items-center p-1">
          <span class="font-semibold">1h 5m</span>
          <img :src="plane" />
          <span class="text-gray-500">Non-stop</span>
        </div>
        <div class="flex flex-col items-end justify-center p-1">
          <span class="text-xs text-gray-500 hidden lg:flex"
            >22 May, Thursday
          </span>
          <span class="font-semibold">20:10</span>
          <span class="text-gray-500">CXB</span>
        </div>
      </div>





      <!-- time table 2nd part for return flight-->

      <!-- for mobile -->
      <div class="flex items-center justify-start mt-4 lg:hidden">
        <img class="h-14 w-14  rounded-lg" :src="airline" />
        <div class="text-sm flex flex-col font-semibold text-black">
            <span>US Bangla Airline</span>
            <span class="text-xs text-green-400">Trip-1</span>
        </div>
      </div>

      <div
        class="grid lg:grid-cols-5 grid-cols-4 border-dashed lg:border-solid lg:gap-4 border-b pb-4 border-gray-400 px-2 lg:py-5"
      >
        <div class="hidden lg:flex items-center justify-center p-1">
     <div class="flex flex-col items-center">
                <img class="object-contain  bg-gray-100 rounded-full" :src="airline" />
                <span class=" text-green-400 text-[11px]">Trip-1</span>
            </div>
                      <div class="text-sm font-semibold text-black">US Bangla Airlines</div>
        </div>


        <div class="flex flex-col justify-center items-start p-1">
          <span class="text-gray-500 text-xs hidden lg:flex"
            >22 May, Thursday
          </span>
          <span class="font-semibold">20:45</span>
          <span class="text-gray-500">CXB</span>
        </div>
        <div class="col-span-2 flex flex-col justify-center items-center p-1">
          <span class="font-semibold">1h 5m</span>
          <img :src="MultiPlane" />
          <span class="text-gray-500">1 Stop(Dhaka - 22h 30m)</span>
        </div>
        <div class="flex flex-col justify-center items-end p-1">
            <span class="text-green-400 text-sm">+1 Days</span>
          <span class="text-gray-500 text-xs hidden lg:flex"
            >22 May,thursday
          </span>
          <span class="font-semibold">21:50</span>
          <span class="text-gray-500">DAC</span>
        </div>
      </div>

      <!-- Hidden details part -->
      <div v-if="detailsOpen" class="details">
        <ViewDetails />
      </div>

      <!-- View details part -->
      <div class="view-details py-2 mt-2">
        <div class="flex">
          <div class="flex-1/3">
            <div class="flex items-center w-max px-2 bg-blue-200 rounded-lg">
              <img :src="like" class="h-6 w-6 p-1" />
              <span class="text-xs font-semibold">Recommended</span>
            </div>
          </div>

          <div class="flex pl-8 flex-2/3 items-center">
            <div class="flex" @click="showDetails">
              <span
                v-if="detailsOpen === false"
                class="text-sm font-semibold cursor-pointer text-[#d82128]"
              >
                View Details</span
              >
              <span
                v-else
                class="text-sm font-semibold cursor-pointer text-[#d82128]"
              >
                Hide Details</span
              >
              <img
                v-if="!detailsOpen"
                :src="downs_arrow"
                class="h-4 w-4 cursor-pointer"
              />
              <img v-else :src="up_arrow" class="h-4 w-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="prices col-span-1 lg:grid grid-rows-[auto_1fr_auto_auto] ">
      <!-- voucher part -->
      <div v-if="detailsOpen"
      class="font-semibold p-2 ">

        <h1 >Adult X 1</h1>
        <div class="flex justify-between text-sm py-2">
          <h2 class="text-gray-500">Base Fair</h2>
          <span>BDT 8,058</span>
        </div>
         <div class="flex justify-between text-sm py-2">
          <h2 class="text-gray-500">Tax</h2>
          <span>BDT 2,028</span>
        </div>
          <div class="flex justify-between text-sm py-6">
          <h2 >Air Fare</h2>
          <span>BDT 2,028</span>
        </div>

           <div class=" text-orange-600 flex justify-between text-sm py-3">
          <h2 >Coupon</h2>
          <span>BDT 2,028</span>
        </div>


      </div>


 <div
 v-if="!detailsOpen"
            class="px-2 hidden text-xs font-semibold lg:flex justify-self-end items-center rounded-lg bg-[#f9dcde] text-[#d82128]"
          >
            <img :src="voucher" class="h-8 w-8 rounded-lg mr-1" />
            <span class="text-xs">FTBGDOM</span>
          </div>
      <!-- for mobile view -->
      <div class="flex justify-between p-2 lg:hidden">
        <div class="row-start-1 flex lg:justify-end items-start">
          <div
            class="px-2 text-xs font-semibold flex items-center rounded-lg bg-[#f9dcde] text-[#d82128]"
          >
            <img :src="voucher" class="h-8 w-8 rounded-lg mr-1" />
            <span class="text-xs">FTBGDOM</span>
          </div>
        </div>
        <div class="price  font-semibold text-[#d82128]">
          <span class="font-semibold">BDT</span>
          <span class="text-xl font-bold">11,526</span>
        </div>
        <div class="discount-price m">
          <span class="line-through decoration-1 decoration-gray-700"
            >BDT 12,897</span
          >
        </div>
      </div>
        

      <!-- empty -->
      <div class="row-start-2 hidden lg:block"></div>
      <!-- price -->
      <div class="row-start-3 flex lg:flex-col justify-end items-end">
        <div
          v-if="detailsOpen"
          class="row-start-1 flex justify-end items-start"
        >
          <div
            class="px-2 hidden  text-xs font-semibold lg:flex items-center rounded-lg bg-[#f9dcde] text-[#d82128]"
          >
            <img :src="voucher" class="h-8 w-8 rounded-lg mr-1" />
            <span class="text-xs">FTBGDOM</span>
          </div>
        </div>
        <div class="price hidden lg:block font-semibold text-[#d82128]">
          <span class="font-semibold">BDT</span>
          <span class="text-xl font-bold">11,526</span>
        </div>
        <div class="discount-price hidden lg:block">
          <span class="line-through decoration-1 decoration-gray-700"
            >BDT 12,897</span
          >
        </div>
      </div>
      <div class="row-start-4 py-2 px-3">
        <router-link
        to="/TravelerInfo"
          class="bg-[#d82128] flex justify-center px-2 w-full py-1 rounded-full font-semibold text-white transform duration-200 ease-in hover:opacity-80"
          >Select</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import seat from "../assets/Icons/seat.png";
import taka from "../assets/Icons/taka.png";
import plane from "../assets/Icons/layover-non-stop.svg";
import MultiPlane from "../assets/Icons/layover-multi.svg"
import like from "../assets/Icons/like.png";
import up_arrow from "../assets/Icons/up-arrow.png";
import downs_arrow from "../assets/Icons/down-arrow.png";
import voucher from "../assets/Icons/voucher.png";
import airline from "../assets/Icons/airline-logo.jpg";
import { ref } from "vue";
import ViewDetails from "./ViewDetails.vue";

const detailsOpen = ref(false);

const showDetails = () => {
  detailsOpen.value = !detailsOpen.value;
};


</script>
