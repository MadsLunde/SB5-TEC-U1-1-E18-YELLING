import { TestBed } from '@angular/core/testing';

import { HttpReqsService } from './http-reqs.service';

describe('HttpReqsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpReqsService = TestBed.get(HttpReqsService);
    expect(service).toBeTruthy();
  });
});
