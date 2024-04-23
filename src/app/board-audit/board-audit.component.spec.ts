import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAuditComponent } from './board-audit.component';

describe('BoardAuditComponent', () => {
  let component: BoardAuditComponent;
  let fixture: ComponentFixture<BoardAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardAuditComponent]
    });
    fixture = TestBed.createComponent(BoardAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
