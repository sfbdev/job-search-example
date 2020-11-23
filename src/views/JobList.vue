<template>
  <div class="job-list mt-4">
    <div class="container">
      <div class="search d-flex">
        <div class="form-group location w-50">
          <select
            class="form-control border-0 rounded-0"
            id="city-search"
            v-model="selectedLocation"
          >
            <option value="" selected>Lokasyon Seçiniz</option>
            <option v-for="(city, index) in cities" :key="index" :value="city">
              {{ city }}
            </option>
          </select>
        </div>
        <div class="form-group w-50">
          <input
            type="text"
            class="form-control border-0 rounded-0"
            id="position-search"
            v-model="search"
            placeholder="Pozisyon ara..."
          />
        </div>
        <div class="form-group d-flex align-items-end">
          <span
            class="btn btn-clear btn-purple h-100 d-flex align-items-center"
            @click="
              search = '';
              selectedLocation = '';
            "
            >Temizle</span
          >
        </div>
      </div>
      <div class="row">
        <template v-if="filterJobs.length != 0">
          <app-cart
            class="col-lg-4 mb-3"
            v-for="(job, id) in filterJobs"
            :job="job"
            :key="id"
          />
        </template>
        <div class="col-12" v-else>
          Aradığınız filtreye uygun sonuç bulunamadı.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      search: '',
      selectedLocation: '',
    };
  },

  computed: {
    ...mapState({
      jobs: (state) => state.jobList.result.items,
      cities: (state) => state.cities,
    }),

    filterJobs() {
      let filteredJobs = this.jobs;
      if (this.search) {
        filteredJobs = this.jobs.filter((job) => {
          const positionName = job.positionName
            .toLowerCase()
            .includes(this.search);
          const companyName = job.companyName
            .toLowerCase()
            .includes(this.search);
          const cityName = job.cityName.toLowerCase().includes(this.search);

          return positionName || companyName || cityName;
        });
      }
      if (this.selectedLocation) {
        filteredJobs = filteredJobs.filter(
          (job) => job.cityName.toLowerCase() === this.selectedLocation.toLowerCase(),
        );
      }
      return filteredJobs;
    },
  },

  watch: {
    selectedLocation() {
      if (this.selectedLocation === 'Lokasyon Seçiniz') {
        this.selectedLocation = '';
      }
    },
  },
};
</script>
