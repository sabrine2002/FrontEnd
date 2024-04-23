import { TestBed } from '@angular/core/testing';

import { SolidityAnalyzerService } from './solidity-analyzer.service';

describe('SolidityAnalyzerService', () => {
  let service: SolidityAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolidityAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
