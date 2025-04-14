<script setup lang="ts">
import { defineProps } from 'vue';
import { Country } from '../models/country.models';

interface Props {
    conutries: Country[];
}

defineProps<Props>();

</script>

<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div class="border border-gray-300 p-3" v-for="country in conutries" :key="country.name.common">
            {{ country.name.common }}
        </div>
    </div>
</template>

