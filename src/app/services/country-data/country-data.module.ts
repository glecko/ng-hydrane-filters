import { NgModule } from '@angular/core';
import { CountryDataService } from './country-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    CountryDataService,
  ],
})
export class CountryDataServiceModule { }
