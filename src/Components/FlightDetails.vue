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

        <!-- Departure -->
        <div class=" p-2 grid grid-cols-[1fr_auto_2fr] gap-4 bg-gray-100 rounded-lg">
            <div class="flex flex-col justify-center text-end break-words">
                <span class="text-sm font-semibold">19:10</span>
                <span class=" text-xs text-gray-600">21 May, Wednesday</span>
            </div>
            <img :src="location" >
             <div class="flex flex-col justify-center text-start break-words">
                <span class="text-sm font-semibold">Departure, Dhaka</span>
                <span class=" text-xs text-gray-600 ">DAC- Hazrat Shahjalal International Airport</span>
            </div>
        </div>

        <!-- airline -->
        <div class=" p-2 grid grid-cols-[1fr_auto_2fr] gap-4  rounded-lg">
            <div class="flex flex-col justify-center text-end break-words">
                <span class="text-sm text-[#d82128]  font-semibold">Economy (S)</span>
                <span class=" text-xs text-gray-600">BS 159</span>
            </div>
            <img :src="airline" class="h-10 w-10">
             <div class="flex flex-col justify-center text-start w-max break-words">
                <span class="text-sm font-semibold">US Bangla Airlines</span>
                <span class=" text-xs text-gray-600">ATR 72 - 600</span>
            </div>
        </div>

        <!-- return -->
    <div class=" p-2 grid grid-cols-[1fr_auto_2fr] gap-4 bg-gray-100 rounded-lg">
            <div class="flex flex-col justify-center text-end  break-words">
                <span class="text-sm font-semibold">20:15</span>
                <span class=" text-xs text-gray-600">21 May, Wednesday</span>
            </div>
            <img :src="location" >
             <div class="flex flex-col justify-center text-start w-max break-words">
                <span class="text-sm font-semibold">Arrival, Cos's bazar</span>
                <span class=" text-xs text-gray-600">CXB - Cox's Bazar Airport</span>
            </div>
        </div>


    </div>
</template>

<script setup>
import location from "../assets/Icons/location.svg"
import airline from "../assets/Icons/airline-logo.jpg";
import { ref } from "vue";

const planeStatus = ref('depart');
</script>