<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import BasicData from "./BasicData.vue";
import PrintingTime from "./PrintingTime.vue";
import FilamentPrice from "./FilamentPrice.vue";
import ElectricityPrice from "./ElectricityPrice.vue";
import PrinterPrice from "./PrinterPrice.vue";
import LaborPrice from "./LaborPrice.vue";
import OtherCosts from "./OtherCosts.vue";
import Summary from "./Summary.vue";
import ResetButton from "./ResetButton.vue";
import CurrencyConversion from "./CurrencyConversion.vue";
import SaveLoadConfigurations from "./SaveLoadConfigurations.vue";

const isSticky = ref(true);

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

const otherCosts = ref([]);

const markupPercentage = ref(20);

const vatPercentage = ref(0);

function roundTo(n, digits) {
  return Number(n.toFixed(digits));
}

// computed property for price
const calcPrice = computed(() => {
  // printingTimeHours to minutes
  const printingTimeTotal = printingTimeHours.value * 60 + printingTimeMinutes.value;

  // Calculate each component separately
  let filamentCost = (filamentUsedInGrams.value / roleWeightInGrams.value * filamentCostPerRole.value) * (1 + markupFilamentCostPercentage.value / 100);
  let powerCost = powerConsumptionInWatts.value * powerCostPerKilowattHour.value * (printingTimeTotal / 60) / 1000;
  let printerCostTotal = printerCost.value / investmentRecoveryTimeInYears.value / 365 / dailyPrinterUsageInHours.value * (1 + repairCostInPercentage.value / 100);
  let laborCost = laborCostPerHour.value * laborHours.value;
  let otherCostsAmount = otherCosts.value.reduce((total, cost) => total + cost.amount, 0);

  // Sum up all the costs
  // Assign the total cost to the 'price' variable
  price.value = roundTo(((filamentCost + powerCost + printerCostTotal + laborCost + otherCostsAmount) * (1 + markupPercentage.value / 100)), 2);

  return price.value;
});

const totalOtherCosts = computed(() => {
  return otherCosts.value.reduce((total, cost) => total + cost.amount, 0);
});

const addOtherCost = () => {
  otherCosts.value.push({ name: "", amount: 0 });
};

const removeOtherCost = (index) => {
  otherCosts.value.splice(index, 1);
};

const handleScroll = () => {
  const totalPriceElement = document.getElementById('totalPriceElement'); // ID of your actual total price element
  const stickyPosition = totalPriceElement.getBoundingClientRect().top + window.scrollY;
  isSticky.value = window.scrollY + window.innerHeight < stickyPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <div class="flex flex-wrap justify-center">
    <div class="flex flex-col items-center text-center mt-5 w-1/2">
      <h1 class="font-sans text-4xl font-bold mb-5">3D Printing Price Calculator</h1>

      <div :class="{'sticky-total': isSticky}" class="card mb-5 w-96 md:w-96 bg-secondary shadow-xl shadow-base-300">
        <div class="card-body flex flex-row items-center">
          <h2 class="ml-6 basis-3/4 text-left card-title">
            Price Total
          </h2>
          <div class="badge badge-base-300 p-5 justify-self-end basis-2/4">
            {{ calcPrice }} {{ currency }}
          </div>
        </div>
      </div>

      <BasicData :jobName="jobName" :currency="currency" />
      <PrintingTime :printingTimeHours="printingTimeHours" :printingTimeMinutes="printingTimeMinutes" :filamentUsedInGrams="filamentUsedInGrams" />
      <FilamentPrice :filamentType="filamentType" :filamentCostPerRole="filamentCostPerRole" :roleWeightInGrams="roleWeightInGrams" :markupFilamentCostPercentage="markupFilamentCostPercentage" />
      <ElectricityPrice :powerConsumptionInWatts="powerConsumptionInWatts" :powerCostPerKilowattHour="powerCostPerKilowattHour" />
      <PrinterPrice :printerCost="printerCost" :investmentRecoveryTimeInYears="investmentRecoveryTimeInYears" :dailyPrinterUsageInHours="dailyPrinterUsageInHours" :repairCostInPercentage="repairCostInPercentage" />
      <LaborPrice :laborCostPerHour="laborCostPerHour" :laborHours="laborHours" />
      <OtherCosts :otherCosts="otherCosts" :addOtherCost="addOtherCost" :removeOtherCost="removeOtherCost" :totalOtherCosts="totalOtherCosts" :currency="currency" />
      <Summary :calcPrice="calcPrice" :currency="currency" />
      <ResetButton />
      <CurrencyConversion :currency="currency" />
      <SaveLoadConfigurations />

      <div id="totalPriceElement" class="mt-5 mb-5 p-2 card w-72 md:w-96 bg-secondary shadow-xl shadow-base-300">
        <div class="card-body flex flex-row items-center">
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
.sticky-total {
  position: fixed;
  bottom: 0;
  width: 50%;
  z-index: 1000; /* ensure it's above other elements */
}
</style>
