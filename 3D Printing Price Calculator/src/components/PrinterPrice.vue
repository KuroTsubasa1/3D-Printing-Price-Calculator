<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Printer Price</h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Printer Cost</span>
        </label>
        <input type="number" v-model="printerCost" placeholder="Enter printer cost" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Investment Recovery Time (Years)</span>
        </label>
        <input type="number" v-model="investmentRecoveryTimeInYears" placeholder="Enter investment recovery time in years" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Daily Printer Usage (Hours)</span>
        </label>
        <input type="number" v-model="dailyPrinterUsageInHours" placeholder="Enter daily printer usage in hours" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Repair Cost Percentage</span>
        </label>
        <input type="number" v-model="repairCostInPercentage" placeholder="Enter repair cost percentage" class="input input-bordered" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  printerCost: {
    type: Number,
    required: true
  },
  investmentRecoveryTimeInYears: {
    type: Number,
    required: true
  },
  dailyPrinterUsageInHours: {
    type: Number,
    required: true
  },
  repairCostInPercentage: {
    type: Number,
    required: true
  }
});

const printerCost = ref(props.printerCost);
const investmentRecoveryTimeInYears = ref(props.investmentRecoveryTimeInYears);
const dailyPrinterUsageInHours = ref(props.dailyPrinterUsageInHours);
const repairCostInPercentage = ref(props.repairCostInPercentage);
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
