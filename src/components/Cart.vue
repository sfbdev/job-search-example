<template>
  <div class="cart-wrapper">
    <div class="cart d-flex flex-column h-100">
      <div class="cart-header">
        <div class="logo">
          <img
            :src="job.imageUrl"
            :alt="job.companyName"
            class="rounded"
            width="50"
            height="50"
          />
        </div>
      </div>
      <div class="cart-body">
        <div class="description d-flex flex-column text-left mt-3">
          <!-- <span class="company-name">{{ job.companyName }}</span> -->
          <span class="position font-weight-bold"
            >{{ job.positionName }} |
            <strong>  {{ job.durationDayText }}</strong></span
          >
          <span class="location"> {{ job.cityName }}</span>
          <span class="detail mt-2">{{
            job.detail.substring(0, 100) + ".."
          }}</span>
        </div>
      </div>
      <div class="cart-footer d-flex justify-content-end mt-2">
        <router-link
          class="btn btn-purple"
          :to="{
            path: 'jobdetail/' + job.jobId,
            params: { jobId: job.jobId },
          }"
          >Detayları Gör</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    job: {
      type: Object,
      default: Object,
    },
    isJobDetail: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
