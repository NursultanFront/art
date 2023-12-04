export interface ICountryRestPayload {
  filters: {
    iso_3166_1_a2: string
  }
  paginate: {
    page: number
    pp_items: number
  }
}
