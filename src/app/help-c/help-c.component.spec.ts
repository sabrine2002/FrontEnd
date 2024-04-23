import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCComponent } from './help-c.component';

describe('HelpCComponent', () => {
  let component: HelpCComponent;
  let fixture: ComponentFixture<HelpCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpCComponent]
    });
    fixture = TestBed.createComponent(HelpCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
