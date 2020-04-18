import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryDataResponseModel, COUNTRY_DATA_ENDPOINT, CountryDataModel } from './country-data.model';

@Injectable()
export class CountryDataService {

  constructor(
    public http: HttpClient,
  ) {}

  private static getUniqueAttributeValues(countriesData: CountryDataModel[], attributeName: string): string[] {
    return [ ...new Set(countriesData.map((country: CountryDataModel) => country[attributeName])) ];
  }

  private static sortAlphabeticallyIgnoreCase(list: string[]): string[] {
    return list.sort((a: string, b: string) => a.toLowerCase().localeCompare(b.toLowerCase()));
  }

  async fetchData(): Promise<{ countriesData: CountryDataModel[], uniqueContinents: string[] }> {
    const responseData = await this.fetchCountriesData();
    const uniqueContinents = CountryDataService.getUniqueAttributeValues(responseData.geonames, 'continentName');
    return {
      countriesData: responseData.geonames,
      uniqueContinents: CountryDataService.sortAlphabeticallyIgnoreCase(uniqueContinents),
    };
  }

  private fetchCountriesData(): Promise<CountryDataResponseModel> {
    return this.http.get<CountryDataResponseModel>(COUNTRY_DATA_ENDPOINT).toPromise();
  }
}
