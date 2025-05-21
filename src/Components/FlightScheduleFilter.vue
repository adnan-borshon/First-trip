<template>
  <div class="">
    <div
      class="flex justify-between items-center w-full py-2 px-3 rounded ">
      
      <div class="flex flex-col">
      <span class="font-medium">{{ title }}</span>
      <div 
      v-if="!isEmpty && isOpen"
      class=" space-x-2">

        <span class="text-[10px]">{{ selectedValues.length }} selected</span>
        <span 
        @click="selectAll"
        class="text-[12px] text-blue-500 hover:underline cursor-pointer">Select All</span>
      </div>
    </div>


<div class="flex gap-2">

  <button 
  v-if="!isEmpty && isOpen"
  @click="resetOption"
  class="bg-[#f9dcde] cursor-pointer rounded-full border border-[#d82128] text-[#d82128] px-2 py-1 text-xs">Reset</button>
  <img
   @click="toggleOpen"
  :src="!isOpen ? downs_arrow : up_arrow"
  class="h-5 w-5"
  :alt="isOpen ? 'Down Arrow' : 'Up Arrow'"
  />
</div>
</div>


  <!-- tab headers -->
    <div
    v-if="isOpen"
    class="tabContainer grid grid-cols-2 p-3 " >
      <label
        class="text-center p-3 cursor-pointer rounded-t-lg"
        :class="status === 'Departure'
          ? 'bg-[#f9dcde] border-b-2 border-[#d82128]'
          : 'border-b-2 border-gray-300'"
      >
        <input
          type="radio"
          name="status"
          v-model="status"
          value="Departure"
          class="hidden"
        />
        Departure
      </label>

      <label
        class="text-center p-3 cursor-pointer rounded-t-lg"
        :class="status === 'Arrival'
          ? 'bg-[#f9dcde] border-b-2 border-[#d82128]'
          : 'border-b-2 border-gray-300'"
      >
        <input
          type="radio"
          name="status"
          v-model="status"
          value="Arrival"
          class="hidden"
        />
        Arrival
      </label>


    </div>


<!-- From -->
<div
v-if="isOpen" class="px-4 py-1 font-semibold">
  {{ status === 'Departure'
     ? 'Departure Dhaka: Anytime'
     : 'Arrival Cox\'s Bazar: Anytime' }}
</div>
 <div v-if="isOpen" class="grid grid-cols-2 gap-3 px-4 py-2">
  <div
    v-for="opt in options"
    :key="opt.value"
    @click="toggleFrom(opt.value)"
    class="flex flex-col items-center p-3 rounded-lg cursor-pointer transition-colors duration-200"
    :class="selectedFrom.includes(opt.value)
             ? 'bg-[#f9dcde]'
             : 'bg-gray-100 hover:bg-gray-200'"
  >
    <img :src="opt.icon" :alt="opt.label" class="h-8 w-8 mb-2" />
    <span
      class="font-semibold text-center"
      :class="selectedFrom.includes(opt.value)
               ? 'text-[#d82128]'
               : 'text-gray-900'"
    >
      {{ opt.label }}
    </span>
    <span class="text-xs text-gray-500 mt-1">{{ opt.time }}</span>
  </div>
</div>




<!-- To -->
<div
v-if="isOpen"
 class="px-4 py-1 font-semibold">
  {{ status === 'Departure'
     ? 'Departure Cox\'s Bazar: Anytime'
     : 'Arrival Dhaka: Anytime' }}
</div>  
<div v-if="isOpen" class="grid grid-cols-2 gap-3 px-4 py-2">
  <div
    v-for="opt in options"
    :key="opt.value"
    @click="toggleTo(opt.value)"
    class="flex flex-col items-center p-3 rounded-lg cursor-pointer transition-colors duration-200"
    :class="selectedTo.includes(opt.value)
             ? 'bg-[#f9dcde]'
             : 'bg-gray-100 hover:bg-gray-200'"
  >
    <img :src="opt.icon" :alt="opt.label" class="h-8 w-8 mb-2" />
    <span
      class="font-semibold text-center"
      :class="selectedTo.includes(opt.value)
               ? 'text-[#d82128]'
               : 'text-gray-900'"
    >
      {{ opt.label }}
    </span>
    <span class="text-xs text-gray-500 mt-1">{{ opt.time }}</span>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import up_arrow from '../assets/Icons/up-arrow.png';
import downs_arrow from '../assets/Icons/down-arrow.png';
import { computed } from 'vue';



function toggleOption(val) {
  const i = selectedValues.value.indexOf(val)
  if (i === -1) {
    selectedValues.value.push(val)
  } else {
    selectedValues.value.splice(i, 1)
  }
}

const props = defineProps({
  title: String,
  options: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
});
const status = ref('Departure')

const isEmpty = computed(() => selectedValues.value.length === 0);

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(true);
const selectedValues = ref([...props.modelValue]);

// replace your single selectedValues ref with two:
const selectedFrom = ref([])
const selectedTo   = ref([])

// and two toggle functions:
function toggleFrom(val) {
  const i = selectedFrom.value.indexOf(val)
  if (i === -1)  selectedFrom.value.push(val)
  else            selectedFrom.value.splice(i, 1)
}

function toggleTo(val) {
  const i = selectedTo.value.indexOf(val)
  if (i === -1)  selectedTo.value.push(val)
  else            selectedTo.value.splice(i, 1)
}



function toggleOpen() {
  isOpen.value = !isOpen.value;
}
function selectAll() {
 
 selectedValues.value = props.options.map(opt => opt.value)
}
function resetOption(){
  selectedValues.value = [];
}

watch(selectedValues, (newVal) => {
  emit('update:modelValue', newVal);
});

watch(
  () => props.modelValue,
  (newVal) => {
    selectedValues.value = [...newVal];
  }
);




</script>
