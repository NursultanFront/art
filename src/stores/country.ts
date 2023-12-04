import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api'
import type { CountryData, Rpag } from '@/types'

export const useCountryStore = defineStore('country', () => {
  const countryList = ref<CountryData[]>([])
  const pagination = ref<Rpag>()

  const currentPage = computed(() => {
    if (pagination.value?.has_previous === false) {
      return 1
    }
    return (pagination.value?.previous_page_number ?? 0) + 1
  })

  const maxPage = computed(() => {
    return pagination.value?.pages ?? 50
  })

  async function getCountry(page = 1) {
    try {
      const res = await api.countryRest.getCounrty({
        filters: { iso_3166_1_a2: '' },
        paginate: { page: page, pp_items: 10 }
      })

      countryList.value = res.page_data.data
      pagination.value = res.page_data.rpag
    } catch (error) {
      console.log(error)
    }
  }

  return { countryList, pagination, getCountry, currentPage, maxPage }
})
