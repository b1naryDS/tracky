import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, exhaustMap } from 'rxjs/operators';
import { LOAD_SERIES, LoadSeriesSuccess } from './actions';
import { HttpClient } from 'selenium-webdriver/http';
import { SeriesService } from './series.service';

@Injectable()
export class SeriesEffects {
    constructor(private actions$: Actions, private http: SeriesService){}

    @Effect()
    loadSeries$ = this.actions$.pipe(
        ofType(LOAD_SERIES),
        exhaustMap( () => {
            console.log("effekt");
            return this.http.getSeries().pipe(
                map(series => new LoadSeriesSuccess(series))
            )
        })
        //ubaciti dohvačanje servisom serije
    )
}