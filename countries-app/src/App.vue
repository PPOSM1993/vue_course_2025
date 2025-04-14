<script setup lang="ts">
//import CountryApp from './components/CountryApp.vue';
import { onMounted, ref } from 'vue';
import PageHeader from './components/PageHeader.vue';
import CountryList from './components/CountryList.vue';
import axiosClient from './utils/axios';

import { Country } from './models/country.models';


const countries = ref<Country[]>([]);


const fetchCountries = async () => {
  try {
    const { data } = await axiosClient.get("/all");
    countries.value = data;
    //console.log(data);

  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  fetchCountries();
});

</script>

<template>
  <PageHeader />
  <div class="container max-w-screen-lg mx-auto px-6">
    <CountryList :conutries="countries" />

  </div>
</template>