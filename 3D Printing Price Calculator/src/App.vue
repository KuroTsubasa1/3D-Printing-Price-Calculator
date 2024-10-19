<script setup>
import PrintingPriceCalculator from "./components/PrintingPriceCalculator.vue";
import NavigationBar from "./components/NavigationBar.vue";
import BasicData from "./components/BasicData.vue";
import PrintingTime from "./components/PrintingTime.vue";
import FilamentPrice from "./components/FilamentPrice.vue";
import ElectricityPrice from "./components/ElectricityPrice.vue";
import PrinterPrice from "./components/PrinterPrice.vue";
import LaborPrice from "./components/LaborPrice.vue";
import OtherCosts from "./components/OtherCosts.vue";
import Summary from "./components/Summary.vue";
import ResetButton from "./components/ResetButton.vue";
import CurrencyConversion from "./components/CurrencyConversion.vue";
import SaveLoadConfigurations from "./components/SaveLoadConfigurations.vue";

</script>

<template>
  <NavigationBar></NavigationBar>
    <PrintingPriceCalculator></PrintingPriceCalculator>
</template>

<style scoped>

</style>
