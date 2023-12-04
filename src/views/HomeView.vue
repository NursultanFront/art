<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useCountryStore } from '@/stores/country'
import CTable from '@/components/ui/CTable.vue'
import ThePagination from '@/components/ui/ThePagination.vue'

const store = useCountryStore()

const onGetPage = async (value: number) => {
  await store.getCountry(value)
}

onMounted(() => {
  store.getCountry()
})
</script>

<template>
  <main>
    <div class="flex">
      <CTable :filter="store.countryList" />
    </div>
    <ThePagination
      :current-page="store.currentPage"
      :last-page="store.maxPage"
      @on-page-change="onGetPage"
    />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.flex {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
