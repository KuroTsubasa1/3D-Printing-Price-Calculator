<script setup>

import {computed, ref} from "vue";

const price = ref(0);
const jobName = ref('');
const currency = ref('€');

const printingTimeHours = ref(0);
const printingTimeMinutes = ref(0);

const filamentUsedInGrams = ref(0);

const filamentType = ref('PLA');
const filamentCostPerRole = ref(20);
const roleWeightInGrams = ref(1000);
const markupFilamentCostPercentage = ref(25);

const powerConsumptionInWatts = ref(185);
const powerCostPerKilowattHour = ref(0.55);

const printerCost = ref(1800);
const investmentRecoveryTimeInYears = ref(2);

const dailyPrinterUsageInHours = ref(8);
const repairCostInPercentage = ref(20);

const laborCostPerHour = ref(0);
const laborHours = ref(0);

const markupPercentage = ref(20);

const vatPercentage = ref(0);

/* what do we need

  price in total

  job name
  currency

  printing time hours
  printing time minutes

  filament used in grams

  filament type
  filament cost per role
  role weight in grams
  markup filament cost percentage

  power consumption in watts
  power cost per kilowatt hour

  printer cost
  investment recovery time in years

  daily printer usage in hours
  repair cost in percentage

  labor cost per hour
  labor hours

  markup percentage

  vat percentage


*/

function roundTo(n, digits) {
  let negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  let multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = (Math.round(n) / multiplicator).toFixed(digits);
  if (negative) {
    n = (n * -1).toFixed(digits);
  }
  return n;
}

// computed property for price

const calcPrice = computed(
    () => {

    // printingTimeHours to minutes
    const printingTimeTotal = printingTimeHours.value * 60 + printingTimeMinutes.value

    //price.value = printingTimeTotal * filamentUsedInGrams.value / roleWeightInGrams.value * filamentCostPerRole.value * (1 + markupFilamentCostPercentage.value / 100) + powerConsumptionInWatts.value * powerCostPerKilowattHour.value * printingTimeMinutes / 1000 + printerCost.value / investmentRecoveryTimeInYears.value / 365 / dailyPrinterUsageInHours.value * (1 + repairCostInPercentage.value / 100) + laborCostPerHour.value * laborHours.value * (1 + markupPercentage.value / 100) * (1 + vatPercentage.value / 100)

      // Calculate each component separately
      let filamentCost = (filamentUsedInGrams.value / roleWeightInGrams.value * filamentCostPerRole.value) * (1 + markupFilamentCostPercentage.value / 100);
      let powerCost = powerConsumptionInWatts.value * powerCostPerKilowattHour.value * (printingTimeTotal / 60) / 1000;
      let printerCostTotal = printerCost.value / investmentRecoveryTimeInYears.value / 365 / dailyPrinterUsageInHours.value * (1 + repairCostInPercentage.value / 100);
      let laborCost = laborCostPerHour.value * laborHours.value;


      console.log(filamentCost)
      console.log(powerCost)
      console.log(printerCostTotal)
      console.log(laborCost)


  // Sum up all the costs
  // Assign the total cost to the 'price' variable
      price.value =roundTo( ( (filamentCost + powerCost + printerCostTotal + laborCost) * (1 + markupPercentage.value / 100)),2)

      console.log(price.value)

      return price.value
    }
)

</script>

<template>
  <div class="">



    <div class="mt-5 flex flex-col items-center">

      <h1 class="text-3xl">3D Printing Price Calculator</h1>

      <div class="flex-row ">
        <label for="jobName">Job Name</label>
        <input v-model="jobName" type="text">
      </div>



      <label for="currency">Currency</label>
      <select v-model="currency">
        <option value="€">€</option>
        <option value="$">$</option>
        <option value="£">£</option>
      </select>

      <label for="printingTimeHours">Printing Time Hours</label>
      <input v-model="printingTimeHours" type="number">

      <label for="printingTimeMinutes">Printing Time Minutes</label>
      <input v-model="printingTimeMinutes" type="number">

      <label for="filamentUsedInGrams">Filament Used In Grams</label>
      <input v-model="filamentUsedInGrams" type="number">

      <label for="filamentType">Filament Type</label>
      <select v-model="filamentType">
        <option value="PLA">PLA</option>
        <option value="ABS">ABS</option>
        <option value="PETG">PETG</option>
        <option value="TPU">TPU</option>
        <option value="Nylon">Nylon</option>
        <option value="PC">PC</option>
        <option value="ASA">ASA</option>
        <option value="PP">PP</option>
        <option value="PVA">PVA</option>
        <option value="HIPS">HIPS</option>
        <option value="Wood">Wood</option>
        <option value="Metal">Metal</option>
        <option value="Carbon Fiber">Carbon Fiber</option>
        <option value="Glass">Glass</option>
        <option value="Other">Other</option>
      </select>

      <label for="filamentCostPerRole">Filament Cost Per Role</label>
      <input v-model="filamentCostPerRole" type="number">

      <label for="roleWeightInGrams">Role Weight In Grams</label>
      <input v-model="roleWeightInGrams" type="number">

      <label for="markupFilamentCostPercentage">Markup Filament Cost Percentage</label>
      <input v-model="markupFilamentCostPercentage" type="number">

      <label for="powerConsumptionInWatts">Power Consumption In Watts</label>
      <input v-model="powerConsumptionInWatts" type="number">

      <label for="powerCostPerKilowattHour">Power Cost Per Kilowatt Hour</label>
      <input v-model="powerCostPerKilowattHour" type="number">

      <label for="printerCost">Printer Cost</label>
      <input v-model="printerCost" type="number">

      <label for="investmentRecoveryTimeInYears">Investment Recovery Time In Years</label>
      <input v-model="investmentRecoveryTimeInYears" type="number">

      <label for="dailyPrinterUsageInHours">Daily Printer Usage In Hours</label>
      <input v-model="dailyPrinterUsageInHours" type="number">

      <label for="repairCostInPercentage">Repair Cost In Percentage</label>
      <input v-model="repairCostInPercentage" type="number">

      <label for="laborCostPerHour">Labor Cost Per Hour</label>
      <input v-model="laborCostPerHour" type="number">

      <label for="laborHours">Labor Hours</label>
      <input v-model="laborHours" type="number">

      <label for="markupPercentage">Markup Percentage</label>
      <input v-model="markupPercentage" type="number">

      <label for="vatPercentage">Vat Percentage</label>
      <input v-model="vatPercentage" type="number">

      <p>Price: {{ calcPrice }}</p>

    </div>
  </div>

</template>

<style scoped>

</style>