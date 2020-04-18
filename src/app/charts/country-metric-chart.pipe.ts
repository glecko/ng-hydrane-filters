import { Pipe, PipeTransform } from '@angular/core';
import { ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
import { CountryDataModel } from '../services/country-data/country-data.model';

@Pipe({
  name: 'toApexChartTitle',
  pure: true
})
export class CountryMetricChartTitlePipe implements PipeTransform {
  transform(title: string): ApexTitleSubtitle {
    return {
      text: title,
    };
  }
}

@Pipe({
  name: 'toApexChartLabels',
  pure: true
})
export class CountryMetricChartLabelsPipe implements PipeTransform {
  private static getCountryLabels(countriesData: CountryDataModel[], metric: string, maxChartResults: number): string[] {
    const sortedCountries = CountryMetricChartSeriesPipe.sortByMetric(countriesData, metric);
    const countriesByAggregation = CountryMetricChartSeriesPipe.splitCountriesByAggregation(sortedCountries, maxChartResults);
    const displayCountryNames = countriesByAggregation.countriesToDisplay.map((country) => country.countryName);
    return ['Others', ...displayCountryNames];
  }

  transform(countriesData: CountryDataModel[], metric: string, maxChartResults: number): string[] {
    return CountryMetricChartLabelsPipe.getCountryLabels(countriesData, metric, maxChartResults);
  }
}

@Pipe({
  name: 'toApexChartSeries',
  pure: true
})
export class CountryMetricChartSeriesPipe implements PipeTransform {
  static sortByMetric(countriesData: CountryDataModel[], metric: string): CountryDataModel[] {
    return countriesData.sort((a, b) => {
      return CountryMetricChartSeriesPipe.getCountryMetricValue(b, metric) - CountryMetricChartSeriesPipe.getCountryMetricValue(a, metric);
    })
  }

  static splitCountriesByAggregation(countriesData: CountryDataModel[], maxChartResults: number): {countriesToDisplay: CountryDataModel[], countriesToAggregate: CountryDataModel[]} {
    const countriesToDisplay  = countriesData.slice(0, maxChartResults);
    const countriesToAggregate = countriesData.slice(maxChartResults, countriesData.length);
    return { countriesToDisplay, countriesToAggregate };
  }

  private static getCountryMetricValue(country: CountryDataModel, metric: string): number {
    if (country[metric] && !isNaN(country[metric])) {
      return parseInt(country[metric], 10);
    }
    return 0;
  }

  private static getCountryMetricSeries(countriesData: CountryDataModel[], metric: string, maxChartResults: number): ApexNonAxisChartSeries {
    const sortedCountries = CountryMetricChartSeriesPipe.sortByMetric(countriesData, metric);
    const countriesByAggregation = CountryMetricChartSeriesPipe.splitCountriesByAggregation(sortedCountries, maxChartResults);
    const otherCountriesAggregate = countriesByAggregation.countriesToAggregate.reduce((acc: number, country: CountryDataModel) => {
      return acc + CountryMetricChartSeriesPipe.getCountryMetricValue(country, metric);
    }, 0);
    const countriesToDisplayMetric = countriesByAggregation.countriesToDisplay.map((country) => CountryMetricChartSeriesPipe.getCountryMetricValue(country, metric));

    return [otherCountriesAggregate, ...countriesToDisplayMetric];
  }

  transform(countriesData: CountryDataModel[], metric: string, maxChartResults: number): ApexNonAxisChartSeries {
    return CountryMetricChartSeriesPipe.getCountryMetricSeries(countriesData, metric, maxChartResults);
  }
}
