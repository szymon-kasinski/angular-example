import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdviceComponent } from './advice/advice.component';
import { XkcdComponent } from './xkcd/xkcd.component';

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, MatCardModule, MatFormFieldModule, FormsModule, HttpClientTestingModule, LoggerTestingModule, MatInputModule, BrowserAnimationsModule],
      declarations: [
        AppComponent, AdviceComponent, XkcdComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tip of the day'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tip of the day');
  });

});
