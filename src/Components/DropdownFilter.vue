<template>
  <div>
    <button
      @click="toggleOpen"
      class="flex justify-between items-center w-full p-3 rounded "
      type="button"
    >
      <span class="font-medium">{{ title }}</span>
      <img
        :src="isOpen ? downs_arrow : up_arrow"
        class="h-5 w-5"
        :alt="isOpen ? 'Down Arrow' : 'Up Arrow'"
      />
    </button>

    <div v-if="isOpen" class="flex flex-col p-2 space-y-2  rounded mt-1 max-h-64 overflow-auto">
      <label
        v-for="(option, index) in options"
        :key="index"
        class="space-x-2 grid grid-cols-[auto_1fr_auto] items-center w-full cursor-pointer"
      >
        <input
          type="checkbox"
          :value="option.value"
          v-model="selectedValues"
          class="form-checkbox"
        />
        <div class="text-sm font-bold text-gray-700 ml-2">{{ option.label }}</div>
        <div
          v-if="option.price"
          class="text-gray-500 text-sm font-semibold text-right"
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

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedValues = ref([...props.modelValue]);

function toggleOpen() {
  isOpen.value = !isOpen.value;
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
