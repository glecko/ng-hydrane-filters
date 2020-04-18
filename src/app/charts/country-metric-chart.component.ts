import { Component, Input } from '@angular/core';
import { CountryDataModel } from '../services/country-data/country-data.model';

@Component({
  selector: 'app-country-metric-chart',
  templateUrl: './country-metric-chart.component.html',
})
export class CountryMetricChartComponent {

  @Input() countriesData: CountryDataModel[];
  @Input() metric: string;
  @Input() maxChartResults: number;

  chart = {
    height: 200,
    type: 'pie'
  };
}
