<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Labor Price</h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Labor Cost per Hour</span>
        </label>
        <input type="number" v-model="laborCostPerHour" placeholder="Enter labor cost per hour" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Labor Hours</span>
        </label>
        <input type="number" v-model="laborHours" placeholder="Enter labor hours" class="input input-bordered" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  laborCostPerHour: {
    type: Number,
    required: true
  },
  laborHours: {
    type: Number,
    required: true
  }
});

const laborCostPerHour = ref(props.laborCostPerHour);
const laborHours = ref(props.laborHours);
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
