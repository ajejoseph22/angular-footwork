import { Component, OnChanges, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input()
  rating: number;
  starWidth: number;

  @Output()
  clickedARating: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 15;
  }

  onRatingClick(): void {
    this.clickedARating.emit(this.rating);
  }
}
