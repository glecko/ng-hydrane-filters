import { CountryDataResponseModel } from '../../services/country-data/country-data.model';

export const mockCountryEndpointResponse: CountryDataResponseModel = {
  geonames: [
    {
      continent: 'EU',
      capital: 'Andorra la Vella',
      languages: 'ca',
      geonameId: 3041565,
      south: 42.42874300100004,
      isoAlpha3: 'AND',
      north: 42.65576500000003,
      fipsCode: 'AN',
      population: '84000',
      east: 1.786576000000025,
      isoNumeric: '020',
      areaInSqKm: '468.0',
      countryCode: 'AD',
      west: 1.413760001000071,
      countryName: 'Andorra',
      continentName: 'Europe',
      currencyCode: 'EUR'
    },
    {
      continent: 'AS',
      capital: 'Abu Dhabi',
      languages: 'ar-AE,fa,en,hi,ur',
      geonameId: 290557,
      south: 22.6315119400001,
      isoAlpha3: 'ARE',
      north: 26.0693916590001,
      fipsCode: 'AE',
      population: '4975593',
      east: 56.381222289,
      isoNumeric: '784',
      areaInSqKm: '82880.0',
      countryCode: 'AE',
      west: 51.5904085340001,
      countryName: 'United Arab Emirates',
      continentName: 'Asia',
      currencyCode: 'AED'
    },
    {
      continent: 'EU',
      capital: 'Madrid',
      languages: 'es-ES,ca,gl,eu,oc',
      geonameId: 2510769,
      south: 36.0001044260548,
      isoAlpha3: 'ESP',
      north: 43.7913565913767,
      fipsCode: 'SP',
      population: '46505963',
      east: 4.32778473043961,
      isoNumeric: '724',
      areaInSqKm: '504782.0',
      countryCode: 'ES',
      west: -9.30151567231899,
      countryName: 'Spain',
      continentName: 'Europe',
      currencyCode: 'EUR'
    }
  ]
};
