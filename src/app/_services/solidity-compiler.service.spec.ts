import { TestBed } from '@angular/core/testing';

import { SolidityCompilerService } from './solidity-compiler.service';

describe('SolidityCompilerService', () => {
  let service: SolidityCompilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolidityCompilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
