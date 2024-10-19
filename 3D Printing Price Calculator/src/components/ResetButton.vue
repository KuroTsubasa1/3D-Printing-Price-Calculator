<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <button @click="resetFields" class="btn btn-primary">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const resetFields = () => {
  // Reset all input fields to their default values
  jobName.value = '';
  currency.value = '€';
  printingTimeHours.value = 0;
  printingTimeMinutes.value = 0;
  filamentUsedInGrams.value = 0;
  filamentType.value = 'PLA';
  filamentCostPerRole.value = 20;
  roleWeightInGrams.value = 1000;
  markupFilamentCostPercentage.value = 25;
  powerConsumptionInWatts.value = 185;
  powerCostPerKilowattHour.value = 0.55;
  printerCost.value = 1800;
  investmentRecoveryTimeInYears.value = 2;
  dailyPrinterUsageInHours.value = 8;
  repairCostInPercentage.value = 20;
  laborCostPerHour.value = 0;
  laborHours.value = 0;
  otherCosts.value = [];
  markupPercentage.value = 20;
  vatPercentage.value = 0;
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
