import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {
  timer: number = 0;
  interval: any;
  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  selectedDigits: string = "";
  finished: boolean = false;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      }

      if (this.timer <= 0) {
        this.stopTimer();
        this.clearTimer();
        this.selectedDigits = "";
        this.finished = true;
        setTimeout(() => {
          this.finished = false;
        }, 2000);
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  clearTimer() {
    clearInterval(this.interval);
    this.selectedDigits = "";
    this.timer = 0;
  }

  addDigit(digit: number) {
    this.finished = false;
    if (this.selectedDigits.length < 4) {
      this.selectedDigits += digit.toString();

      if (this.selectedDigits.length == 1 || this.selectedDigits.length == 2) {
        this.timer = +this.selectedDigits;
      }
      else if (this.selectedDigits.length == 3 || this.selectedDigits.length == 4) {
        const minutes = Math.floor(+this.selectedDigits / 100);
        const seconds = +this.selectedDigits % 100;
        this.timer = minutes * 60 + seconds;
      }
    }
  }

  add30s() {

    this.timer += 30;
  }

  add1m() {

    this.timer += 60;
  }

}