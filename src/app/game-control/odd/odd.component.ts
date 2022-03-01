import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() countingNumbersElement: any;

  constructor() { }

  ngOnInit(): void {
  }

  isOdd(num) {
    return !(num % 2 == 0);
  }

}
