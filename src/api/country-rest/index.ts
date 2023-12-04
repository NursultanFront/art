import { BasicRest } from '../basic-rest'

import type { AxiosInstance } from 'axios'
import type { ICountryRestPayload } from './types'

export class CountryRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint)
  }

  public getCounrty(params: ICountryRestPayload) {
    return this.postRequest('/test/', params)
  }
}
