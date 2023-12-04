import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api'
import type { CountryData, Rpag } from '@/types'

export const useCountryStore = defineStore('country', () => {
  const countryList = ref<CountryData[]>([])
  const pagination = ref<Rpag>()

  async function getCountry() {
    try {
      const res = await api.countryRest.getCounrty({
        filters: { iso_3166_1_a2: '' },
        paginate: { page: 2, pp_items: 5 }
      })

      countryList.value = res.page_data.data
      pagination.value = res.page_data.rpag
    } catch (error) {
      console.log(error)
    }
  }

  return { countryList, pagination, getCountry }
})
