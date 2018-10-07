import { TestBed } from '@angular/core/testing';

import { ArchiveService } from './archive.service';
import { HttpClientModule } from '@angular/common/http';

describe('ArchiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: ArchiveService = TestBed.get(ArchiveService);
    expect(service).toBeTruthy();
  });
});
