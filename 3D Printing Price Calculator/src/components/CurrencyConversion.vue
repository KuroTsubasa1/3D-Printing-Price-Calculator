<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Currency Conversion</h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Select Currency</span>
        </label>
        <select v-model="selectedCurrency" class="select select-bordered">
          <option v-for="currency in currencies" :key="currency" :value="currency">
            {{ currency }}
          </option>
        </select>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Exchange Rate</span>
        </label>
        <input type="number" v-model="exchangeRate" class="input input-bordered" readonly />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  currency: {
    type: String,
    required: true
  }
});

const selectedCurrency = ref(props.currency);
const exchangeRate = ref(1);
const currencies = ref(['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD']);

const fetchExchangeRate = async (currency) => {
  try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
    const data = await response.json();
    exchangeRate.value = data.rates[selectedCurrency.value];
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
  }
};

watch(selectedCurrency, (newCurrency) => {
  fetchExchangeRate(newCurrency);
});
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
