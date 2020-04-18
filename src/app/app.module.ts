import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDataServiceModule } from './services/country-data/country-data.module';
import { SharedModule } from './shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CountryMetricChartComponent } from './charts/country-metric-chart.component';
import {
  CountryMetricChartSeriesPipe,
  CountryMetricChartLabelsPipe,
  CountryMetricChartTitlePipe
} from './charts/country-metric-chart.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryMetricChartComponent,
    CountryMetricChartSeriesPipe,
    CountryMetricChartLabelsPipe,
    CountryMetricChartTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountryDataServiceModule,
    SharedModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
