import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Serie } from "../../models/serie.model";
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/root-store/state';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { selectSeriesList, selectSeriesState, getSeries } from "../../root-store/selectors";
import { LoadSeries } from 'src/app/root-store/series-store/actions';
import { SeriesState } from 'src/app/root-store/series-store/state';

@Component({
  selector: 'app-feed-item-container',
  template: `
    <div>
      <div>
        <a
          routerLink="./">
          Neki link
        </a>
      </div>
      <div>
        <app-feed-item
        *ngFor="let serie of series$"
        [serie]="serie">
        </app-feed-item>
      </div>
      <button (click)="printit()">printit</button>
    </div>
  `,
})
export class FeedItemContainer implements OnInit {
  series$: Serie[];
  series2: Serie[];
  test: any;
  constructor(private store: Store<SeriesState>) {
    this.series2 =
      [
        { id: 1, grade: 5, title: "vikings", seasons: 4 },
        { id: 2, grade: 5, title: "jane", seasons: 4 },
        { id: 3, grade: 5, title: "spn", seasons: 14 }
      ];

      
  }
  ngOnInit() {

    this.store.pipe(
      //select(selectSeriesState),
      select(getSeries),
      tap((value)=>this.series$=value),
      tap(() => console.log("this.series$: "+this.series$)),
    ).subscribe();
  }
  printit(){
    this.store.dispatch(new LoadSeries());
  }

}