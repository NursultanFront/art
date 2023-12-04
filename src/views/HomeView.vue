<script setup lang="ts">
import { onMounted } from 'vue'
import { useCountryStore } from '@/stores/country'
import CTable from '@/components/ui/CTable.vue'

const store = useCountryStore()

onMounted(() => {
  store.getCountry()
})
</script>

<template>
  <main>
    <CTable :filter="store.countryList" />
  </main>
</template>
