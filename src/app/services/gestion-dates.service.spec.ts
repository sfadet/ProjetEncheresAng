import { TestBed } from '@angular/core/testing';

import { GestionDatesService } from './gestion-dates.service';

describe('GestionDatesService', () => {
  let service: GestionDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
