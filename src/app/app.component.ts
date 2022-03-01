import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-practice';
  countingNumbersElement = {countingNumbers: []};

  onCountNumbers(event){
    this.countingNumbersElement.countingNumbers = event.countingNumbers;
  }
}
