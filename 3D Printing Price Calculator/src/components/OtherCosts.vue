<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Other Costs</h2>
      <div v-for="(cost, index) in otherCosts" :key="index" class="form-control">
        <label class="label">
          <span class="label-text">Cost Name</span>
        </label>
        <input type="text" v-model="cost.name" placeholder="Enter cost name" class="input input-bordered" />
        <label class="label">
          <span class="label-text">Amount</span>
        </label>
        <input type="number" v-model="cost.amount" placeholder="Enter amount" class="input input-bordered" />
        <button @click="removeOtherCost(index)" class="btn btn-error mt-2">Remove</button>
      </div>
      <button @click="addOtherCost" class="btn btn-primary mt-4">Add Other Cost</button>
      <div class="mt-4">
        <h3 class="text-lg font-bold">Total Other Costs: {{ totalOtherCosts }} {{ currency }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  otherCosts: {
    type: Array,
    required: true
  },
  addOtherCost: {
    type: Function,
    required: true
  },
  removeOtherCost: {
    type: Function,
    required: true
  },
  totalOtherCosts: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  }
});

const otherCosts = ref(props.otherCosts);
const addOtherCost = props.addOtherCost;
const removeOtherCost = props.removeOtherCost;
const totalOtherCosts = props.totalOtherCosts;
const currency = ref(props.currency);
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
