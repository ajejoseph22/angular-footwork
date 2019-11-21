import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  pageTitle: string = 'My fucking string';

  clickedARating(rating: number): void {
    this.pageTitle = rating.toString();
  }
}
