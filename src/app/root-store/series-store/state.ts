import { Serie } from "../../models/serie.model";

export interface SeriesState {
    series: Serie[],
    loading: boolean,
}

export const initialSeriesState: SeriesState = {
    series: null,
    loading: false,
}