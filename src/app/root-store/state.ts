// možda mergat sa reducer.ts

import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import { SeriesState, initialSeriesState } from "./series-store/state";

export interface AppState {
    seriesState: SeriesState;
    isLoading?: boolean;
    error?: any;
}

export const initialState: AppState = {
    seriesState: initialSeriesState,
    isLoading: false,
    error: null,
} 