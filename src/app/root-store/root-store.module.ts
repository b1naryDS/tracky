import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './series-store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { SeriesEffects } from './series-store/effects';
import { SeriesService } from './series-store/series.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    StoreModule.forFeature("series", reducer),
    EffectsModule.forFeature([SeriesEffects]),
  ],
  providers: [SeriesService]
})
export class RootStoreModule { }
