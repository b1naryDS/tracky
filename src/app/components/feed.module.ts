import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeedComponent } from './feed/feed.component';
import { FeedListComponent } from './feed-list/list/feed-list.component';
import { FeedItemModule } from './feed-item/feed-item.module';

@NgModule({
  declarations: [
    FeedComponent,
    FeedListComponent,
  ],
  imports: [
    FeedItemModule,
  ],
  providers: [],
})
export class FeedModule { }
