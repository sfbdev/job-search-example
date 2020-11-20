<template>
  <div class="job-detail">
    <div class="container">
      <div class="back my-4">
        <router-link :to="'/joblist'">İş listesine Geri Dön</router-link>
      </div>
      <div class="row">
        <app-job-detail
          class="col-12"
          v-for="(jobDetail, id) in job"
          :job="jobDetail"
          :key="id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      jobs: (state) => state.jobList.result.items,
    }),

    job() {
      return this.jobs.filter((v) => v.jobId === this.$route.params.jobid);
    },
  },
};
</script>
