import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { FeedItemContainer } from './components/feed-item/feed-item-container';
import { FeedModule } from './components/feed.module'
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from './root-store/root-store.module';
import { EffectsModule } from '@ngrx/effects';
// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: FeedItemContainer,
  },
  //{    path: ':id', component: FeedItemComponent,},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    RootStoreModule,
    FeedModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
