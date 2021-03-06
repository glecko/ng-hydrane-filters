import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from './md/md.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const imports: any = [
  // Angular Modules
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule,
  FlexLayoutModule,
  NoopAnimationsModule,

  // Custom Modules
  MaterialDesignModule,
];

@NgModule({
  imports: [
    ...imports
  ],
  exports: [
    ...imports
  ],
})
export class SharedModule {}
