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

// todo add printer preset list with prices and power consumption 

const dailyPrinterUsageInHours = ref(8);
const repairCostInPercentage = ref(20);

const laborCostPerHour = ref(0);
const laborHours = ref(0);

const otherCosts = ref([]);

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
  return Number(n.toFixed(digits));
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
      let otherCostsAmount = otherCosts.value.reduce((total, cost) => total + cost.amount, 0);

      console.log(filamentCost)
      console.log(powerCost)
      console.log(printerCostTotal)
      console.log(laborCost)


      // Sum up all the costs
      // Assign the total cost to the 'price' variable
      price.value = roundTo(((filamentCost + powerCost + printerCostTotal + laborCost + otherCostsAmount) * (1 + markupPercentage.value / 100)), 2)

      console.log(price.value)

      return price.value
    }
)

const totalOtherCosts = computed(
    () => {
      return otherCosts.value.reduce((total, cost) => total + cost.amount, 0);
    }
)

const addOtherCost = () => {
  otherCosts.value.push({name: "", amount: 0});
};

const removeOtherCost = (index) => {
  otherCosts.value.splice(index, 1);
};

</script>

<template>
  <div class="flex flex-wrap justify-center">


    <div class="flex flex-col items-center text-center mt-5 w-1/2">

      <h1 class="font-sans text-4xl font-bold mb-5">3D Printing Price Calculator</h1>

      <div class="card w-72 md:w-96 bg-neutral shadow-xl shadow-base-300">
        <div class="card-body">
          <h2 class="card-title">Basic Data</h2>
          <div class="form-control w-full max-w-xs">
            <label class="label" for="jobName">
              <span class="label-text">Job Name</span>
            </label>
            <input id="jobName" v-model="jobName" class="input input-bordered w-full max-w-xs" placeholder="3D Benchy"
                   type="text">
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Currency</span>
            </label>
            <select v-model="currency" class="select select-bordered">
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
            <input id="printingTimeHours" v-model="printingTimeHours" class="input input-bordered w-full max-w-xs" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label" for="printingTimeMinutes">
              <span class="label-text">Minutes</span>
            </label>
            <input id="printingTimeMinutes" v-model="printingTimeMinutes" class="input input-bordered w-full max-w-xs" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label" for="filamentUsedInGrams">
              <span class="label-text">Filament Used In Grams</span>
            </label>
            <input id="printingTimeMinutes" v-model="filamentUsedInGrams" class="input input-bordered w-full max-w-xs" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

        </div>
      </div>

      <div class="flex flex-col w-full">
        <div class="divider"></div>
      </div>

      <div class="card w-72 md:w-96 bg-neutral  shadow-xl shadow-base-300">
        <div class="card-body">
          <h2 class="card-title">Filament Price</h2>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Filament Type</span>
            </label>
            <select v-model="filamentType" class="select select-bordered">
              <option value="PLA">PLA</option>
              <option value="PETG">PETG</option>
              <option value="TPU">TPU</option>
              <option value="ABS">ABS</option>
              <option value="ASA">ASA</option>
            </select>
          </div>

          <!-- cost per role element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="costPerRoll">
              <span class="label-text">Filament Cost Per Roll</span>
            </label>
            <input id="costPerRoll" v-model="filamentCostPerRole" class="input input-bordered w-full max-w-xs" min="0" oninput="this.value = Math.abs(this.value)"
                   placeholder="0"
                   type="number">
          </div>

          <!-- role weight in grams element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="roleWeightInGrams">
              <span class="label-text">Role Weight In Grams</span>
            </label>
            <input id="roleWeightInGrams" v-model="roleWeightInGrams" class="input input-bordered w-full max-w-xs" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

          <!-- markup filament cost percentage element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="markupFilamentCostPercentage">
              <span class="label-text">Markup Filament Cost Percentage</span>
            </label>
            <input id="markupFilamentCostPercentage" v-model="markupFilamentCostPercentage" class="input input-bordered w-full max-w-xs" max="100" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

        </div>
      </div>

      <div class="flex flex-col w-full">
        <div class="divider"></div>
      </div>


      <!-- electricity price card -->

      <div class="card w-72 md:w-96 bg-neutral  shadow-xl shadow-base-300">
        <div class="card-body">
          <h2 class="card-title">Electricity Price</h2>

          <!-- power consumption in watts element -->
          <div class="form-control w-full max-w-xs">
            <label class="label" for="powerConsumptionInWatts">
              <span class="label-text">Power Consumption in Watts</span>
            </label>
            <input id="powerConsumptionInWatts" v-model="powerConsumptionInWatts" class="input input-bordered w-full max-w-xs" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

          <!-- power cost per kilowatt hour element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="powerCostPerKilowattHour">
              <span class="label-text">Power Cost Per Kilowatt Hour</span>
            </label>
            <input id="powerCostPerKilowattHour" v-model.number="powerCostPerKilowattHour" class="input input-bordered w-full max-w-xs" min="0" placeholder="0.00"
                   step="0.01"
                   type="number">
          </div>

        </div>
      </div>

      <div class="flex flex-col w-full">
        <div class="divider"></div>
      </div>

      <!-- printer price card -->

      <div class="card w-72 md:w-96 bg-neutral  shadow-xl shadow-base-300">
        <div class="card-body">
          <h2 class="card-title">Printer Price</h2>

          <div class="form-control w-full max-w-xs">
            <label class="label" for="printerCost">
              <span class="label-text">Printer Cost</span>
            </label>
            <input id="printerCost" v-model="printerCost" class="input input-bordered w-full max-w-xs" min="0" oninput="this.value = Math.abs(this.value)"
                   placeholder="0"
                   type="number">
          </div>

          <!-- investment recovery time in years element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="investmentRecoveryTimeInYears">
              <span class="label-text">Investment Recovery Time in Years</span>
            </label>
            <input id="investmentRecoveryTimeInYears" v-model="investmentRecoveryTimeInYears" class="input input-bordered w-full max-w-xs" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

          <!-- daily printer usage in hours element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="dailyPrinterUsageInHours">
              <span class="label-text">Daily Printer Usage in Hours</span>
            </label>
            <input id="dailyPrinterUsageInHours" v-model="dailyPrinterUsageInHours" class="input input-bordered w-full max-w-xs" max="24" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

          <!-- repair cost in percentage element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="repairCostInPercentage">
              <span class="label-text">Repair Cost in Percentage</span>
            </label>
            <input id="repairCostInPercentage" v-model="repairCostInPercentage" class="input input-bordered w-full max-w-xs" max="100" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

        </div>
      </div>

      <div class="flex flex-col w-full">
        <div class="divider"></div>
      </div>

      <!-- labor price card -->

      <div class="card w-72 md:w-96 bg-neutral shadow-xl shadow-base-300">
        <div class="card-body">
          <h2 class="card-title">Labor Price</h2>

          <!-- labor cost per hour element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="laborCostPerHour">
              <span class="label-text">Labor Cost Per Hour</span>
            </label>
            <input id="laborCostPerHour" v-model="laborCostPerHour" class="input input-bordered w-full max-w-xs" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

          <!-- labor hours element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="laborHours">
              <span class="label-text">Labor Hours</span>
            </label>
            <input id="laborHours" v-model="laborHours" class="input input-bordered w-full max-w-xs" min="0" oninput="this.value = Math.abs(this.value)"
                   placeholder="0"
                   type="number">
          </div>

        </div>
      </div>

      <div class="flex flex-col w-full">
        <div class="divider"></div>
      </div>

      <!-- Other Costs card -->
      <div class="card w-72 md:w-96 bg-neutral shadow-xl shadow-base-300">
        <div class="card-body">
          <h2 class="card-title">Other Costs</h2>

          <!-- other costs list -->
          <div v-for="(cost, index) in otherCosts" :key="index" class="form-control w-full max-w-xs">
            <label :for="'otherCostName-' + index" class="label">
              <span class="label-text">Cost Name</span>
            </label>
            <input :id="'otherCostName-' + index" v-model="cost.name" class="input input-bordered w-full max-w-xs"
                   type="text">

            <label :for="'otherCostAmount-' + index" class="label">
              <span class="label-text">Cost Amount</span>
            </label>
            <input :id="'otherCostAmount-' + index" v-model="cost.amount" class="input input-bordered w-full max-w-xs" min="0"
                   placeholder="0" type="number">

            <button class="btn btn-sm btn-error mt-3" @click="removeOtherCost(index)">Remove This Item</button>

            <div class="flex flex-col w-full">
              <div class="divider"></div>
            </div>

          </div>

          <!-- add new other cost button -->
          <button class="btn btn-sm btn-primary " @click="addOtherCost">Add New Cost</button>

          <div class="flex flex-col w-full">
            <div class="divider"></div>
          </div>

          <div class=" flex flex-row items-center">
            <h2 class="ml-6 basis-3/4 text-left card-title">
              Other Costs
            </h2>
            <div class="badge badge-base-300 p-5 justify-self-end basis-2/4">
              {{ totalOtherCosts }} {{ currency }}
            </div>

          </div>

        </div>
      </div>


      <div class="flex flex-col w-full">
        <div class="divider"></div>
      </div>

      <!-- markup price card -->

      <div class="card w-72 md:w-96 bg-neutral shadow-xl shadow-base-300">
        <div class="card-body">
          <h2 class="card-title">Markup Price</h2>

          <!-- markup percentage element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="markupPercentage">
              <span class="label-text">Markup Percentage</span>
            </label>
            <input id="markupPercentage" v-model="markupPercentage" class="input input-bordered w-full max-w-xs" max="100" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

          <!-- vat percentage element -->

          <div class="form-control w-full max-w-xs">
            <label class="label" for="vatPercentage">
              <span class="label-text">VAT Percentage</span>
            </label>
            <input id="vatPercentage" v-model="vatPercentage" class="input input-bordered w-full max-w-xs" max="100" min="0"
                   oninput="this.value = Math.abs(this.value)" placeholder="0"
                   type="number">
          </div>

        </div>
      </div>


      <div class=" mt-5 mb-5 p-2 card w-72 md:w-96 bg-neutral shadow-xl shadow-base-300">
        <div class="card-body  flex flex-row items-center">
          <h2 class="ml-6 basis-3/4 text-left card-title">
            Price Total
          </h2>
          <div class="badge badge-base-300 p-5 justify-self-end basis-2/4">
            {{ calcPrice }} {{ currency }}
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>