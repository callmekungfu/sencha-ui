import { TestBed } from '@angular/core/testing';

import { SenchaUiService } from './sencha-ui.service';

describe('SenchaUiService', () => {
  let service: SenchaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenchaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
