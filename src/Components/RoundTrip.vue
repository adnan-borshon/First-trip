

<template >
  <div class="container bg-gray-100 mx-auto py-5 ">
    <div class="flex gap-1 lg:mx-30 bg-transparent ">
      <!-- Left Column -->
       
         <LeftSide  :show-depart_return="true"/>
       
        

      <!-- Right Column -->
      <div class="right overflow-y-auto flex-2/3 ">
         <RightSide 
    
    :cardComponent="SelectionCard"
  />
      
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LeftSide from './LeftSide.vue';
import RightSide from './RightSide.vue';
import SelectionCard from './SelectionCard.vue';



</script>

