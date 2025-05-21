<template>
      <div class="container bg-gray-100 mx-auto py-5 max-w-[100vw]">
    <div class="flex gap-1 lg:mx-30 bg-transparent ">
      <!-- Left Column -->
       
         <LeftSide :show-depart_return="false"/>
        

      <!-- Right Column -->
      <div class="right  flex-2/3 ">
          <RightSide 
   
    :cardComponent="MultiCityCard"
  />
      
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftSide from './LeftSide.vue';
import MultiCityCard from './MultiCityCard.vue';
import RightSide from './RightSide.vue';
</script>