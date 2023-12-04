import axios from 'axios'
import { CountryRest } from './country-rest'

class Api {
  public constructor() {
    this.endpoint = Api.createEndpoint()
    this.countryRest = new CountryRest(this.endpoint)
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: 'https://devops100.site',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  private readonly endpoint
  public countryRest
}

export const api = new Api()
