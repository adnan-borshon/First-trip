<template>
      <div class="container bg-gray-100 mx-auto py-5 max-w-[100vw]">
    <div class="flex gap-1 md:mx-30 bg-transparent ">
      <!-- Left Column -->
       
         <LeftSide :show-depart_return="false"/>
        

      <!-- Right Column -->
      <div class="right  flex-2/3 ">
        <RightSide />
      
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftSide from './LeftSide.vue';
import RightSide from './RightSide.vue';
</script>