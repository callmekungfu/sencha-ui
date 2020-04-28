import { TestBed } from '@angular/core/testing';

import { NgPolarisService } from './ng-polaris.service';

describe('NgPolarisService', () => {
  let service: NgPolarisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPolarisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
