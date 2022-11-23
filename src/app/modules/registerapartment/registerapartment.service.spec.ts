/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterapartmentService } from './registerapartment.service';

describe('Service: Registerapartment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterapartmentService]
    });
  });

  it('should ...', inject([RegisterapartmentService], (service: RegisterapartmentService) => {
    expect(service).toBeTruthy();
  }));
});
