import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dueTime = 500;
  searches: string[] = [];

  search($event: InputEvent) {

    this.searches.push(
      /**
       * You need to explicitly tell TypeScript the type of the HTMLElement which is your target.
       * @see https://stackoverflow.com/a/42066698/6924437
       */
      ($event.target as HTMLInputElement).value
    );

  }

}
