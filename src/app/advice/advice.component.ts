import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../services/advice.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {

  advices: string[] = [];
  badAnswer = false;

  constructor(
    private adviceService: AdviceService,
  ) { }

  ngOnInit() {
    this.getAdvice();
  }

  submitAdvice(form): void {
    if (form.value.term && form.value.term.length > 2) {
      this.findAdvice(form.value.term);
    }
  }

  getAdvice(): void {
    this.adviceService.getAdvice().subscribe(advice => {
      this.advices.push(advice.slip.advice);
    });
  }

  findAdvice(searchTerm): void {
    this.adviceService.getAdviceWithTerm(searchTerm)
      .subscribe(

        advice => {
          this.advices = [];
          if (advice.slips) {
            this.advices = advice.slips.map(e => e.advice);
            this.badAnswer = false;
          } else {
            this.advices[0] = "There is no advice for you";
            this.badAnswer = true;
          }
        },
      );
  }

}
