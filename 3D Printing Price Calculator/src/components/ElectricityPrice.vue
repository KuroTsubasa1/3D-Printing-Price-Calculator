<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Electricity Price</h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Power Consumption (Watts)</span>
        </label>
        <input type="number" v-model="powerConsumptionInWatts" placeholder="Enter power consumption in watts" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Power Cost per Kilowatt Hour</span>
        </label>
        <input type="number" v-model="powerCostPerKilowattHour" placeholder="Enter power cost per kilowatt hour" class="input input-bordered" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  powerConsumptionInWatts: {
    type: Number,
    required: true
  },
  powerCostPerKilowattHour: {
    type: Number,
    required: true
  }
});

const powerConsumptionInWatts = ref(props.powerConsumptionInWatts);
const powerCostPerKilowattHour = ref(props.powerCostPerKilowattHour);
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
