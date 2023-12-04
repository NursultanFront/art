import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api'

export const useCountryStore = defineStore('country', () => {
  function getCountry() {
    try {
      const res = api.countryRest.getCounrty({
        filters: { iso_3166_1_a2: '' },
        paginate: { page: 2, pp_items: 5 }
      })

      return res
    } catch (error) {
      console.log(error)
    }
  }

  return { getCountry }
})
