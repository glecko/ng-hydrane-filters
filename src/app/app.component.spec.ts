import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CountryDataService } from './services/country-data/country-data.service';
import { mockCountryEndpointResponse } from './spec/data/country-data-response.mock';



describe('AppComponent', () => {
  const countryDataServiceStub: Partial<CountryDataService> = {
    fetchData: () => Promise.resolve({ countriesData: mockCountryEndpointResponse.geonames, uniqueContinents: [] })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [{
        provide: CountryDataService,
        useValue: countryDataServiceStub
      }],
      declarations: [
        AppComponent
      ],
    }).compileComponents();


  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
