<script setup lang="ts">
import { useCountryStore } from '@/stores/country'
import type { CountryData } from '@/types'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const store = useCountryStore()
const router = useRouter()
const props = defineProps({
  country: String
})

const countryData = ref<CountryData>()

onMounted(() => {
  if (store.countryList.length === 0) {
    store.getCountry()
  }
})

watchEffect(() => {
  const foundCountry = store.countryList.find((item) => item.iso_3166_1_a2 === props.country)

  if (!foundCountry && store.countryList.length > 0) {
    router.push('/404')
    return
  }

  countryData.value = foundCountry
})
</script>

<template>
  <div>{{ countryData?.printable_name }}</div>
</template>

<style scoped></style>
