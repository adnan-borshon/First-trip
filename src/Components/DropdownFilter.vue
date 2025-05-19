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

    <div v-if="!isOpen" class=" flex flex-col px-2  space-y-2  rounded  overflow-auto">
      <label
        v-for="(option, index) in options"
        :key="index"
        class="p-1.5 rounded space-x-1 grid grid-cols-[auto_1fr_auto] items-center w-full cursor-pointer hover:bg-[#f9dcde]"
      >
        <input
          type="checkbox"
          :value="option.value"
          v-model="selectedValues"
          class="form-checkbox h-4 w-4 accent-black"
        />
        <div class="text-sm font-bold  ml-2"
        :class="selectedValues.includes(option.value) 
             ? 'text-gray-900' 
             : 'text-gray-500'"
        >{{ option.label }}</div>
        <div
          v-if="option.price"
         
          class=" text-xs text-gray-400 font-semibold text-right"
        >
          {{ option.price }}
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import up_arrow from '../assets/Icons/up-arrow.png';
import downs_arrow from '../assets/Icons/down-arrow.png';
import { computed } from 'vue';
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


const isEmpty = computed(() => selectedValues.value.length === 0);

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedValues = ref([...props.modelValue]);

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
