import { Component, OnInit } from '@angular/core';
import { CountryDataService } from './services/country-data/country-data.service';
import { CountryDataModel } from './services/country-data/country-data.model';
import {
  ALL_SELECTED_METRICS,
  ALL_VALUES,
  INFINITE_SCROLL_BATCH_SIZE, INFINITE_SCROLL_BOTTOM_BUFFER, MAX_CHART_DEFAULT_OPTION, MAX_CHART_RESULT_OPTIONS,
  METRIC_SELECTION_OTIONS
} from './app.model';
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
  tableLoadedCountriesData: CountryDataModel[];

  // Continents
  selectedContinent = ALL_VALUES;
  continentOptions: string[];

  // Metric
  selectedMetrics = ALL_SELECTED_METRICS;
  metricOptions = METRIC_SELECTION_OTIONS;

  // Charts
  maxChartResultOptions = MAX_CHART_RESULT_OPTIONS;
  maxChartResults = MAX_CHART_DEFAULT_OPTION;

  // Scrolling
  maxElementsToSelectByScrolling = INFINITE_SCROLL_BATCH_SIZE;

  async ngOnInit() {
    const data = await this.countries.fetchData();
    this.countriesData = data.countriesData;
    this.continentOptions = [ ALL_VALUES, ...data.uniqueContinents ];
    this.filterCountriesData();
  }

  onTableScroll(e: {target: { offsetHeight: number; scrollHeight: number; scrollTop: number }}) {
    // Based on solution for angular material table infinite scroll
    // https://github.com/angular/components/issues/9858

    const tableViewHeight = e.target.offsetHeight; // viewport: ~500px
    const tableScrollHeight = e.target.scrollHeight; // length of all table
    const scrollLocation = e.target.scrollTop; // how far user scrolled within the table

    const limit = tableScrollHeight - tableViewHeight - INFINITE_SCROLL_BOTTOM_BUFFER;
    if (scrollLocation > limit) {
      this.maxElementsToSelectByScrolling += INFINITE_SCROLL_BATCH_SIZE;
      this.filterTableLoadedCountriesData();
    }
  }

  onContinentSelected(e) {
    this.filterCountriesData();
  }

  private filterTableLoadedCountriesData() {
    // Filter by max amount allowed by infinite scroll
    this.tableLoadedCountriesData = this.filteredCountriesData.slice(0, this.maxElementsToSelectByScrolling);
  }

  private filterCountriesData() {
    let filteredCountriesData = this.countriesData;
    if (this.selectedContinent && this.selectedContinent !== ALL_VALUES) {
      filteredCountriesData = this.countriesData.filter((country) => country.continentName === this.selectedContinent);
    }
    // We need to remember to use cloneDeep to update the reference in order for Angular to detect the changes
    this.filteredCountriesData = cloneDeep(filteredCountriesData);

    this.filterTableLoadedCountriesData();
  }
}
