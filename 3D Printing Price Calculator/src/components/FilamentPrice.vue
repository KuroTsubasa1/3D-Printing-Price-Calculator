<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Filament Price</h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Filament Type</span>
        </label>
        <input type="text" v-model="filamentType" placeholder="Enter filament type" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Cost per Roll</span>
        </label>
        <input type="number" v-model="filamentCostPerRoll" placeholder="Enter cost per roll" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Roll Weight (Grams)</span>
        </label>
        <input type="number" v-model="rollWeightInGrams" placeholder="Enter roll weight in grams" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Markup Percentage</span>
        </label>
        <input type="number" v-model="markupFilamentCostPercentage" placeholder="Enter markup percentage" class="input input-bordered" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  filamentType: {
    type: String,
    required: true
  },
  filamentCostPerRoll: {
    type: Number,
    required: true
  },
  rollWeightInGrams: {
    type: Number,
    required: true
  },
  markupFilamentCostPercentage: {
    type: Number,
    required: true
  }
});

const filamentType = ref(props.filamentType);
const filamentCostPerRoll = ref(props.filamentCostPerRoll);
const rollWeightInGrams = ref(props.rollWeightInGrams);
const markupFilamentCostPercentage = ref(props.markupFilamentCostPercentage);
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
