export interface Rpag {
  has_next: boolean
  has_previous: boolean
  has_other_pages: boolean
  next_page_number: number | null
  previous_page_number: number | null
  start_index: number
  end_index: number
  total_count: number
  selected_count: number
  pages: number
}

export interface CountryData {
  iso_3166_1_a2: string
  iso_3166_1_a3: string
  iso_3166_1_numeric: string
  printable_name: string
  name: string
  display_order: number
  is_shipping_country: boolean
}

interface PageData {
  data: CountryData[]
  rpag: Rpag
}

export interface ICountryResponse {
  form_errors: null
  success_message: string
  page_data: PageData
  redirect: string
  locale: string
  exc_stack: string
  debug: unknown[]
  user_groups: string
  user_perms: string
}
