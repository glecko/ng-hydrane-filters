import { TestBed, async } from '@angular/core/testing';
import { CountryDataService } from './country-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { COUNTRY_DATA_ENDPOINT } from './country-data.model';
import { mockCountryEndpointResponse } from '../../spec/data/country-data-response.mock';

describe('CountryDataService', () => {
  let sut: CountryDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CountryDataService
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    sut = TestBed.inject(CountryDataService);
  }));

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('fetchData() should perform the request to the endpoint and return the correct continents sorted alphabetically',  () => {
    sut.fetchData().then((data) => {
      expect(data.countriesData.length).toBe(mockCountryEndpointResponse.geonames.length);
      expect(data.uniqueContinents).toEqual(['Asia', 'Europe']);
    });
    const req = httpTestingController.expectOne(COUNTRY_DATA_ENDPOINT);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCountryEndpointResponse);
    httpTestingController.verify();
  });
});
