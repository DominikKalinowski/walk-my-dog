import { TestBed } from '@angular/core/testing';

import { RestApiInterceptor } from './rest-api.interceptor';

describe('RestApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RestApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RestApiInterceptor = TestBed.inject(RestApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
