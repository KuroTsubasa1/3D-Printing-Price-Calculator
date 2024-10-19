<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Printing Time</h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Printing Time (Hours)</span>
        </label>
        <input type="number" v-model="printingTimeHours" placeholder="Enter printing time in hours" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Printing Time (Minutes)</span>
        </label>
        <input type="number" v-model="printingTimeMinutes" placeholder="Enter printing time in minutes" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Filament Used (Grams)</span>
        </label>
        <input type="number" v-model="filamentUsedInGrams" placeholder="Enter filament used in grams" class="input input-bordered" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  printingTimeHours: {
    type: Number,
    required: true
  },
  printingTimeMinutes: {
    type: Number,
    required: true
  },
  filamentUsedInGrams: {
    type: Number,
    required: true
  }
});

const printingTimeHours = ref(props.printingTimeHours);
const printingTimeMinutes = ref(props.printingTimeMinutes);
const filamentUsedInGrams = ref(props.filamentUsedInGrams);
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
