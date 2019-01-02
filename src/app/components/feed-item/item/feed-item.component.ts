import { Component, OnInit, Input } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  @Input() serie: Serie;

  constructor() { }

  ngOnInit() {
  }

}
