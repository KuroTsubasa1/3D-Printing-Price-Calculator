<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Save/Load Configurations</h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Configuration Name</span>
        </label>
        <input type="text" v-model="configName" placeholder="Enter configuration name" class="input input-bordered" />
      </div>
      <div class="form-control mt-4">
        <button class="btn btn-primary" @click="saveConfiguration">Save Configuration</button>
      </div>
      <div class="form-control mt-4">
        <label class="label">
          <span class="label-text">Load Configuration</span>
        </label>
        <select v-model="selectedConfig" class="select select-bordered">
          <option v-for="config in savedConfigs" :key="config.name" :value="config.name">{{ config.name }}</option>
        </select>
        <button class="btn btn-secondary mt-2" @click="loadConfiguration">Load Configuration</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const configName = ref('');
const selectedConfig = ref('');
const savedConfigs = ref([]);

const saveConfiguration = () => {
  const config = {
    name: configName.value,
    jobName: jobName.value,
    currency: currency.value,
    printingTimeHours: printingTimeHours.value,
    printingTimeMinutes: printingTimeMinutes.value,
    filamentUsedInGrams: filamentUsedInGrams.value,
    filamentType: filamentType.value,
    filamentCostPerRole: filamentCostPerRole.value,
    roleWeightInGrams: roleWeightInGrams.value,
    markupFilamentCostPercentage: markupFilamentCostPercentage.value,
    powerConsumptionInWatts: powerConsumptionInWatts.value,
    powerCostPerKilowattHour: powerCostPerKilowattHour.value,
    printerCost: printerCost.value,
    investmentRecoveryTimeInYears: investmentRecoveryTimeInYears.value,
    dailyPrinterUsageInHours: dailyPrinterUsageInHours.value,
    repairCostInPercentage: repairCostInPercentage.value,
    laborCostPerHour: laborCostPerHour.value,
    laborHours: laborHours.value,
    otherCosts: otherCosts.value,
    markupPercentage: markupPercentage.value,
    vatPercentage: vatPercentage.value
  };
  savedConfigs.value.push(config);
  localStorage.setItem('savedConfigs', JSON.stringify(savedConfigs.value));
};

const loadConfiguration = () => {
  const config = savedConfigs.value.find(c => c.name === selectedConfig.value);
  if (config) {
    jobName.value = config.jobName;
    currency.value = config.currency;
    printingTimeHours.value = config.printingTimeHours;
    printingTimeMinutes.value = config.printingTimeMinutes;
    filamentUsedInGrams.value = config.filamentUsedInGrams;
    filamentType.value = config.filamentType;
    filamentCostPerRole.value = config.filamentCostPerRole;
    roleWeightInGrams.value = config.roleWeightInGrams;
    markupFilamentCostPercentage.value = config.markupFilamentCostPercentage;
    powerConsumptionInWatts.value = config.powerConsumptionInWatts;
    powerCostPerKilowattHour.value = config.powerCostPerKilowattHour;
    printerCost.value = config.printerCost;
    investmentRecoveryTimeInYears.value = config.investmentRecoveryTimeInYears;
    dailyPrinterUsageInHours.value = config.dailyPrinterUsageInHours;
    repairCostInPercentage.value = config.repairCostInPercentage;
    laborCostPerHour.value = config.laborCostPerHour;
    laborHours.value = config.laborHours;
    otherCosts.value = config.otherCosts;
    markupPercentage.value = config.markupPercentage;
    vatPercentage.value = config.vatPercentage;
  }
};

const loadSavedConfigs = () => {
  const configs = localStorage.getItem('savedConfigs');
  if (configs) {
    savedConfigs.value = JSON.parse(configs);
  }
};

loadSavedConfigs();
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
