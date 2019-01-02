import { FeedItemComponent } from './item/feed-item.component';
import { NgModule } from '@angular/core';
import { FeedItemContainer } from './feed-item-container';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FeedItemComponent,
    FeedItemContainer,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class FeedItemModule { }
