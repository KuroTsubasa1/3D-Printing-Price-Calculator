<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Summary</h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Total Price</span>
        </label>
        <input type="text" :value="calcPrice + ' ' + currency" class="input input-bordered" readonly />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Filament Cost</span>
        </label>
        <input type="text" :value="filamentCost + ' ' + currency" class="input input-bordered" readonly />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Power Cost</span>
        </label>
        <input type="text" :value="powerCost + ' ' + currency" class="input input-bordered" readonly />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Printer Cost</span>
        </label>
        <input type="text" :value="printerCostTotal + ' ' + currency" class="input input-bordered" readonly />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Labor Cost</span>
        </label>
        <input type="text" :value="laborCost + ' ' + currency" class="input input-bordered" readonly />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Other Costs</span>
        </label>
        <input type="text" :value="totalOtherCosts + ' ' + currency" class="input input-bordered" readonly />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  calcPrice: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  filamentCost: {
    type: Number,
    required: true
  },
  powerCost: {
    type: Number,
    required: true
  },
  printerCostTotal: {
    type: Number,
    required: true
  },
  laborCost: {
    type: Number,
    required: true
  },
  totalOtherCosts: {
    type: Number,
    required: true
  }
});
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
