

<template>
  <div class="container bg-[#ebeff4] py-5 mx-auto">
    <div class="flex gap-5 lg:mx-60 bg-transparent ">
      <!-- Left Column -->
       
         <LeftSide class="hidden lg:block sticky"/>
        

      <!-- Right Column -->
      <div class="right  flex-2/3 ">
        <RightSide/>
      
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LeftSide from './LeftSide.vue';
import RightSide from './RightSide.vue';

</script>

