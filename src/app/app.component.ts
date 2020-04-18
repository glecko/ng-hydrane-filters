import { Component, OnInit } from '@angular/core';
import { CountryDataService } from './services/country-data/country-data.service';
import { CountryDataModel } from './services/country-data/country-data.model';
import { ALL_SELECTED_METRICS, ALL_VALUES, METRIC_SELECTION_OTIONS } from './app.model';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private countries: CountryDataService,
  ) {}

  countriesData: CountryDataModel[];
  filteredCountriesData: CountryDataModel[];

  // Continents
  selectedContinent = ALL_VALUES;
  continentOptions: string[];

  // Metric
  selectedMetrics = ALL_SELECTED_METRICS;
  metricOptions = METRIC_SELECTION_OTIONS;

  async ngOnInit() {
    const data = await this.countries.fetchData();
    this.countriesData = data.countriesData;
    this.continentOptions = [ ALL_VALUES, ...data.uniqueContinents ];
    this.filterCountriesData();
  }

  onTableScroll(e) {}

  onContinentSelected(e) {
    this.filterCountriesData();
  }

  private filterCountriesData() {
    let filteredCountriesData = this.countriesData;
    if (this.selectedContinent && this.selectedContinent !== ALL_VALUES) {
      filteredCountriesData = this.countriesData.filter((country) => country.continentName === this.selectedContinent);
    }

    // We need to remember to use cloneDeep to update the reference in order for Angular to detect the changes
    this.filteredCountriesData = cloneDeep(filteredCountriesData);
  }
}
