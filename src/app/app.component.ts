import { Component, OnInit } from '@angular/core';
import { AdviceService } from "./services/advice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Tip of the day';

  constructor() { }

  ngOnInit() { }

}
