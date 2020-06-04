import { TestBed } from '@angular/core/testing';

import { NasaPodService } from './nasa-pod.service';

describe('NasaPodService', () => {
  let service: NasaPodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaPodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
