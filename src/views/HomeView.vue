<script setup lang="ts">
import { onMounted } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import { useCountryStore } from '@/stores/country'

const store = useCountryStore()

onMounted(() => {
  store.getCountry()
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
