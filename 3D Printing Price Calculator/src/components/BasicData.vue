<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Basic Data</h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Job Name</span>
        </label>
        <input type="text" v-model="jobName" placeholder="Enter job name" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Currency</span>
        </label>
        <input type="text" v-model="currency" placeholder="Enter currency (e.g., €)" class="input input-bordered" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  jobName: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  }
});

const jobName = ref(props.jobName);
const currency = ref(props.currency);
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
