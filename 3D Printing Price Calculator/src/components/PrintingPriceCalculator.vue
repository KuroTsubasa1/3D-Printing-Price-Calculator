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
      price.value = roundTo(((filamentCost + powerCost + printerCostTotal + laborCost) * (1 + markupPercentage.value / 100)), 2)

      console.log(price.value)

      return price.value
    }
)

</script>

<template>
  <div class="flex flex-wrap justify-center">



    <div class="flex flex-col items-center text-center mt-5 w-1/2">

      <h1 class="font-sans text-4xl font-bold mb-5">3D Printing Price Calculator</h1>

      <div class="card w-72 md:w-96 bg-primary  shadow-xl shadow-base-300">
        <div class="card-body">
          <h2 class="card-title">Basic Data</h2>
          <div class="form-control w-full max-w-xs">
            <label class="label" for="jobName">
              <span class="label-text">Job Name</span>
            </label>
            <input id="jobName" type="text" placeholder="3D Benchy" class="input input-bordered w-full max-w-xs"
                   v-model="jobName">
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Currency</span>
            </label>
            <select class="select select-bordered" v-model="currency">
              <option value="€">€</option>
              <option value="$">$</option>
              <option value="£">£</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full">
        <div class="divider"></div>
      </div>


      <div class="card w-72 md:w-96 bg-neutral  shadow-xl shadow-base-300">
        <div class="card-body">
          <h2 class="card-title">Printing Time</h2>
          <div class="form-control w-full max-w-xs">
            <label class="label" for="printingTimeHours">
              <span class="label-text">Hours</span>
            </label>
            <input id="printingTimeHours" type="number" placeholder="0" min="0" oninput="this.value = Math.abs(this.value)" class="input input-bordered w-full max-w-xs"
                   v-model="printingTimeHours">
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label" for="printingTimeMinutes">
              <span class="label-text">Minutes</span>
            </label>
            <input id="printingTimeMinutes" type="number" placeholder="0" min="0" oninput="this.value = Math.abs(this.value)" class="input input-bordered w-full max-w-xs"
                   v-model="printingTimeMinutes">
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label" for="filamentUsedInGrams">
              <span class="label-text">Filament Used In Grams</span>
            </label>
            <input id="printingTimeMinutes" type="number" placeholder="0" min="0" oninput="this.value = Math.abs(this.value)" class="input input-bordered w-full max-w-xs"
                   v-model="filamentUsedInGrams">
          </div>

        </div>
      </div>

      <div class="flex flex-col w-full">
        <div class="divider"></div>
      </div>

      <div class=" flex flex-row items-center mt-5 mb-5 p-2 card w-72 md:w-96 bg-neutral shadow-xl shadow-base-300">
        <h2 class="ml-6 basis-3/4 text-left card-title">
          Price Total
        </h2>
        <div class="badge badge-base-300 p-5 justify-self-end basis-2/4">
         {{ calcPrice }} {{ currency }}
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>