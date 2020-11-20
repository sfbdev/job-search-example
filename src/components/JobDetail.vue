<template>
  <div class="job-detail-wrapper">
    <div class="job-detail d-flex flex-column">
      <div class="job-detail-header position-absolute">
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
      <div class="job-detail-body">
        <div class="description d-flex flex-column text-left mt-3">
          <!-- <span class="company-name">{{ job.companyName }}</span> -->
          <span class="position font-weight-bold mt-2"
            >{{ job.positionName }} |
            <strong> {{ job.durationDayText }}</strong></span
          >
          <span class="location"> {{ job.cityName }}</span>
          <span class="detail mt-2">{{ job.detail }}</span>
        </div>
      </div>
      <div class="job-detail-footer d-flex justify-content-end mt-2">
        <router-link
          class="btn btn-purple"
          :to="{
            path: 'jobdetail/' + job.jobId,
            params: { jobId: job.jobId },
          }"
          >İlana Başvur</router-link
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
  },
  data() {
    return {};
  },
};
</script>
