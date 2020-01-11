import { TestBed, async, inject } from '@angular/core/testing';

import { ContentEditorGuard } from './content-editor.guard';

describe('ContentEditorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentEditorGuard]
    });
  });

  it('should ...', inject([ContentEditorGuard], (guard: ContentEditorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
