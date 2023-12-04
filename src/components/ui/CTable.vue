<script setup lang="ts">
import type { CountryData } from '@/types'

const props = defineProps<{ filter: CountryData[] }>()
</script>

<template>
  <div v-for="item in props.filter" :key="item.iso_3166_1_numeric" class="flex">
    <RouterLink :to="`country/${item.iso_3166_1_a2}`">
      {{ item.printable_name }}
    </RouterLink>
  </div>
</template>
