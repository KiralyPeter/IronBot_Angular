import { TestBed } from '@angular/core/testing';

import { RobotService } from './RobotService';

describe('RobotService', () => {
  let service: RobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
