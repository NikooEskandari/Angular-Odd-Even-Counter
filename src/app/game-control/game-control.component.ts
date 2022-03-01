import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() countingNumbersCreated = new EventEmitter<{countingNumbers: number[]}>();
  countingNumbers: number[] = [];
  counterIndex = 0;
  myInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  SetCounter(){
    let numbers = this.countingNumbers;
    let index = this.counterIndex;
    let numbersCreated = this.countingNumbersCreated;

    this.myInterval = setInterval(function() {
      numbers.push(index);
      numbersCreated.emit({
        countingNumbers: numbers
      })
      index++;
    }, 1);
  }

  ClearCounter(){
    let numbers = [];
    let index = 0;

    clearInterval(this.myInterval);
  }

}
