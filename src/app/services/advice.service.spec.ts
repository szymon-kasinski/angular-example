import { TestBed, getTestBed } from '@angular/core/testing';

import { AdviceService } from './advice.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

describe('AdviceService', () => {
  let injector: TestBed;
  let service: AdviceService;
  let httpMock: HttpTestingController;

  const dummyAdvice = {
    slip: {
      advice: "Some advice",
      slip_id: 12
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientTestingModule, LoggerTestingModule],
      providers: [AdviceService]
    });
    injector = getTestBed();
    service = injector.get(AdviceService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: AdviceService = TestBed.get(AdviceService);
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Advice[]>', () => {
    service.getAdvice().subscribe(advice => {
      expect(advice).toEqual(dummyAdvice);
    });

    const req = httpMock.expectOne(`https://api.adviceslip.com/advice`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyAdvice);
  });
});
