import { TestBed, inject } from '@angular/core/testing';

import { PosteosService } from './posteos.service';

describe('PosteosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosteosService]
    });
  });

  it('should be created', inject([PosteosService], (service: PosteosService) => {
    expect(service).toBeTruthy();
  }));
});
