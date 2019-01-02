import { SeriesState } from "./series-store/state";
import { AppState } from "./state";

import { createSelector } from "@ngrx/store";

export const selectSeriesState = (state: AppState) => state.seriesState;

export const getSeries = (state: SeriesState) => state.series;

export const selectSeriesList = createSelector(
    selectSeriesState,
    (state: SeriesState) => state.series
)