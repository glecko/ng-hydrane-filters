export const COUNTRY_DATA_ENDPOINT = 'http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane';

export interface CountryDataResponseModel {
  geonames: CountryDataModel[];
}

export interface CountryDataModel {
  continent: string;
  capital: string;
  languages: string;
  geonameId: number;
  isoAlpha3: string;
  fipsCode: string;
  population: string;
  north: number;
  south: number;
  east: number;
  west: number;
  isoNumeric: string;
  areaInSqKm: string;
  countryCode: string;
  countryName: string;
  continentName: string;
  currencyCode: string;
}

